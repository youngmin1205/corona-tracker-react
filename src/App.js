import React from 'react';

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

//all other components are functional with hooks
class App extends React.Component {
    //constructor is not neccessary
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData }) //populate the data
    }

    render() {
        const { data } = this.state;
        return (
            <div className = {styles.container}>
                <Cards data = {data}/>
                <Chart /> 
                <CountryPicker />
            </div>
        )
    }
}

export default App;