import React, { useState } from 'react';
import './Country.css'

const Country = ({ country ,handlerVisitedCountries }) => {

    // console.log(country.area.area);

    const [visited, setVisited] = useState(false)

    function handlerVisited() {

        // if (visited) {
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // setVisited(visited ? false : true)

        setVisited(!visited)

        
        handlerVisitedCountries(country)
    }

    return (
        // <div className={`card ${visited ? 'visited' : 'not-visited'}`}>
        <div className={`card ${visited && 'visited'}`}>

            <button onClick={handlerVisited}>{visited ? "Visited" : "Not Visited"}</button>

            <div>
                <h2>Name : {country.name.common}</h2>
                <p>Population : {country.population.population}</p>
                <p>Region : {country.region.region}</p>
                <p>Area : {country.area.area}  </p>
                <p>{country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            </div>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </div>
    );
};

export default Country;