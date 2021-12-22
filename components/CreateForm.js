const CreateForm = (props) => {
    return (
        <form className='bg-emerald-300 mt-8 p-4 w-5/6 mx-auto items-center rounded-md' onSubmit={props.formCookies}>
            {/* <h2 className='text-3xl font-mono font-bold '>Create Cookie Stand</h2> */}
            <label className="font-semibold  font-bold pr-96 pb-9 mr-2">ADD LOCATION</label>
            <div className='flex mb-6'>
                <input type="text" name='loc' placeholder="Cookie Stand Location" className='w-2/3 mx-10' />
                <button className='px-28 mx-30 py-2  bg-emerald-500 rounded-md font-semibold text-gray-900"'>Create Stand</button>

            </div>
            <div className='flex'>
                <div className='flex space-x-32'>

                    <div className='flex flex-col w-full  mx-10'>
                        <label className=" font-semibold pb-4 pl-8">Minimum Customers per Hour</label>
                        <input type="number" name='min' defaultValue ='0' className="px-14 py-1" />
                    </div>

                    <div className='flex flex-col w-full  mx-10'>
                        <label className=" font-semibold  pb-4 pl-8">Maximum Customers per Hour</label>
                        <input type="number" name='max' className="px-14 py-1" defaultValue ='0' />
                    </div>

                    <div className='flex flex-col w-full  mx-10'>
                        <label className=" font-semibold  pb-4 pl-8">Average Cookies per Sale</label>
                        <input type="number" name='avg' defaultValue ='0' className="px-14 py-1" />
                    </div>


                </div>
            </div>
        </form>
    )
}

export default CreateForm
