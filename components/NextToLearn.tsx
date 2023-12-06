import { IconWithText } from './'

export const NextToLearn = () => {
  return (
    <div className='pt-8 md:pt-20 hidden lg:block'>
      <h2 className='heading'>Por aprender en un futuro</h2>

      <div className='grid grid-cols-1 gap-4'>
        <div className="custom-container col-span-1 md:col-span-2">
          <p className="paragraph">
            Gran parte de mi tiempo está dedicado a aprender nuevas tecnologías y mantenerme actualizado.
          </p>
          <p className="paragraph">
            Tengo la habilidad de aprender y adaptarme a cualquier stack o requerimiento que sea necesario, aunque de forma personal hay algunas herramientas y tecnologías que me interesan aprender en un futuro ya sea para propósitos personales o laborales. <strong>Algunas tecnologías que me interesan aprender:</strong>
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
            <IconWithText size={64} title="Python" iconURL={'/icons/python.svg'} hasBackground/>
          </div>

        </div>
      </div>
    </div>
  )
}
