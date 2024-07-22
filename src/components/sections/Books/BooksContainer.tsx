'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getBooks, searchBooks } from '@utils/functions'
import _ from 'lodash'
import { memo, useCallback, useEffect } from 'react'
import useInputStore from '../../../stores/inputStore'

import Loading from '../../ui/Loading'
import BookCard from './BookCard'

const BooksContainer: React.FC = (): JSX.Element => {
   const inputValue = useInputStore((state) => state.inputValue)
   const queryClient = useQueryClient()

   const { isPending, error, data } = useQuery({
      queryKey: ['books'],
      queryFn: () => getBooks(),
      refetchOnWindowFocus: false
   })

   const searchQuery = useQuery({
      queryKey: ['searchBooks', inputValue],
      queryFn: () => searchBooks(inputValue),
      enabled: inputValue !== ''
   })

   const debouncedSearchBooks = useCallback(
      _.debounce((query: string) => {
         queryClient.invalidateQueries({ queryKey: ['searchBooks', query] })
      }, 900),
      [queryClient]
   )
   useEffect(() => {
      if (inputValue) {
         debouncedSearchBooks(inputValue)
      }
   }, [inputValue, debouncedSearchBooks])

   return (
      <div className={`mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-20 lg:grid-cols-4`}>
         {isPending && <Loading />}
         {error || (searchQuery.error && <p className={`col-span-4 text-center text-3xl`}>Error</p>)}
         {inputValue !== '' && searchQuery.data == null && (
            <p className={`col-span-4 text-center text-3xl`}>No books found</p>
         )}
         {inputValue == ''
            ? data?.map((product: any) => (
                 <BookCard
                    key={product.id}
                    img={product.mainImage}
                    title={product.title}
                    text={product.subtitleShort}
                    likes={product.numOfLikes}
                    {...product}
                 />
              ))
            : searchQuery.data?.map((product: any) => (
                 <BookCard
                    key={product.id}
                    img={product.mainImage}
                    title={product.title}
                    text={product.subtitleShort}
                    likes={product.numOfLikes}
                    {...product}
                 />
              ))}
      </div>
   )
}

export default memo(BooksContainer)
