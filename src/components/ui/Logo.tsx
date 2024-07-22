import Link from 'next/link'

interface ILogo {
  className?: string
}

const Logo: React.FC<ILogo> = ({ className }): JSX.Element => {
  return (
    <Link className={`font-bold text-black hover:scale-105 ${className || ''}`} href={'/books'}>
      BookBuzz
    </Link>
  )
}

export default Logo
