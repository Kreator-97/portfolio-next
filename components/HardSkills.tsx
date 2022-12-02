import { Card, IconWithText, List } from './'
import { reactEcosystem, serverSideSkills, typeScriptSkills, webTecnologies } from '../data'

export const HardSkills = () => {
  return (
    <div id='skills' className='pt-8 md:pt-20'>
      <h2 className="heading">Habilidades Técnicas</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card
          title='Tecnologías Web'
          description='Mis habilidades consisten en dominios avanzados de las  tecnologías web como lo son:'
        >
          <div className='flex justify-center py-4 gap-8'>
            <IconWithText iconURL={'/icons/html.svg'} title='HTML' />
            <IconWithText iconURL={'/icons/css.svg'} title='CSS' />
            <IconWithText iconURL={'/icons/javascript.svg'} title='JavaScript' />
          </div>

          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>Tareas realizables:</h3>

          <List items={ webTecnologies } />
        </Card>

        <Card
          title='Ecosistema de React'
          description='Estoy especializado en la creación de interfaces de usuarios utilizando la librería de React y el ecosistema construído alrededor.'
        >
          <div className='py-4 flex gap-8 justify-center'>
            <IconWithText iconURL={'/icons/react.svg'} title='React' />
            <IconWithText iconURL={'/icons/redux.svg'} title='Redux' />
            <IconWithText iconURL={'/icons/nextjs.svg'} title='NextJS' />
          </div>
          
          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>Proeficiente en:</h3>

          <List items={ reactEcosystem } />
        </Card>

        <Card
          title='TypeScript'
          description='Utilizo TypeScript en todos mis desarrollos debido a que proporciona una mejor experiencia de desarrollo, seguridad de tipos, mantenibilidad y escabilidad. '
        >
          <div className='py-4 flex gap-8 justify-center'>
            <IconWithText iconURL={'/icons/typescript.svg'} title='TypeScript' />
          </div>

          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>Proeficiente en:</h3>
        
          <List items={ typeScriptSkills } />
        </Card>

        <Card
          title='Aplicaciones del Servidor'
          description='Tengo conocimiendos en la creación de servicios REST y GraphQL Server, utilizando NodeJS como Runtime para ejecutar mis aplicaciones de JavaScript.'
        >
          <div className='py-4 flex gap-8 justify-center'>
            <IconWithText iconURL={'/icons/nodejs.svg'} title='Express' />
            <IconWithText iconURL={'/icons/nextjs.svg'} title='NextJs' />
            <IconWithText iconURL={'/icons/graphql.svg'} title='GraphQL' />
          </div>

          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>Proeficiente en:</h3>

          <List items={ serverSideSkills } />
        </Card>

        <div className='col-span-1 md:col-span-2'>
          <Card
            title='Otras Herramientas'
            description='Como desarrollador web estas son algunas de las herramientas que utilizo cotidianamente para el desarrollo de mis aplicaciones.'
          >
            <div className='py-4 flex gap-x-8 gap-y-4 justify-center flex-wrap items-end'>
              <IconWithText iconURL={'/icons/git.svg'} title='Git' />
              <IconWithText iconURL={'/icons/yarn.svg'} title='Yarn' />
              <IconWithText iconURL={'/icons/figma.svg'} title='Figma' size={36} />
              <IconWithText iconURL={'/icons/vite.svg'} title='Vite' />
              <IconWithText iconURL={'/icons/eslint.svg'} title='Eslint' />
              <IconWithText iconURL={'/icons/vscode.svg'} title='VS Code' />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
