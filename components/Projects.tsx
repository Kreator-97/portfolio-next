import { IconWithText, List, ProyectCard } from '.'
import { auroraMangaFeatures, twittDuckComingFeatures, twittDuckFeatures, portfolioLinks } from '../data'

const { auroraManga, dartmong, twittDuck } = portfolioLinks

export const Projects = () => {
  return (
    <div id='projects' className="pt-8 md:pt-20">
      <div className="bg-indigo-900 bg-opacity-50 py-4">
        <h2 className="text-center text-light font-bold text-3xl md:mb-8">Proyectos</h2>

        <ProyectCard
          imgURL={'/images/dartmong-blog.png'}
          title={ dartmong.title }
          url={ dartmong.url }
          repositoryURL={ dartmong.repositoryURL }
        >
          <p className='text-light font-bold mb-4'>
            Este es sitio de entretemiento de temática principal sobre Videojuegos, pero también de Animes y Mangas. Se recopilan noticias y se escriben artículos a manera de opiniones personales y análisis.
          </p>

          <p className='text-light font-bold mb-4'>
            Es muy proyecto que pienso escalar a lo largo de tiempo, como un Hobby, y desarrollar todo el potencial que este pueda lograr.
          </p>

          <p className='text-light font-bold my-4 text-center'>
            Está realizado con las siguientes tecnologías:
          </p>

          <div className='flex justify-center items-center'>
            <IconWithText
              title='NextJS'
              iconURL={'/icons/chakraui.svg'}
              hasBackground
            />
            <IconWithText
              title='TypeScript'
              iconURL={'/icons/typescript.svg'}
              hasBackground
            />
            <IconWithText
              title='SASS'
              iconURL={'/icons/sass.svg'}
              hasBackground
            />
            <IconWithText
              title='MongoDB'
              iconURL={'/icons/mongodb.svg'}
              hasBackground
            />
          </div>
        </ProyectCard>

        <ProyectCard
          imgURL={ '/images/aurora-manga.png' }
          title={ auroraManga.title }
          url={ auroraManga.url }
          repositoryURL={ auroraManga.repositoryURL }
          reverse
        >
          <p className='text-light font-bold mb-4'>
            Aurora manga es un sitio de E-commerce (fifticio) especializado en la venta de Mangas en el cual puedes conseguir tus títulos de mangas favoritos.
          </p>

          <p className='text-light font-bold mb-4'>
            Los pagos son realizados utilizando la SDK de Paypal, con el cual puedes suscribirte a los lanzamientos del Mes con un pago recurrente o simplemente pagar los artículos de tu carrito de compra en una sola exhibición.
          </p>

          <p className='text-accent font-bold mb-2'>
            Características:
          </p>

          <List items={ auroraMangaFeatures } className='font-bold text-light mb-4' />

          <p className='text-light font-bold mb-4 text-center'>
            Está realizado con las siguientes tecnologías:
          </p>

          <div className='flex justify-center flex-wrap gap-y-4'>
            <IconWithText
              title='NextJS'
              iconURL={'/icons/nextjs.svg'}
              hasBackground
            />
            <IconWithText
              title='TypeScript'
              iconURL={'/icons/typescript.svg'}
              hasBackground
            />
            <IconWithText
              title='Tailwind'
              iconURL={'/icons/tailwindcss.svg'}
              hasBackground
            />
            <IconWithText
              title='Redux'
              iconURL={'/icons/redux.svg'}
              hasBackground
            />
            <IconWithText
              title='Prisma ORM'
              iconURL={'/icons/prisma.svg'}
              hasBackground
            />
            <IconWithText
              title='MySQL'
              iconURL={'/icons/mysql.svg'}
              hasBackground
            />
            <IconWithText
              title='GraphQL'
              iconURL={'/icons/graphql.svg'}
              hasBackground
            />
          </div>
        </ProyectCard>

        <ProyectCard
          imgURL={ '/images/twitt-duck.png' }
          title={ twittDuck.title }
          url={ twittDuck.url }
          repositoryURL={ twittDuck.repositoryURL }
        >
          <p className='text-light font-bold mb-4'>
            Esta es una red social que te permite crear publicaciones, subir fotos, comentar y difundir las publicaciones de otros usuarios de forma similar a Twitter.
          </p>

          <p className='text-accent font-bold mb-2'>
            Características:
          </p>

          <List items={ twittDuckFeatures } className='font-bold text-light mb-4' />

          <p className='text-accent font-bold mb-2'>
            Próximas Características:
          </p>

          <List items={ twittDuckComingFeatures } className='font-bold text-light mb-4' />

          <p className='text-light font-bold mb-4 text-center'>
            Está realizado con las siguientes tecnologías:
          </p>

          <div className='flex justify-center items-center flex-wrap gap-y-4'>
            <IconWithText
              title='ExpressJS'
              iconURL={'/icons/nodejs.svg'}
              hasBackground
            />
            <IconWithText
              title='React'
              iconURL={'/icons/chakraui.svg'}
              hasBackground
            />
            <IconWithText
              title='Redux'
              iconURL={'/icons/redux.svg'}
              hasBackground
            />
            <IconWithText
              title='TypeScript'
              iconURL={'/icons/typescript.svg'}
              hasBackground
            />
            <IconWithText
              title='Chakra UI'
              iconURL={'/icons/chakraui.svg'}
              hasBackground
            />
            <IconWithText
              title='Turborepo'
              iconURL={'/icons/turborepo.svg'}
              hasBackground
            />
            <IconWithText
              title='Prisma ORM'
              iconURL={'/icons/prisma.svg'}
              hasBackground
            />

          </div>
        </ProyectCard>

      </div>
    </div>
  )
}
