import React, { useState, useEffect } from 'react';
import { Line  } from 'react-chartjs-2';


const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://covid19.mathdro.id/api/daily');
            const data = await response.json();
            console.log(data);
            setDailyData(data)
        }
        getData()
    }, [])
    

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ reportDate }) => reportDate),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed.total),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    return (
        <div className="mt-5">
            {lineChart}
        </div>
    );
};

export default Chart;