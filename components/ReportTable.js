export default function Report(props) {

    if (props.cookieStand.length === 0) {

        return (

            <h2 className="font-bold p-4">No Cookie Stands Available</h2>
        )
    } else {

        return (
            <table className="mt-20 mb-20">
                <thead className=''>
                    <tr className='bg-emerald-500'>
                        <th className='px-20 '>Location</th>
                        {
                            props.hours.map(i => {
                                return (

                                    <th className='px-2 '>{i} </th>
                                )
                            }
                            )
                        }
                        <th className='px-10 '>Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cookieStand.map((store_data, idx) => {
                            const e =
                                <>
                                    <td className='px-4 border border-black' >{store_data.location}<button className="justify-center w-8 h-10 float-right text-red-900" onClick={() => { props.deleteHandler(store_data.id) }}><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg></button></td>
                                    {
                                        store_data.hour_sales.map(i => {
                                            return (
                                                <td className='px-1 border border-black'> {i} </td>
                                            )
                                        })
                                    }
                                    {/* <td className='border border-black'>{store_data.total}</td> */}
                                    <td className="px-2 border border-black text-center text-center">{store_data.hour_sales.reduce((sum, val) => sum + val, 0)}</td>
                                </>

                            if (idx % 2 == 0) {
                                return (
                                    <tr className='bg-emerald-400'>
                                        {e}
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr className='bg-emerald-300'>
                                        {e}
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>

                <tfoot className='bg-emerald-500'>
                    <td className='border border-black'>Totals</td>
                    {
                        props.final_sum.map(i => {
                            return (
                                <td className='border border-black'>{i}</td>
                            )
                        })
                    }
                </tfoot>
            </table>
        )
    }
}