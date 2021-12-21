const CreateForm = (props) => {
    return (
        <form className='bg-emerald-300 p-4 w-3/4 rounded-lg' onSubmit={props.formCookies}>
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
    )
}

export default CreateForm
