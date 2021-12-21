import Footer from '../components/Footer'
import Header from '../components/Header'
import  Main  from '../components/Main'
import Head from '../components/Head'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-emerald-50">
      
      <Head />
      <Header />
      <Main />
      {/* <Footer /> */}
      
    </div>
  )
}
