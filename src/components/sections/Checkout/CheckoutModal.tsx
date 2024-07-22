import { useQuery } from '@tanstack/react-query'
import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger
} from '@ui/alert-dialog'
import Loading from '@ui/Loading'
import { postProducts } from '@utils/functions'
import Image from 'next/image'

interface ICheckoutModal {
   books: any
}

const CheckoutModal: React.FC<ICheckoutModal> = ({ books }): JSX.Element => {
   const succesTitle = 'Success!'
   const errorTitle = 'Error!'
   const successText = 'Order was places successfully and will be delivered in 3-5 business days.'
   const errorText = 'Opps.. Error occured. Please try again later.'

   const products = books.map((book: any) => ({ id: book.id, count: book.count }))
   const dataForPost = { products }

   const { isPending, error, data, refetch } = useQuery({
      queryKey: ['post products'],
      queryFn: () => postProducts(dataForPost),
      refetchOnWindowFocus: false,
      enabled: false
   })

   const handleCheckout = () => {
      refetch()
   }

   return (
      <AlertDialog>
         <AlertDialogTrigger
            className={`w-full rounded-xl bg-slate-900 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-red-500 active:scale-90`}
            onClick={handleCheckout}
         >
            Checkout
         </AlertDialogTrigger>
         <AlertDialogContent className={`flex flex-col items-center justify-center gap-4`}>
            {isPending ? (
               <Loading />
            ) : (
               <Image
                  src={`${data?.toString().startsWith('2') ? '/success.png' : '/error.png'}`}
                  alt={'Error'}
                  width={100}
                  height={100}
               />
            )}

            <AlertDialogHeader className={`mb-4 flex max-w-[300px] flex-col gap-4 !text-center !text-slate-900`}>
               <AlertDialogTitle className={`!text-2xl font-semibold`}>
                  {data?.toString().startsWith('2') ? succesTitle : isPending ? null : errorTitle}
               </AlertDialogTitle>

               <AlertDialogDescription className={`text-center !text-lg !text-black`}>
                  {data?.toString().startsWith('2') ? successText : isPending ? null : errorText}
               </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
               <AlertDialogCancel
                  className={`rounded-3xl bg-slate-900 px-12 py-8 text-xl text-white hover:bg-red-500 hover:text-white`}
               >
                  Dismiss
               </AlertDialogCancel>
               {/* <AlertDialogAction>Continue</AlertDialogAction> */}
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   )
}

export default CheckoutModal
