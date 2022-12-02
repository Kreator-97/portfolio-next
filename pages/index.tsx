import Head from 'next/head'
import { Footer, Header, Main, Navbar, Sidebar } from '../components'

export default function Home() {
  return (
    <div className="App mx-auto" id='home'>
      <Head>
        <title>Donato Monzón | Desarrollador Web</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <meta name="keywords" content="donato, monzón, donato monzón, desarrollar web, developer, react developer, frontend developer, fullstack developer, tuxtla gutierrez, monzon" />
        <meta name="description" content="Desarrollador de sitios y aplicaciones web" />
        <meta name="author" content="Donato Monzon" />
        <meta name="robots" content="index"/>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <Header />

      <Main />

      <Footer />
      <Sidebar />
    </div>
  )
}
