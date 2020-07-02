import React, { useEffect } from 'react';
// import { Line, Bar } from 'react-chartjs-2';


const Chart = () => {

    // const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch('');
            const data = await response.json();
            console.log(data);
            
            // setDailyData(data)
        }
        getData()
    }, [])

    // const barChar = (
    //     confirmed ? (
    //         <Bar
    //             data={{
    //                 labels: ['Infected', 'Recovered', 'Deaths'],
    //                 datasets: [
    //                     {
    //                         label: 'People',
    //                         backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
    //                         data: [confirmed.value, recovered.value, deaths.value],
    //                     },
    //                 ]
    //                 ,
    //             }}
    //             options={{
    //                 legend: { display: false },
    //                 title: { display: true, text: `Current State in ${country}` }
    //             }}
    //         />
    //     ) : null
    // );

    // const lineChart = (
    //     dailyData[0] ? (
    //         <Line
    //             data={{
    //                 labels: dailyData.map(({ date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map((data) => data.confirmed),
    //                     label: 'Infected',
    //                     borderColor: '#3333ff',
    //                     fill: true,
    //                 }, {
    //                     data: dailyData.map((data) => data.deaths),
    //                     label: 'Deaths',
    //                     borderColor: 'red',
    //                     backgroundColor: 'rgba(255, 0, 0, 0.5)',
    //                     fill: true,
    //                 },
    //                 ],
    //             }}
    //         />
    //     ):null
    // );



    return (
        <div>
            {/* {country ? barChar : lineChart} */}
        </div>
    );
}

export default Chart; 