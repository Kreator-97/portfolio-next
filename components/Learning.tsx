import { useContext } from 'react'

import { UIContext } from '../context/ui'
import { IconWithText } from './'

export const Learning = () => {
  const { theme } = useContext(UIContext)

  return (
    <div id='learning' className='pt-8 md:pt-20'>
      <h2 className="heading">Aprendizaje</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className="custom-container md:col-span-2">
          <p className="paragraph">
            Constantemente estoy aprendiendo más sobre el diseño y el desarrollo web. Actualmente me encuentro aprendiendo las siguiente tecnologías y habilidades:
          </p>
        </div>

        <div className='custom-container'>
          <div className="flex justify-center py-8">
            <IconWithText iconURL={'/icons/php.svg'} title='PHP' size={36}/>
          </div>
          <p className="paragraph">
            PHP es uno de los lenguajes más importantes en el desarrollo web y posee una gran comunidad y herramientas que permiten resolver las necesidades de los clientes de forma fácil. Me estoy involucrando en esta gran comunidad aprendiendo las bases del lenguaje para después comenzar a probar herramientas más complejas que faciliten el desarrollo de nuevos proyectos.
          </p>
        </div>
        <div className='custom-container'>
          <div className="flex justify-center py-8">
            <IconWithText iconURL={'/icons/nestjs.svg'} title='NESTJS' size={36}/>
          </div>
          <p className="paragraph">
            Este es el framework de JavaScript/TypeScript que no sabia que necesitaba. Ofrece una gran cantidad de soluciones para crear aplicaciones del servidor escalables junto a una muy buena experiencia de desarrollo. Sin duda es una gran herramienta que me está ayudando a mejorar como desarrollador, pues a la vez que se aprende NestJS aprendes escribir código limpio.
          </p>
        </div>

        <div className='custom-container md:col-span-2'>
          <div className="flex justify-center py-8">
            <IconWithText
              iconURL={ theme === 'dark' ? '/icons/english-light.svg' : '/icons/english-dark.svg' }
              title='Inglés'
              size={36}
            />
          </div>
          <p className="paragraph">
            El Inglés es una habilidad muy importante ya que te permite comunicarte que gente asombrosa de muchos lugares. Aprender un nuevo idioma expande tu forma de pensar en cierta medida y por eso estoy dedicando una gran parte de mi tiempo en mejorar y aprender más sobre este idioma.
          </p>
        </div>
      </div>
    </div>
  )
}
