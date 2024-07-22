'use client'
import { Button } from '@ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form'
import { Input } from '@ui/input'
import { Eye, EyeOff, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@lib/validation'
import { toast } from '@ui/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface ILoginForm {}

const LoginForm: React.FC = (): JSX.Element => {
   const [showPassword, setShowPassword] = useState(false)
   const router = useRouter()

   const toggleShowPassword = () => {
      setShowPassword(!showPassword)
   }

   const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: '',
         password: ''
      }
   })

   const onSubmit = async (values: z.infer<typeof loginSchema>) => {
      try {
         const user = {
            email: values.email,
            password: values.password
         }
         const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/account/login`, user)
         const data = await res.data

         if (data?.isError) return

         document.cookie = `token=${data?.result?.jwt}`
         localStorage.setItem('token', data?.result?.jwt)
         toast({
            title: 'Login Successful',
            description: `Welcome! You are now logged in.`
         })
         setTimeout(() => {
            router.push('/books')
         }, 1500)
         console.log(data)
      } catch (error) {
         toast({
            title: 'Login Failed',
            description: `Please check your credentials.`
         })
         console.log(error)
      }

      console.log(values)
   }

   return (
      <Form {...form}>
         <form className={`flex w-full flex-col gap-5`} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem className={`relative text-left`}>
                     <FormLabel className={`font-medium !text-black`}>Email</FormLabel>
                     <FormControl>
                        <Input
                           className={`w-full rounded-3xl border border-gray-200 px-4 py-2 text-base text-black shadow-md !ring-0 !ring-offset-0 drop-shadow-lg placeholder:text-gray-700 placeholder:duration-300 focus:border-gray-500 focus:placeholder:opacity-0 lg:text-lg`}
                           placeholder="Email"
                           {...field}
                        />
                     </FormControl>
                     <Mail className={`absolute right-4 top-0 translate-y-[150%] text-gray-600`} size={22} />
                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="password"
               render={({ field }) => (
                  <FormItem className={`relative text-left`}>
                     <FormLabel className={`font-medium !text-black`}>Password</FormLabel>
                     <FormControl>
                        <Input
                           className={`w-full rounded-3xl border border-gray-200 px-4 py-2 text-base text-black shadow-md !ring-0 !ring-offset-0 drop-shadow-lg placeholder:text-gray-700 placeholder:duration-300 focus:border-gray-500 focus:placeholder:opacity-0 lg:text-lg`}
                           type={showPassword ? 'text' : 'password'}
                           placeholder="********"
                           {...field}
                        />
                     </FormControl>
                     <span
                        className={`group/showPassword absolute right-4 top-0 translate-y-[150%] cursor-pointer text-gray-600`}
                        onClick={toggleShowPassword}
                     >
                        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                     </span>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button className={`mt-4 w-full rounded-full py-6 hover:bg-red-500`} type="submit">
               Submit
            </Button>
         </form>
      </Form>
   )
}

export default LoginForm
