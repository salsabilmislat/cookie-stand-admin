import { useState } from 'react';
import CreateForm from './CreateForm';
import Report from './ReportTable';
import Footer from './Footer';
import hours from '../data';

const Main = () => {
    const [cookieStand, setCookieStand] = useState([]);
    // const [hours, sethours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
    const [final_sum, setsum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const formCookies = (e) => {
        e.preventDefault();


        // location: e.target.loc.value,

        let minCustomers=parseInt(e.target.min.value)

        let maxCustomers=parseInt(e.target.max.value)

        let avgCookies=parseInt(e.target.avg.value)

        let count = 0

        const store_data = {

            location: e.target.loc.value,

            hour_sales: hours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
        }

        for (let j = 0; j < store_data.hour_sales.length; j++) {

            count = count + store_data.hour_sales[j]

        }
        store_data.total = count
        setCookieStand([...cookieStand, store_data])

        let total_sum = final_sum.map((i, idx) => {
            if (idx === final_sum.length - 1) {
                return i + store_data.total
            }

            return i + store_data.hour_sales[idx]
        }
        )
        setsum(total_sum)
    };

    // setCookieStand(JSON.stringify(formCookies));


return (
    <>
        <main className="flex flex-col items-center m-10 w-full flex-1 text-center ">
            <CreateForm formCookies={formCookies} />
            <Report cookieStand={cookieStand} hours={hours} final_sum={final_sum} />
            <Footer cookieStand={cookieStand} />
            
        </main>
    </>

)
}

export default Main