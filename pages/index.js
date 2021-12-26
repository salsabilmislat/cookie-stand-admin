// import Footer from '../components/Footer'
// import Header from '../components/Header'
import Main from '../components/Main'
// import Head from '../components/Head'
import LoginForm from '../components/LoginForm'
import { useState } from 'react';
const baseUrl = process.env.NEXT_PUBLIC_COOKIE_STAND;
const tokenUrl = baseUrl + 'api/token/';
import axios from 'axios';
export default function Home() {
  const [token, setToken] = useState('');

  const submitHandler = async (e, credintials) => {
    e.preventDefault();
    axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
    });
    console.log(token)
  }

  // <div className="flex flex-col items-center justify-center min-h-screen  bg-emerald-50">


  {/* <Header /> */ }
  if (!token) return <LoginForm submitHandler={submitHandler} />
  return (<Main token={token} />)


  {/* <Footer /> */ }

  // </div>

}
