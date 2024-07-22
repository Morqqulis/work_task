import CheckoutModal from './CheckoutModal'
import CheckoutSummaryItem from './CheckoutSummaryItem'

export interface ISummaryItem {
   title: string
   price: number
   count: number
}

interface ICheckoutSummary {
   books: ISummaryItem[]
   totalPrice: number
   className?: string
}

const CheckoutSummary: React.FC<ICheckoutSummary> = ({ books, totalPrice, className }): JSX.Element => {
   const shippingCost = books.length > 0 ? 3.26 : 0.0
   const finalTotal = totalPrice + shippingCost

   return (
      <div className={`min-w-[280px] rounded-xl bg-gray-200 p-6 text-sm sm:min-w-[320px] ${className}`}>
         <h3 className={`border-b border-slate-400 pb-3 text-lg font-bold`}>Shopping Cart</h3>

         <div className={`flex flex-col gap-2 border-b border-slate-400 py-6`}>
            {books.map((book) => (
               <CheckoutSummaryItem key={book.title} title={book.title} price={book.price} count={book.count} />
            ))}
         </div>

         <div className={`flex flex-col py-6 text-base`}>
            <div className="flex items-center justify-between">
               <span className={``}>Subtotal</span>
               <span className={``}>${totalPrice.toFixed(2)}</span>
            </div>
            {books.length > 0 && (
               <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
               </div>
            )}
            <div className="flex items-center justify-between font-bold">
               <h4 className={``}>Total</h4>
               <h4>${finalTotal.toFixed(2)}</h4>
            </div>
         </div>

         <CheckoutModal books={books} />
      </div>
   )
}

export default CheckoutSummary
