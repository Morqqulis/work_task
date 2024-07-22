import CheckoutContainer from './CheckoutContainer'

interface ICheckoutHero {}

const CheckoutHero: React.FC = (): JSX.Element => {
   return (
      <section className={`py-12 lg:py-20`}>
          <CheckoutContainer />
      </section>
   )
}

export default CheckoutHero
