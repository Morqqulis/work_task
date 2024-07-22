import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@ui/sheet'
import { Menu } from 'lucide-react'
import HeaderInput from './HeaderInput'

interface ISideMenu {
  className?: string
}

const SideMenu: React.FC<ISideMenu> = ({ className }: ISideMenu): JSX.Element => {
  return (
    <div className={`sm:hidden ${className}`}>
      <Sheet>
        <SheetTrigger>
          <Menu className={`translate-y-[3px]`} size={24} />
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className={`mt-5`}>Welcome to the Book Store</SheetTitle>
            <SheetDescription>Type in the search bar to search for books.</SheetDescription>
          </SheetHeader>
          <div className={`mt-10 flex flex-col gap-5`}>
            <span className={`text-center font-bold`}>Search Book</span>
            <HeaderInput placeholder={'Search for books by title, author, or ISBN'} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default SideMenu
