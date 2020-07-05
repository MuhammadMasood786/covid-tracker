import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';





const Chart = () => {

    let [globalState, setGlobalState] = useState({});
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            console.log(data);
            setGlobalState(data);
        }
        getData()
    }, [])



   


    return (
        <div className='container mt-5'>
            <Line data={{
                labels:  new Date(globalState && globalState.Date && globalState.Date).toDateString(),
                datasets: [{
                    data:[globalState && globalState.Global && globalState.Global.TotalConfirmed],
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },
                {
                    data:  [globalState && globalState.Global &&  globalState.Global.NewRecovered],
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }}
                options='option'
            />
        </div>
    );
}

export default Chart; 