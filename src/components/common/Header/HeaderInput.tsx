'use client'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Search } from 'lucide-react'
import useInputStore from '../../../stores/inputStore'

interface IHeaderInput {
  className?: string
  placeholder: string
}

const HeaderInput: React.FC<IHeaderInput> = ({ className, placeholder }: IHeaderInput): JSX.Element => {
  const { inputValue, setInputValue } = useInputStore()

  return (
    <Label
      className={`relative w-full max-w-[75%] items-center justify-between rounded-lg px-2 sm:max-w-[50%] ${className}`}
    >
      <Input
        className={`shadow-lg focus:!ring-1 focus:duration-300`}
        type={'text'}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <Button className={`group/searchBtn absolute right-0 top-0 bg-white p-2 sm:px-4 md:bg-transparent`}>
        <Search className={`text-black duration-200 group-hover/searchBtn:text-white`} />
      </Button>
    </Label>
  )
}

export default HeaderInput
