import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country)
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'black': 'purple'}}>Name: {name.common}</h3>
            <img style={{maxHeight: '200px'}} src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
            <p><span>Code:{cca3}</span></p>
            <button style={{marginBottom: '10px'}} onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I am visited this Country.': 'I want to visit'}
        </div>
    );
};

export default Country;