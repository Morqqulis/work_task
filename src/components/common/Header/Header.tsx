'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'
import { Button } from '@ui/button'
import Logo from '@ui/Logo'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import HeaderInput from './HeaderInput'
import SideMenu from './SideMenu'

import { useEffect } from 'react'

interface IHeader {
   className?: string
}

const Header: React.FC<IHeader> = ({ className }: IHeader): JSX.Element => {
   const path = usePathname()

   return (
      <header
         className={`${path === '/' && 'hidden'} ${path === '/checkout' && 'py-10 md:py-16 lg:py-24'} border-b py-5 ${className}`}
      >
         <div className="container">
            <nav className={`flex items-center justify-between gap-2.5`}>
               <SideMenu className={`${path !== '/books' && 'hidden'}`} />
               <Logo
                  className={`${path === '/checkout' && 'text-lg md:text-2xl lg:text-4xl'} ${path === '/books' && '!hidden'}`}
               />
               <HeaderInput
                  className={`hidden sm:flex ${path === '/checkout' && '!hidden'}`}
                  placeholder={'Search for books by title, author, or ISBN'}
               />
               <div className={`flex items-center gap-4 md:gap-6 lg:gap-10`}>
                  <Link className={`font-semibold ${path !== '/books' && 'hidden'}`} href={'/checkout'} aria-label={'Link to Checkout'}>
                     Card
                  </Link>
                  <Link className={`${path !== '/books' && 'hidden'}`} href={'/'} aria-label={'Link to Login page'}>
                     <Button className={`rounded-lg px-10 hover:bg-red-500`} type={'button'} aria-label={'Login'}>
                        Login
                     </Button>
                  </Link>
                  <Button className={`rounded-full p-0`} type={'button'} aria-label={'Avatar'}>
                     <Avatar className={`duration-300 hover:scale-110`}>
                        <AvatarImage className={`rounded-full`} src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                  </Button>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header
