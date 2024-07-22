import { tags } from '@static/data'

const Tags: React.FC = (): JSX.Element => {
   return (
      <div className={`mb-5 flex flex-wrap items-center gap-2.5`}>
         {tags.map((tag) => (
            <span
               className={`whitespace-nowrap rounded-lg bg-black px-5 py-1 text-sm font-semibold capitalize text-white`}
               key={tag}
            >
               {tag}
            </span>
         ))}
      </div>
   )
}

export default Tags
