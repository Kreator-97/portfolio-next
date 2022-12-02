import { createContext, FC, useEffect, useState } from 'react'

interface INITIAL_STATE {
  isSidebarOpen : boolean;
  theme         : Theme
}

type Theme = 'dark' | 'light';

interface ContextProps {
  isSidebarOpen : boolean;
  theme         : Theme;
  closeSidebar(): void;
  openSidebar (): void;
  toggleTheme (): void;
}

export const UIContext = createContext<ContextProps>({} as ContextProps)

const initial_state: INITIAL_STATE = {
  isSidebarOpen: false,
  theme: 'dark'
}

interface Props {
  children: React.ReactNode;
}

export const UIProvider: FC<Props> = ({children}) => {
  const [ state, setState ] = useState<INITIAL_STATE>(initial_state)

  useEffect(() => {
    // define the theme
    const theme = (localStorage.getItem('theme') || 'dark') as Theme

    if( theme === 'dark' ) {
      const html = document.querySelector('html')
      html?.setAttribute('class', 'dark')
      setState({...state, theme})
    }

    if( theme === 'light' ) {
      document.querySelector('html')?.classList.remove('dark')
      setState({...state, theme})
    }
  }, [])

  const closeSidebar = () => setState({ ... state, isSidebarOpen: false })
  const openSidebar = () => setState({ ...state, isSidebarOpen: true })

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme') || 'dark'

    if( theme === 'dark' ) {
      document.querySelector('html')?.classList.remove('dark')

      localStorage.setItem('theme', 'light')
      setState({...state, theme: 'light' })
    }
    if( theme === 'light' ) {
      const html = document.querySelector('html')
      html?.setAttribute('class', 'dark')

      localStorage.setItem('theme', 'dark')
      setState({...state, theme: 'dark' })
    }
  }

  return (
    <UIContext.Provider value={{ ...state, closeSidebar, openSidebar, toggleTheme }}>
      { children }
    </UIContext.Provider>
  )
}
