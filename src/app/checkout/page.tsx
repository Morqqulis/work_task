import CheckoutContainer from '@sections/Checkout/CheckoutContainer'
import { CheckoutPageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = CheckoutPageMeta

interface ICheckout {}

const CheckoutPage: NextPage = (): JSX.Element => {
  return (
    <main>
       <section className={`py-12 lg:py-20`}>
          <CheckoutContainer />
      </section>
    </main>
  )
}

export default CheckoutPage
