import { ISummaryItem } from './CheckoutSummary'

const CheckoutSummaryItem: React.FC<ISummaryItem> = ({ title, price, count }): JSX.Element => {
   return (
      <div className={``}>
         <div className={`flex items-center justify-between gap-1`}>
            <h4 className={`font-bold`}>{title}</h4>
            <span>${(price * count).toFixed(2)}</span>
         </div>
         <span className={`text-xs`}>Quantity: {count}</span>
      </div>
   )
}

export default CheckoutSummaryItem
