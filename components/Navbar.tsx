import { useContext } from 'react'
import { UIContext } from '../context/ui'

import { IoMenu } from 'react-icons/io5'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

export const Navbar = () => {
  const { openSidebar, toggleTheme, theme } = useContext(UIContext)

  return (
    <nav
      className='w-full h-16 p-4 sticky top-0 bg-slate-200 dark:bg-slate-700 bg-opacity-90 z-20 shadow-lg '
    >
      <div
        className='max-w-5xl mx-auto flex justify-between items-center'>
        <div
          onClick={ () => toggleTheme() }
        >
          {
            (theme === 'light')
              ? (
                <MdDarkMode
                  size={32}
                  color={'#333'}
                  cursor='pointer'
                />
              )
              : (
                < MdOutlineLightMode
                  size={32}
                  color={'#eee'}
                  fill={'#eee'}
                  cursor='pointer'
                />
              )
          }
        </div>

        <ul className='hidden md:flex gap-4 text-dark dark:text-light font-bold'>
          <li
            className='transition-colors hover:text-accent'>
            <a href="#home">Inicio</a>
          </li>
          <li
            className='transition-colors hover:text-accent'>
            <a href="#skills">Habilidades</a>
          </li>
          <li
            className='transition-colors hover:text-accent'>
            <a href="#projects">Proyectos</a>
          </li>
          <li
            className='transition-colors hover:text-accent'>
            <a href="#learning">Aprendizaje</a>
          </li>
          <li
            className='transition-colors hover:text-accent'>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div className='md:hidden'>
          <IoMenu
            size={32}
            className='text-dark dark:text-light'
            cursor='pointer'
            onClick={ () => openSidebar() }
          />
        </div>
      </div>
    </nav>
  )
}
