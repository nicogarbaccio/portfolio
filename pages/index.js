import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return(
    <div>
      <Head>
        <title>Nico Garbaccio | Full Stack Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
    </div>
  )
}