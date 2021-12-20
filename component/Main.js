import { useState } from 'react';


const Main=()=> {
    const [cookieStand, setCookieStand] = useState([]);
    const formCookies = (e)=>{
        e.preventDefault();
        
        let formCookies ={
            location: e.target.loc.value,
            
            minCustomers:Number(e.target.min.value),
            
            maxCustomers:Number(e.target.max.value) ,
            
            avgCookies:Number(e.target.avg.value)
        };
        
        setCookieStand(JSON.stringify(formCookies));
        
    }
    return (
        <main className="flex flex-col items-center m-10 w-full flex-1 text-center ">

            <form className='bg-emerald-300 p-4 w-3/4 rounded-lg'onSubmit={formCookies}>
                <h2 className='text-3xl font-mono font-bold '>Create Cookie Stand</h2>
                <label >Location</label>
                <input type="text" name='loc' className='flex-auto w-11/12 m-3' />
                <div className='flex w-full'>
                    <div className='flex flex-col p-4 w-3/12'>
                        <label >Minimum Customers per Hour</label>
                        <input type="number" name='min' className="m-3" />
                    </div>
                    <div className='flex flex-col p-4 w-3/12'>
                        <label >Maximum Customers per Hour</label>
                        <input type="number" name='max' className="m-3" />
                    </div>
                    <div className='flex flex-col p-4 w-3/12'>
                        <label >Average Cookies per Sale</label>
                        <input type="number" name='avg' className="m-3" />
                    </div>
                    <button className='bg-emerald-500 text-xl mt-6 w-60 h-14'>Create</button>
                </div>
            </form>
            <h3 className="my-5 p-6">Report Table Coming Soon...</h3>
            <div className="mt-4 text-center">
                <p className="my-5">
                    {cookieStand}              
                </p>
            </div>
        </main>


    )
}

export default Main