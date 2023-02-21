import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return(
    <div>
      <Head>
        <title>Nico Garbaccio | Front-End Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
    </div>
  )
}