import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';


const Cases = () => {

    let [globalState, setGlobalState] = useState();
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://covid19.mathdro.id/api');
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
                    <CountUp end={[globalState && globalState.confirmed && globalState.confirmed.value]} separator="," duration={2.5}></CountUp>
                    </h3>
                    <p className='text-secondary'>{new Date(globalState && globalState.lastUpdate && globalState.lastUpdate).toDateString()}</p>
                    <p className='situation'>Number of active cases of <br />COVID-19</p>
                </div>
                <div className='infected borderBox1'>
                    <p className='text-secondary'>Recovered</p>
                    <h3 className='' style={{ color: 'green' }}>
                    <CountUp end={[globalState && globalState.recovered && globalState.recovered.value]} separator="," duration={2.5}></CountUp>
                    </h3>
                    <p className='text-secondary'>{new Date(globalState && globalState.lastUpdate && globalState.lastUpdate).toDateString()}</p>
                    <p className='situation'>Number of active cases of <br />COVID-19</p>
                </div>
                <div className='infected borderBox2'>
                    <p className='text-secondary' >Deaths</p>
                    <h3 className='' style={{ color: 'red' }}>
                    <CountUp end={[globalState && globalState.deaths && globalState.deaths.value]} separator="," duration={2.5}></CountUp>
                    </h3>
                    <p className='text-secondary'>{new Date(globalState && globalState.lastUpdate && globalState.lastUpdate).toDateString()}</p>
                    <p className='situation'>Number of active cases of <br />COVID-19</p>
                </div>
            </div>
        </div>
    );
}

export default Cases;