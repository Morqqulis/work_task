'use client'
import { useQuery } from '@tanstack/react-query'
import Loading from '@ui/Loading'
import { getBooks } from '@utils/functions'
import { useEffect, useState } from 'react'
import CheckoutItem from './CheckoutItem'
import CheckoutSummary from './CheckoutSummary'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

interface ICheckoutContainer {}

export interface IBook {
   id: string
   title: string
   subtitleShort: string
   numOfLikes: number
   price: number
   mainImage: string
}

export interface IProduct {
   id: string
   count: number
}

const CheckoutContainer: React.FC = (): JSX.Element => {
   const [showBooks, setShowBooks] = useState<(IBook & { count: number })[]>([])
   const router = useRouter()

   const { isPending, error, data } = useQuery({
      queryKey: ['books'],
      queryFn: getBooks,
      refetchOnWindowFocus: false
   })

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) {
         router.push('/')
        //  document.location.href = '/'
      }
   }, [])

   useEffect(() => {
      if (data) {
         const currentProducts = localStorage.getItem('products')
         const productsArray: IProduct[] = currentProducts ? JSON.parse(currentProducts) : []

         const filteredBooks = data.filter((book: IBook) =>
            productsArray.some((product: IProduct) => product.id === book.id)
         )

         setShowBooks(
            filteredBooks.map((book: IBook) => {
               const product = productsArray.find((product: IProduct) => product.id === book.id)
               if (!product) return { ...book, count: 1 }
               return { ...book, count: product.count }
            })
         )
      }
   }, [data])

   const handleRemoveBook = (id: string) => {
      setShowBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
      const currentProducts = localStorage.getItem('products')
      const productsArray: IProduct[] = currentProducts ? JSON.parse(currentProducts) : []
      const updatedProducts = productsArray.filter((product) => product.id !== id)
      localStorage.setItem('products', JSON.stringify(updatedProducts))
   }

   const handleIncrement = (id: string) => {
      setShowBooks((prevBooks) => {
         const updatedBooks = prevBooks.map((book) => {
            if (book.id === id) {
               const newCount = book.count + 1
               return { ...book, count: newCount }
            }
            return book
         })
         updateLocalStorage(updatedBooks)
         return updatedBooks
      })
   }

   const handleDecrement = (id: string) => {
      setShowBooks((prevBooks) => {
         const updatedBooks = prevBooks.map((book) => {
            if (book.id === id) {
               const newCount = Math.max(book.count - 1, 1)
               return { ...book, count: newCount }
            }
            return book
         })
         updateLocalStorage(updatedBooks)
         return updatedBooks
      })
   }

   const updateLocalStorage = (updatedBooks: (IBook & { count: number })[]) => {
      const currentProducts = updatedBooks.map((book) => ({ id: book.id, count: book.count }))
      localStorage.setItem('products', JSON.stringify(currentProducts))
   }

   const totalPrice = showBooks.reduce((total, book) => total + book.price * book.count, 0)

   return (
      <div className={`container`}>
         <div className={`flex flex-col justify-between gap-5 md:flex-row md:items-end`}>
            <div className={`sm:2/3 mb-auto flex h-full flex-col md:basis-3/4`}>
               {isPending && <Loading />}
               {error && <p>Error loading books</p>}
               {showBooks.length > 0
                  ? showBooks.map((book) => (
                       <CheckoutItem
                          key={book.id}
                          title={book.title}
                          text={book.subtitleShort}
                          price={book.price}
                          img={book.mainImage}
                          count={book.count}
                          onRemove={() => handleRemoveBook(book.id)}
                          onIncrement={() => handleIncrement(book.id)}
                          onDecrement={() => handleDecrement(book.id)}
                       />
                    ))
                  : !isPending && (
                       <h2 className={`mb-auto h-full text-center text-2xl font-semibold`}>No items in your cart</h2>
                    )}
            </div>
            <CheckoutSummary className={`sm:basis-1/3 md:basis-1/4`} books={showBooks} totalPrice={totalPrice} />
         </div>
      </div>
   )
}

export default CheckoutContainer
