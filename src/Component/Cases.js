import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';


const Cases = () => {

    let [globalState, setGlobalState] = useState();
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            console.log(data);
            setGlobalState(data)
        }
        getData()
    }, [])
    return (
        <div className='container'>
            <div className='row justify-content-center mt-4'>
                <div className='infected borderBox'>
                    <p className='text-secondary'>Infected</p>
                    <h3 className='' style={{ color: 'orange' }}>
                        <CountUp end={[globalState && globalState.Global.TotalConfirmed && globalState.Global.TotalConfirmed ]} separator="," duration={2.5}></CountUp>
                    </h3>
                    <p className='text-secondary'>{new Date(globalState && globalState.Date && globalState.Date).toDateString()}</p>
                    <p className='situation'>Number of active cases of <br />COVID-19</p>
                </div>
                <div className='infected borderBox1'>
                    <p className='text-secondary'>Recovered</p>
                    <h3 className='' style={{ color: 'green' }}>
                        <CountUp end={[globalState && globalState.Global.TotalRecovered && globalState.Global.TotalRecovered]} separator="," duration={2.5}></CountUp>
                    </h3>
                    <p className='text-secondary'>{new Date(globalState && globalState.Date && globalState.Date).toDateString()}</p>
                    <p className='situation'>Number of recovered cases from COVID-19</p>
                </div>
                <div className='infected borderBox2'>
                    <p className='text-secondary' >Deaths</p>
                    <h3 className='' style={{ color: 'red' }}>
                        <CountUp end={[globalState && globalState.Global.TotalDeaths && globalState.Global.TotalDeaths]} separator="," duration={2.5}></CountUp>
                    </h3>
                    <p className='text-secondary'>{new Date(globalState && globalState.Date && globalState.Date).toDateString()}</p>
                    <p className='situation'>Number of death cases of <br />COVID-19</p>
                </div>
            </div>
        </div>
    );
}

export default Cases;