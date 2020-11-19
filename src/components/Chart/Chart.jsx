import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

//once fetched the data set it to the state using hook
const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    //  state = {
    //      dailyData: {}
    //  }

    //can not use async for useEffect
    useEffect(() => {
        const fetchAPI = async () => {
            //const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        }

        fetchAPI(); 
    });

    const lineChart = (
        dailyData.length
        ?(
        <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets:[{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: '(rgba255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;