import { Button } from '@ui/button'
import Image from 'next/image'

interface ICheckoutItem {
   title: string
   text: string
   price: number
   img: string
   count: number
   onRemove: () => void
   onIncrement: () => void
   onDecrement: () => void
}

const CheckoutItem: React.FC<ICheckoutItem> = ({
   title,
   text,
   price,
   img,
   count,
   onRemove,
   onIncrement,
   onDecrement
}): JSX.Element => {
   return (
      <div className="flex w-full flex-col items-start gap-6 rounded-xl border-b border-t border-gray-200 p-3 sm:p-6 lg:flex-row">
         <div className={`flex h-full w-full flex-col gap-3`}>
            <div className={`flex justify-between gap-2.5`}>
               <h2 className="mb-3 text-lg font-bold">{title}</h2>
               <Button className={`h-fit`} onClick={onRemove}>
                  -
               </Button>
            </div>
            <p className={`grow`}>{text}</p>
            <h3 className="font-bold">${price}</h3>
         </div>

         <div className="relative flex w-full items-center justify-center">
            <Image
               className="w-full max-w-full rounded-[10px] sm:min-w-[320px] md:h-[200px] lg:h-[200px]"
               src={img}
               alt="image"
               width={450}
               height={250}
               priority
            />
            <div className="absolute bottom-2 right-2 flex items-center rounded-xl bg-black">
               <Button onClick={onDecrement}>-</Button>
               <p className="min-w-[30px] bg-black text-center text-white">{count}</p>
               <Button onClick={onIncrement}>+</Button>
            </div>
         </div>
      </div>
   )
}

export default CheckoutItem
