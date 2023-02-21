import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return(
    <div>
      <Head>
        <title>Nico Garbaccio | Full Stack Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}