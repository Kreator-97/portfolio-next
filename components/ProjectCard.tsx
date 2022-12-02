import { FC } from 'react'
import Image from 'next/image'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'

interface Props {
  imgURL        : string;
  title         : string;
  url           : string;
  children      : React.ReactNode;
  repositoryURL?: string;
  reverse      ?: boolean;
}

import styles from './ProjectCard.module.css'

export const ProyectCard: FC<Props> = ({ imgURL, title, url, children, repositoryURL, reverse = false }) => {
  
  const positionContent = reverse ? 'md:col-start-1 md:row-start-1' : ''
  const positionImg = reverse ? 'md:col-start-2 md:row-start-1' : ''

  return (
    <div className={`px-4 py-8 bg-opacity-50 ${ reverse ? 'bg-indigo-800' : '' }`}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start'>

        <div className={ positionImg + ' relative ' + styles['card-img'] }>
          <Image
            src={imgURL}
            className='rounded-lg w-full'
            title={title}
            alt={title}
            sizes={'100%'}
            width='160'
            height='90'
          />
          <div
            className={ 'flex absolute top-0 w-full h-full rounded bg-transparent hover:bg-opacity-90 hover:bg-slate-800 justify-center items-center transition-colors ' + styles.overlay }
          >
            <div className='flex flex-col justify-center items-center cursor-pointer gap-4'>
              <a
                href={url}
                target='_blank'
                rel='noreferrer'
                style={{ lineHeight: '20px' }}
                className='text-light font-bold p-2 bg-accent hover:bg-accentDark rounded transition-colors border border-light flex justify-center gap-2'
              >
                Visitar sitio
                <HiOutlineExternalLink
                  size={20}
                  className='text-light inline'
                />
              </a>
              {
                (repositoryURL)
                  ? (
                    <a
                      href={repositoryURL}
                      target='_blank'
                      rel='noreferrer'
                      style={{ lineHeight: '20px' }}
                      className='text-light font-bold p-2 bg-slate-600 hover:bg-slate-700 rounded transition-colors border border-light flex justify-center gap-2'
                    >
                      Ir al repositorio
                      <VscGithub
                        size={20}
                        className='text-light inline'
                      />
                    </a>
                  )
                  : (
                    <p className='font-bold text-light text-sm text-center'>
                      Este repositorio es privado. Contactame para colaborar.
                    </p>
                  )
              }
              
            </div>
          </div>
        </div>

        <div className={positionContent}>
          <h3 className="text-light text-2xl font-bold mb-4 text-center">{ title }</h3>
          {
            children
          }
        </div>
      </div>
    </div>
  )
}
