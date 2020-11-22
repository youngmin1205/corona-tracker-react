//only class base component
import React from 'react';

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

//all other components are functional with hooks
class App extends React.Component {
    //constructor is not neccessary
    //initial state
    state = {
        data: {},
        country: '',
    }
    //make request to fetchData (in api)
    async componentDidMount() {
        const fetchedData = await fetchData();
        //once get date setting into state
        this.setState({ data: fetchedData }) //populate the data
    }

    handleCountryChange = async (country) => {
        //make request to fetchData (in api), this time also with country
        //call api and pass specific country
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        //set the state
        this.setState({ data: fetchedData, country: country }) ;
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange= {this.handleCountryChange}/>
                <Chart data={data} country={country}/> 
            </div>
        )
    } 
}

export default App;