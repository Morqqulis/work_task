import { Spinner } from './Spinner'

interface ILoading {}

const Loading: React.FC = (className): JSX.Element => {
   return (
      <div className={`${className} col-span-4 flex items-center justify-center`}>
         <Spinner size={'large'} />
         <p className={`mb-5 text-center text-4xl`}>Loading...</p>
      </div>
   )
}

export default Loading
