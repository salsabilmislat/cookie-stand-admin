// import React from 'react'
// import { useState, useEffect } from 'react';
// import CreateForm from './CreateForm';
// import Report from './ReportTable';
// import Footer from './Footer';
// import hours from '../data';
// import Header from './Header';
// import Head from './Head';
// import Main from './Main';
// import axios from 'axios';
// const baseUrl = 'https://cookie-stand-api-salsabil.herokuapp.com/';
// const responsesEndPoint = baseUrl + 'api/v1/cookie_stands/';
// const CookieStandAdmin = () => {
//     const [cookieStand, setCookieStand] = useState([]);
//         // const [hours, sethours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
//         const [final_sum, setsum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//         const [totaloftotal, settotaloftotal] = useState(0);
//         useEffect(() => {
//             if (props.token) {
//                 getRepliesFromAPI();
//             }
//         }, [props.token]);


//         let allData = []
//         const getRepliesFromAPI = async () => {
//             console.log("hiii");

//             const config = { headers: { 'Authorization': 'Bearer ' + props.token } };
//             const answers = await axios.get(responsesEndPoint, config);
//             console.log("hiiiia", answers.data);

//             const mappedData = answers.data.map((item) => {
//                 const storeData = {
//                     id: item.id,
//                     location: item.location,
//                     average_cookies_per_sale: item.average_cookies_per_sale,
//                     minimum_customers_per_hour: item.minimum_customers_per_hour,
//                     maximum_customers_per_hour: item.maximum_customers_per_hour,
//                     hour_sales: item.hourly_sales,

//                 }
//                 allData.push(storeData)
//                 setCookieStand([...cookieStand, ...allData]);

//                 return storeData
//             });

//         }


//         const formCookies = (e) => {
//             e.preventDefault();


//             // location: e.target.loc.value,

//             let minCustomers = parseInt(e.target.min.value)

//             let maxCustomers = parseInt(e.target.max.value)

//             let avgCookies = parseInt(e.target.avg.value)

//             let count = 0

//             const store_data = {

//                 location: e.target.loc.value,

//                 hour_sales: hours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
//             }

//             for (let j = 0; j < store_data.hour_sales.length; j++) {

//                 count = count + store_data.hour_sales[j]

//             }
//             store_data.total = count
//             setCookieStand([...cookieStand, store_data])

//             let total_sum = final_sum.map((i, idx) => {
//                 if (idx === final_sum.length - 1) {
//                     return i + store_data.total
//                 }

//                 return i + store_data.hour_sales[idx]
//             }
//             )
//             setsum(total_sum)
//         };
//         // setCookieStand(JSON.stringify(formCookies));

//     return (
        
//         <div className="flex flex-col items-center justify-center min-h-screen  bg-emerald-50">
//                 <Head />
//                 <Header />
//                 <Main />
//                 {/* <main className="flex flex-col items-center m-10 w-full flex-1 text-center ">
//                     <CreateForm formCookies={formCookies} />
//                     <Report cookieStand={cookieStand} hours={hours} final_sum={final_sum} />
//                     <Footer cookieStand={cookieStand} />

//                 </main> */}
//                 <Footer cookieStand={cookieStand}/>
//             </div>
        

        
//         )
// }

// export default CookieStandAdmin
