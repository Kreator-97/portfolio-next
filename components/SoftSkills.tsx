import Image from 'next/image'
import { Card } from './Card'

export const SoftSkills = () => {

  return (
    <div className='pt-8 md:pt-20'>
      <h2 className="heading">Habilidades Blandas</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

        <Card
          title="Resolución de problemas"
          description="Capaz de buscar y encontrar soluciones que se adapten a los problemas que se me presentan."
        >
          <div className='flex justify-center py-4'>
            <Image src={ '/icons/ideas.svg' } width='48' height='48' alt='ideas' />
          </div>
        </Card>

        <Card
          title="Trabajo en equipo"
          description="Colaborativo y empático. Las opiniones diversas nos enriquecen y aumentan nuestras habilidades y resultados."
        >
          <div className='flex justify-center py-4'>
            <Image src={ '/icons/team.svg' } width='48' height='48' alt='team' />
          </div>
        </Card>

        <Card
          title="Enfocado a resultados"
          description="Capaz de ver y distinguir los objetivos de manera clara para lograr cumplir las expectivas y resultados propuestos."
        >
          <div className='flex justify-center py-4'>
            <Image src={ '/icons/graph.svg' } width='48' height='48' alt='graph' />
          </div>
        </Card>

        <Card
          title="Proactivo"
          description="Estoy activamente buscando cosas nuevas por hacer o crear. Capaz de tomar la iniciativa cuando se requiera."
        >
          <div className='flex justify-center py-4'>
            <Image src={ '/icons/gears.svg' } width='48' height='48' alt='gears' />
          </div>
        </Card>

        <Card
          title="Adaptabilidad al cambio"
          description="Afronto los cambios como nuevos desafios y oportunidades que pueda aprovechar para aprender y crecer más."
        >
          <div className='flex justify-center py-4'>
            <Image src={ '/icons/roads.svg' } width='48' height='48' alt='roads' />
          </div>
        </Card>

        <Card
          title="Pensamiento analítico"
          description="Trato de observar cuales son las mejores soluciones para resolver un problema y eligir la más adecuada para cada situación."
        >
          <div className='flex justify-center py-4'>
            <Image src={ '/icons/brain.svg' } width='48' height='48' alt='brain' />
          </div>
        </Card>

      </div>
    </div>
  )
}
