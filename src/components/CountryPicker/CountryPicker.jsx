import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

//omce country is chosen, it goes back to handleCountryChange (App.js)
const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    //callback
    useEffect(() => {
        const fetchAPI = async () => {
        //fetch the country from api
        setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]); //only changes when setFetchedCountries changes

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;