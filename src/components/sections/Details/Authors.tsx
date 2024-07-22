import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'

interface IAuthors {
   name: string
}

const Authors: React.FC<IAuthors> = ({ name }): JSX.Element => {
   return (
      <div className={`flex flex-wrap items-center gap-2.5 md:gap-4`}>
         <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <span className={`text-sm font-semibold`}>{name}</span>
      </div>
   )
}

export default Authors
