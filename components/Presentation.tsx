import Image from 'next/image'

export const Presentation = () => {

  return (
    <div className='flex flex-col items-center gap-8' id='presentation'>
      <Image
        alt='Donato Monzón | Desarrollador web'
        src={'/images/me.png'}
        className='rounded-full object-cover border-4 border-light'
        width={96}
        height={96}
        
      />
      <h1 className='text-light font-bold text-2xl md:text-3xl'>
        Hola, soy <span className='text-accent'>Donato Monzón</span><br/>
        Soy <span className='text-accent'>Desarrollador Web</span>
      </h1>

      <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
        <a
          download
          href={ '/docs/curriculum-donato-monzon.pdf' }
          className='hidden text-center transition-colors border border-accent hover:bg-accentDark px-2 md:px-4 py-2 rounded-md font-bold text-light  text-base md:text-xl hover:bg'
        >
          Descargar cv
        </a>
        <a
          href='#projects'
          className='transition-colors bg-accent hover:bg-accentDark px-2 md:px-4 py-2 rounded-md font-bold text-light text-base md:text-xl hover:bg block text-center'
        >
          Proyectos
        </a>
      </div>
    </div>
  )
}
