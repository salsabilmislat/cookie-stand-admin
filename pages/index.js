import Head from 'next/head'
import Footer from '../component/Footer'
import Header from '../component/Header'
import  Main  from '../component/Main'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-emerald-50">
      <Head>
        <title>Coockie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}
