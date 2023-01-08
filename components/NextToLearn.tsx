import { IconWithText } from './'

export const NextToLearn = () => {
  return (
    <div className='pt-8 md:pt-20'>
      <h2 className='heading'>Por aprender en un futuro</h2>

      <div className='grid grid-cols-1 gap-4'>
        <div className="custom-container col-span-1 md:col-span-2">
          <p className="paragraph">
            Gran parte de mi tiempo está dedicado a aprender nuevas tecnologías y mantenerme actualizado.
          </p>
          <p className="paragraph">
            Estoy abierto a aprender y adaptarme a cualquier stack o requerimiento que sea necesario, pero de forma personal hay algunas herramientas y tecnologías que me interesan aprender en un futuro ya sea para propósitos personales o laborales. <strong>Algunas tecnologías que me interesan aprender:</strong>
          </p>
        </div>

        <div className='w-full bg-accent rounded-full aspect-square my-16 mx-auto max-w-[360px] relative rotate'>
          <div
            className='w-full bg-[#CED7FE] dark:bg-[#2A282B] rounded-full aspect-square mx-auto max-w-[360px] scale-95'>
          </div>

          <div className='absolute -top-8 left-[calc(50%-60px)] rotate-reverse'>
            <IconWithText size={64} title="Rust" iconURL={'/icons/rust.svg'} hasBackground/>
          </div>

          <div className='absolute top-[calc(50%-40px)] -right-12 rotate-reverse'>
            <IconWithText size={64} title="React Native" iconURL={'/icons/react-native.svg'} hasBackground/>
          </div>

          <div className='absolute -bottom-12 left-[calc(50%-60px)] rotate-reverse'>
            <IconWithText size={64} title="Dart" iconURL={'/icons/dart.svg'} hasBackground/>
          </div>

          <div className='absolute top-[calc(50%-40px)] -left-12 rotate-reverse'>
            <IconWithText size={64} title="NestJS" iconURL={'/icons/nestjs.svg'} hasBackground/>
          </div>

        </div>

        {/* <div className="custom-container">
          <div className='flex justify-center pt-8 pb-4'>
            <IconWithText title="Rust" iconURL={'/icons/rust.svg'} hasBackground/>

          </div>
          <p className="paragraph">
          Rust es un lenguaje que ha comenzado a crecer muy rápidamente. Prueba de ello son las nuevas herramientas y tecnologías que han comenzado a surgir ultimamente. Tiene una gran comunidad de la cual quiero formar parte.
          </p>
        </div>

        <div className="custom-container">
          <div className='flex justify-center py-8'>
            <IconWithText title="React Native" iconURL={'/icons/react-native.svg'} hasBackground/>
          </div>
          <p className="paragraph">
          Quiero llevar el desarrollo de aplicaciones hechas en React al siguiente nivel y a un nuevo terreno. Esto se puede lograr con React Native para la creación de aplicaciones móviles multiplataforma. 
          </p>
        </div>

        <div className="custom-container">
          <div className='flex justify-center py-8'>
            <IconWithText title="Dart" iconURL={ '/icons/dart.svg' } />
            <IconWithText title="Flutter" iconURL={ '/icons/flutter.svg' }/>
          </div>
          <p className="paragraph">
          Me interesa en un futuro a aprender a crear aplicaciones moviles. Dart y Flutter son un lenguaje y un framework que sirven para crear aplicaciones móviles multiplataforma y actualmente son una excelente opción para adentrarme al mundo del desarrollo móvil.
          </p>
        </div>

        <div className="custom-container">
          <div className='flex justify-center py-8'>
            <IconWithText title="VueJS" iconURL={ '/icons/vue.svg' } />
          </div>
          <p className="paragraph">
          VueJS es un framework de JavaScript que tiene una gran comunidad y un ecosistema que compite con React para la creación de aplicaciones web. Combina características de React y Angular y según algunos desarrolladores es fácil de aprender.
          </p>
        </div>

        <div className="custom-container">
          <div className='flex justify-center py-8'>
            <IconWithText title="NestJS" iconURL={ '/icons/nestjs.svg' } />
          </div>
          <p className="paragraph">
            NestJS es un framework para aplicaciones del servidor, basado en Express y con soporte incluido para TypeScript.
          </p>
        </div> */}
      </div>
    </div>
  )
}
