// import React, { useEffect, useState } from 'react';
// import { Line, Bar} from 'react-chartjs-2';



// export const fetchDailyData = async () => {
//     try {
//         const { data } = await fetch('https://covid19.mathdro.id/api/daily');

//         return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//     } catch (error) {
//         return error;
//     }
// };

// const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

//     let [globalState, setGlobalState] = useState([]);
//     useEffect(() => {
//         async function getData() {
//             const response = await fetchDailyData();
//             console.log(response);
            
//             setGlobalState(response);
//         }
//         getData()
//     }, [])


//     const barChart = (
//         globalState.confirmed ? (
//             <Bar
//                 data={{
//                     labels: ['Infected', 'Recovered', 'Deaths'],
//                     datasets: [
//                         {
//                             label: 'People',
//                             backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//                             data: [confirmed.value, recovered.value, deaths.value],
//                         },
//                     ],
//                 }}
//                 options={{
//                     legend: { display: false },
//                     title: { display: true, text: `Current state in ${country}` },
//                 }}
//             />
//         ) : null
//     );



//     const lineChart = (
//         globalState[0] ? (
//             <Line data={{
//                 labels: globalState.map(() => new Date(globalState && globalState.lastUpdate && globalState.lastUpdate).toDateString()),
//                 datasets: [{
//                     data: globalState.map(() => globalState && globalState.confirmed && globalState.confirmed.value),
//                     label: 'Infected',
//                     borderColor: '#3333ff',
//                     fill: true,
//                 },
//                 {
//                     data: globalState.map(() => globalState && globalState.deaths && globalState.deaths.value),
//                     label: 'Deaths',
//                     borderColor: 'red',
//                     backgroundColor: 'rgba(255, 0, 0, 0.5)',
//                     fill: true,
//                 }]
//             }}
//                 options={{
//                     scales: { xAxes: [{ gridLines: { display: false } }], yAxes: [{ gridLines: { display: false } }] }
//                 }}
//             />) : null
//     );


//     return (
//         <div>
//             {country ? barChart : lineChart}
//         </div>
//     );
// }

// export default Chart; 