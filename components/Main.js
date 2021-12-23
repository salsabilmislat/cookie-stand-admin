import { useState, useEffect } from 'react';
import CreateForm from './CreateForm';
import Report from './ReportTable';
import Footer from './Footer';
import hours from '../data';
import Header from '../components/Header';
import Head from '../components/Head';
import axios from 'axios';

const baseUrl = 'https://cookie-stand-api-salsabil.herokuapp.com/';
const responsesEndPoint = baseUrl + 'api/v1/cookie_stands/';

const Main = (props) => {
    const [cookieStand, setCookieStand] = useState([]);
    // const [hours, sethours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
    const [final_sum, setsum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // const [totaloftotal, settotaloftotal] = useState(0);
    // const [numberoflocaton, senumberoflocaton] = useState(0);
    useEffect(() => {
        if (props.token) {
            getRepliesFromAPI();
        }
    }, []);

    let allData = []
    const getRepliesFromAPI = async () => {
        console.log("hiii");

        const config = { headers: { 'Authorization': 'Bearer ' + props.token } };
        axios.get("https://cookie-stand-api-salsabil.herokuapp.com/api/v1/cookie_stands/", config).then(answers => {
            console.log("hiiiia", answers.data);

            const mappedData = answers.data.map((item) => {
                const storeData = {
                    id: item.id,
                    location: item.location,
                    average_cookies_per_sale: item.average_cookies_per_sale,
                    minimum_customers_per_hour: item.minimum_customers_per_hour,
                    maximum_customers_per_hour: item.maximum_customers_per_hour,
                    hour_sales: item.hourly_sales,
                    // totalperday: cal_total_per_day(item.hour_sales),

                }
                allData.push(storeData)

                return storeData
            });
            let arr1 = [];
            let megaSum = 0;
            for (let i = 0; i < hours.length; i++) {
                let sum = 0;

                for (let j = 0; j < answers.data.length; j++) {
                    sum += answers.data[j].hourly_sales[i];
                }

                megaSum += sum;
                arr1.push(sum);
            }
            // setCookieStand(answers.data);

            setsum([...arr1, megaSum]);
            setCookieStand(allData);
            // setCookieStand([...cookieStand,answers.data]);
            // setCookieStand(JSON.stringify(formCookies));
        });


    }
    const formCookies = (e) => {
        e.preventDefault();


        // location: e.target.loc.value,

        let minCustomers = parseInt(e.target.min.value)

        let maxCustomers = parseInt(e.target.max.value)

        let avgCookies = parseInt(e.target.avg.value)

        let count = 0

        const store_data = {

            location: e.target.loc.value,

            hour_sales: hours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
        }


        for (let j = 0; j < store_data.hour_sales.length; j++) {

            count = count + store_data.hour_sales[j]

        }
        store_data.total = count
        // setCookieStand([...cookieStand, store_data])

        let total_sum = final_sum.map((i, idx) => {
            if (idx === final_sum.length - 1) {
                return i + store_data.total
            }

            return i + store_data.hour_sales[idx]
        }
        )
        setsum(total_sum)

        const configPost = {
            method: "POST",
            url: responsesEndPoint,
            headers: { "Authorization": `Bearer ${props.token}` },
            data: {
                location: e.target.loc.value,
                description: '',
                hourly_sales: store_data.hour_sales,
                minimum_customers_per_hour: minCustomers,
                maximum_customers_per_hour: maxCustomers,
                average_cookies_per_sale: avgCookies,
                owner: 1
            }
        }

        axios(configPost).then(res => getRepliesFromAPI())

    };

    const deleteHandler = async (id) => {
        const config = {
            method: "DELETE",
            url: `https://cookie-stand-api-salsabil.herokuapp.com/api/v1/cookie_stands/${id}`,
            headers: { "Authorization": `Bearer ${props.token}` }
        }
        // await axios(config)
        // let result = cookieStand.filter(cookie => cookie.id != id)
        axios(config).then(res => getRepliesFromAPI())
        // setCookieStand(result)
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-emerald-50">
            <Head />
            <Header />
            <main className="flex flex-col items-center m-10 w-full flex-1 text-center ">
                <CreateForm formCookies={formCookies} />
                <Report cookieStand={cookieStand} hours={hours} final_sum={final_sum} deleteHandler={deleteHandler} />
                <Footer cookieStand={cookieStand} />

            </main>
        </div>

    )



}

export default Main