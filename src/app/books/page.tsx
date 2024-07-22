import ProductsHero from '@sections/Books/ProductsHero'
import { BooksPageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = BooksPageMeta

const Products: NextPage = (): JSX.Element => {
  return (
    <main>
      <ProductsHero />
    </main>
  )
}

export default Products
