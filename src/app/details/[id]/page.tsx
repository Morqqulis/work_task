import DetailsHero from '@sections/Details/DetailsHero'
import { DetailsPageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = DetailsPageMeta

interface IDetailsPage {
  params: { id: string }
}

const DetailsPage: NextPage<IDetailsPage> = ({ params: { id } }: IDetailsPage): JSX.Element => {
  return (
    <main>
      <DetailsHero id={id} />
    </main>
  )
}

export default DetailsPage
