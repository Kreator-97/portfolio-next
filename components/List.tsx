import { FC } from 'react'

interface Props {
  items: string[];
  className?: string;
}

export const List: FC<Props> = ({items, className = ''}) => {
  const classNameExtended = 'text-dark dark:text-light list-disc pl-4 ' + className

  return (
    <ul className={ classNameExtended }>
      { items.map((item) => (
        <li key={item}>{item}</li>
      )) }
    </ul>
  )
}
