import Image from 'next/image'
import { FC } from 'react'

interface Props {
  iconURL       : string;
  title         : string;
  size         ?: number;
  hasBackground?: boolean;
  showText     ?: boolean;
}

export const IconWithText: FC<Props> = ({iconURL, title, size = 48, hasBackground = false, showText = true}) => {
  return (
    <div className='flex flex-col items-center w-28 z-10'>
      <div
        className={`rounded-full p-2 flex justify-center items-center ${hasBackground ? 'bg-slate-50' : '' }`}
        style={{ width: `calc(${size}px + .5rem)`, height: `calc(${size}px + .5rem)` }} >
        <Image
          src={iconURL}
          alt={title}
          width={size}
          height={size}
        />
      </div>
      {
        (showText) && (
          <p className="font-bold text-dark dark:text-light text-center">{title}</p>
        )
      }
    </div>
  )
}
