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
            <IconWithText iconURL={'/icons/docker.svg'} title='Docker' size={36}/>
          </div>
          <p className="paragraph">
            Estoy aprendiendo docker para hacer despliegues de contenedores en la nube utilizando servicios de cloud computing, como AWS o Google Cloud Platform, también para tener la bases suficientes para comprender e implementar la arquitectura de microservicios.
          </p>
        </div>

        <div className='custom-container'>
          <div className="flex justify-center py-8">
            <IconWithText
              iconURL={ theme === 'dark' ? '/icons/english-light.svg' : '/icons/english-dark.svg' }
              title='Inglés'
              size={36}
            />
          </div>
          <p className="paragraph">
            Me encuentro aprendiendo inglés para tener las capacidades suficientes para comunicarme eficientemente con hablantes nativos del idioma y con el equipo de desarrollo.
          </p>
        </div>
      </div>
    </div>
  )
}
