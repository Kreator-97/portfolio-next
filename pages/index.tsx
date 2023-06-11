import Head from 'next/head'
import { Footer, Header, Main, Meta, Navbar, Sidebar } from '../components'

export default function Home() {
  return (
    <div className="App mx-auto" id='home'>
      <Head>
        <Meta />
      </Head>
      <Navbar />
      <Header />

      <Main />

      <Footer />
      <Sidebar />
    </div>
  )
}
