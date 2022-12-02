import { personalLinks } from '../data'
import { IconWithText } from './'

const { github, twitter } = personalLinks

export const Footer = () => {
  return (
    <footer className='bg-slate-800 min-h-[200px] p-4'>
      <h2 className='text-center text-light text-2xl mb-8 font-bold'>
        Donato Monzón
      </h2>
      <div className='flex justify-center'>
        <a
          href={ github.url }
          target='_blank'
          rel='noreferrer'
        >
          <IconWithText
            title='Github'
            iconURL={'/icons/github.svg'}
            hasBackground
            showText={false}
            size={36}
          />
        </a>
        <a
          href={ twitter.url }
          target='_blank'
          rel='noreferrer'
        >
          <IconWithText
            title='Twitter'
            iconURL={ '/icons/twitter.svg' }
            hasBackground
            showText={false}
            size={36}
          />
        </a>
      </div>
    </footer>
  )
}
