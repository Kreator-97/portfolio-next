import { useContext } from 'react'
import { AboutMe, Presentation } from '.'
import { UIContext } from '../context/ui'
import { unsplashImages } from '../data'

export const Header = () => {
  const { theme } = useContext(UIContext)

  return (
    <header className='relative'>
      <div
        style={{
          backgroundImage: `url('${unsplashImages[theme].imageURL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'calc(100vh - var(--navbarSize))'
        }}
      >
        <div className='bg-dark bg-opacity-30 absolute top-0 w-full h-full' />
      </div>

      <div className='absolute top-0 w-full'>
        <div
          className='max-w-5xl mx-auto p-4 flex flex-col justify-center gap-8'
          style={{ height: 'calc(100vh - var(--navbarSize)'}}
        >
          <Presentation />
          <AboutMe />
        </div>
      </div>
      <p className='text-light text-sm absolute bottom-2 left-2'>
        Foto de
        <a
          className='hover:underline'
          href={ unsplashImages[theme].author.URL }
          target='_blank'
          rel="noreferrer"> { unsplashImages[theme].author.name } </a>
          en
        <a
          className='hover:underline'
          href={ unsplashImages[theme].postURL }
          target='_blank'
          rel="noreferrer"
        > Unsplash </a>
      </p>
    </header>
  )
}
