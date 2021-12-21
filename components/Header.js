import Link from 'next/link'

const Header = (props) => {
  return (
    <header className='flex  w-full justify-between text-lg font-bold font-serif bg-emerald-500 p-4'>
      <h1 className="text-3xl">Coockie Stand Admin</h1>
      <Link href='/Overview'>
        <a className=" rounded bg-green-50">Overview</a>
      </Link>
      {/* <button className='bg-emerald-300 text-lg w-24 p-4'>Overview</button> */}

    </header>

  )
}

export default Header
