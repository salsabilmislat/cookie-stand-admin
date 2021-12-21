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
                                    <td className='px-4 border border-black' >{store_data.location}</td>
                                    {
                                        store_data.hour_sales.map(i => {
                                            return (
                                                <td className='px-1 border border-black'> {i} </td>
                                            )
                                        })
                                    }
                                    <td className='border border-black'>{store_data.total}</td>
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