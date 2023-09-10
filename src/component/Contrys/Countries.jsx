import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flags) =>{
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Country: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul style={{listStyle: 'none', textAlign: 'left'}}>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
 
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            <div className="country-container">
            {
                countries.map(country => <Country 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags} 
                    country={country} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;