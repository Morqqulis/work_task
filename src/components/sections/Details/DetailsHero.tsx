'use client'
import { picsumImages } from '@static/data'
// import useBasketStore, { IBasketItem } from '@stores/basketStore'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@ui/button'
import Loading from '@ui/Loading'
import { getBookById } from '@utils/functions'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Authors from './Authors'
import Tags from './Tags'
import { usePathname, useRouter } from 'next/navigation'

interface IDetailsHero {
   id: string
}

interface IProducts {
   id: string
   count: number
}

const DetailsHero: React.FC<IDetailsHero> = ({ id }): JSX.Element => {
   const [count, setCount] = useState(1)
   const path = usePathname()
   const router = useRouter()

   const { isPending, error, data } = useQuery({
      queryKey: ['book', id],
      queryFn: () => getBookById(id),
      refetchOnWindowFocus: false
   })

   const handleCheckout = () => {
      const token = localStorage.getItem('token')

      if (!token) {
         router.push('/')
         return
      }

      const currentProducts = localStorage.getItem('products')
      const productsArray: IProducts[] = currentProducts ? JSON.parse(currentProducts) : []
      const productExists = productsArray.some((product) => product.id === id)

      if (!productExists) {
         const newProduct: IProducts = { id, count }
         productsArray.push(newProduct)
         localStorage.setItem('products', JSON.stringify(productsArray))
      }
   }

   return (
      <section className={`py-10 sm:py-14 lg:py-20`}>
         <div className="container">
            {error && <h1 className={`text-center text-3xl`}>Error</h1>}
            {isPending && <Loading />}

            <div className={`flex flex-col items-center justify-between gap-5 lg:flex-row`}>
               <div className={`flex basis-1/2 flex-col gap-5`}>
                  {isPending ? (
                     <Loading />
                  ) : (
                     <Image
                        className={`w-full max-w-full rounded-lg md:max-w-3xl`}
                        src={data?.mainImage}
                        alt={`image`}
                        width={700}
                        height={700}
                        priority
                        style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                     />
                  )}

                  <div className={`flex items-center justify-between gap-5`}>
                     {picsumImages.map(({ id, alt, height, src, width }) => (
                        <Button className={`h-fit w-full p-0`} key={id} variant={'ghost'} aria-label={'image'}>
                           <Image
                              className={`w-full max-w-full rounded-2xl hover:scale-105`}
                              src={src}
                              alt={alt}
                              width={width}
                              height={height}
                           />
                        </Button>
                     ))}
                  </div>
               </div>

               <div className={`mb-10 flex w-full max-w-full flex-col gap-4 md:max-w-3xl lg:w-auto lg:gap-6`}>
                  <div className={`mb-5 flex flex-col gap-4`}>
                     <h1 className={`text-2xl font-bold lg:text-3xl`}>{data?.title}</h1>
                     <p className={`text-sm`}>{data?.subtitleShort}</p>
                     <Tags />
                     <div className={`flex flex-wrap items-center gap-2.5`}>
                        {['John Smith', 'Wooden Booklands'].map((name: string) => (
                           <Authors key={name} name={name} />
                        ))}
                     </div>
                  </div>

                  <div className={`grid gap-2`}>
                     <div className={`flex flex-wrap items-center gap-10`}>
                        <div className={`flex w-fit items-center rounded-xl bg-slate-900 text-white`}>
                           <Button
                              className={`w-[50px] py-6 text-2xl hover:bg-red-500`}
                              onClick={() => setCount(count <= 1 ? 1 : count - 1)}
                              aria-label={'decrement'}
                           >
                              -
                           </Button>
                           <span className={`flex items-center justify-center px-4 py-2 text-center text-sm`}>
                              {count}
                           </span>
                           <Button
                              className={`w-[50px] py-6 text-2xl hover:bg-red-500`}
                              onClick={() => setCount(count + 1)}
                              aria-label={'increment'}
                           >
                              +
                           </Button>
                        </div>
                        <span className={`text-xl font-medium`}>$ {(data?.price * count).toFixed(2)}</span>
                     </div>
                     <span className={`pl-0.5 text-sm font-medium`}>In Stock 5</span>
                  </div>

                  <Link
                     className={`mt-10 block w-fit rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-500 active:scale-90 disabled:bg-slate-500`}
                     href={'/checkout'}
                     onClick={handleCheckout}
                     aria-label={'add to card'}
                  >
                     Add to Card
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default DetailsHero
