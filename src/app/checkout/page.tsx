import CheckoutHero from '@sections/Checkout/CheckoutHero'
import { CheckoutPageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = CheckoutPageMeta

interface ICheckout {}

const CheckoutPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <CheckoutHero />
    </main>
  )
}

export default CheckoutPage
