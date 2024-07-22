import Logo from '@ui/Logo'
import { Toaster } from '@ui/toaster'
import Image from 'next/image'
import LoginForm from './LoginForm'

interface ILoginHero {}

const LoginHero: React.FC = (): JSX.Element => {
   return (
      <section className={`py-40`}>
         <div className="container">
            <Logo
               className={`mb-14 flex w-fit justify-center text-3xl font-bold hover:scale-105 hover:text-red-500 lg:mb-40 lg:justify-normal lg:pl-60 lg:text-left lg:text-4xl`}
            />
            <div className={`flex flex-col items-center justify-between gap-5 lg:flex-row`}>
               <Image
                  className={`w-full max-w-full rounded-md sm:max-w-[90%] lg:max-w-[60%]`}
                  src={'/images/Login/books.webp'}
                  alt={'Books image'}
                  width={660}
                  height={372}
                  priority
               />
               <div className={`w-full max-w-full text-center sm:max-w-[80%] lg:max-w-[35%]`}>
                  <h2 className={`mb-6 text-3xl font-bold lg:mb-20 lg:text-4xl`}>Log In</h2>
                  <LoginForm />
               </div>
            </div>
         </div>
         <div className={`dark`}>
            <Toaster />
         </div>
      </section>
   )
}

export default LoginHero
