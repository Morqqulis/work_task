'use client'
import { AspectRatio } from '@ui/aspect-ratio'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@ui/button'
interface IBookCard {
   img: string
   title: string
   text: string
   likes: number
   id: string
}

const BookCard: React.FC<IBookCard> = ({ img, id, title, text, likes }): JSX.Element => {
   const [liked, setLiked] = useState<boolean>(false)

   return (
      <div
         className={`flex w-full flex-col gap-2.5 rounded-2xl bg-gray-200 px-4 py-2 pb-4 shadow-xl drop-shadow-2xl sm:max-w-[300px]`}
         key={id}
      >
         <Button
            className={`ml-auto w-fit bg-transparent text-right text-2xl font-bold text-black hover:text-white active:text-white`}
            type={'button'}
            aria-label={'View more'}
            disabled
         >
            ...
         </Button>
         <Link
            className={`mb-auto flex grow flex-col gap-2.5 hover:scale-105`}
            href={`/details/${id}`}
            aria-label={'Book link'}
         >
            <AspectRatio ratio={16 / 9}>
               <Image
                  className={`h-full w-full rounded-xl object-cover`}
                  src={img}
                  alt={'Book image'}
                  width={300}
                  height={400}
                  priority
               />
            </AspectRatio>
            <h3 className={`text-lg font-bold lg:text-xl`}>{title}</h3>
            <p className={`mb-5 grow whitespace-normal`}>{text}</p>
         </Link>
         <Button
            className={`ml-auto flex w-fit items-center gap-4 rounded-full bg-white text-black hover:text-white`}
            type={'button'}
            aria-label={'Like'}
            onClick={() => setLiked(!liked)}
         >
            <Heart className={`${liked ? 'fill-red-500' : 'fill-black'}`} size={16} />
            {!liked ? likes : likes + 1}
         </Button>
      </div>
   )
}

export default BookCard
