import Link from 'next/link'

interface IFooterList {
  data: {
    id: number
    label: string
    href: string
  }[]
}

const FooterList: React.FC<IFooterList> = ({ data }:IFooterList): JSX.Element => {
  return (
    <ul className={`flex flex-col gap-1`}>
      {data.map((item) => (
        <li key={item.id}>
          <Link className={`hover:scale-110 block hover:text-red-500`} href={item.href} aria-label={`Link to ${item.label}`}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterList
