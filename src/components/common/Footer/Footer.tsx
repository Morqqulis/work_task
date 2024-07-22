import Link from 'next/link'
import { footerData } from '../../../static/data'
import FooterList from './FooterList'
import Logo from '@ui/Logo'

const Footer: React.FC = (): JSX.Element => {
  const secondColumn = footerData.links.filter((link) => link.id <= 4)

  const thirdColumn = footerData.links.filter((link) => link.id > 4)

  return (
    <footer className={`border-t-[3px] border-gray-200 py-10 sm:pb-18 lg:pb-28 sm:pt-14`}>
      <div className="container">
        <div className={`flex flex-col flex-wrap items-start justify-between gap-5 sm:flex-row`}>
         <Logo className={`text-2xl`} />
          <div className={`flex basis-1/2 flex-wrap justify-between gap-4 sm:gap-8 sm:flex-nowrap`}>
            <div>
              <h5 className={`mb-1 font-bold`}>Social</h5>
              <ul className={`flex flex-col gap-1`}>
                {footerData.socials.map((social) => (
                  <li key={social.id}>
                    <Link className={`block hover:scale-110 hover:text-red-500`} href={social.href}>
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {[secondColumn, thirdColumn].map((data, key) => (
              <FooterList key={key} data={data} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
