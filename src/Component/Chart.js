import React, { useEffect } from 'react';



const Chart = () => {

    useEffect(() => {
        async function getData() {
            const response = await fetch('');
            const data = await response.json();
            console.log(data); 
        }
        getData()
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default Chart; 