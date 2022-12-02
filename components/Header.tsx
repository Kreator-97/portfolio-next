import { AboutMe, Presentation } from '.'

export const Header = () => {
  return (
    <header className='relative'>
      <div
        style={{
          backgroundImage: 'url(\'/images/background.jpg\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'calc(100vh - var(--navbarSize))'
        }}
      >
        <div className='bg-dark bg-opacity-70 absolute top-0 w-full h-full' />
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
      <p className='text-light text-sm hover:underline absolute bottom-2 left-2'>
        Foto de
        <a
          href="https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target='_blank'
          rel="noreferrer"> AltumCode </a>
          en
        <a
          href="https://unsplash.com/es/s/fotos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target='_blank'
          rel="noreferrer"
        > Unsplash </a>
      </p>
    </header>
  )
}
