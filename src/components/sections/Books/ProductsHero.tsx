import { Button } from '@ui/button'
import BooksContainer from './BooksContainer'

const ProductsHero: React.FC = async (): Promise<JSX.Element> => {
   return (
      <section className={`py-12 lg:py-20`}>
         <div className="container">
            <h1 className={`mb-20 text-3xl font-bold md:text-4xl lg:text-5xl`}>Browse All Books</h1>
            <BooksContainer />
            <Button
               className={`mx-auto block rounded-xl font-medium hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-gray-500`}
               disabled
               size={'lg'}
               type={'button'}
               aria-label={'Load more'}
            >
               Load more
            </Button>
         </div>
      </section>
   )
}

export default ProductsHero
