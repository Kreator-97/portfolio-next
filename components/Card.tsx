import { FC } from 'react'

interface Props {
  title       : string;
  description : string;
  children    : React.ReactNode;
}

export const Card: FC<Props> = ({children, title, description}) => {
  return (
    <div className="custom-container">
      <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
        { title }
      </h3>

      <p className='paragraph min-h-[5.2rem]'>
        { description }
      </p>
      { children }
    </div>
  )
}
