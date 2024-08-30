import React from "react"
import "./country.css"

const formatNumberWithCommas = (num) => {
    return new Intl.NumberFormat().format(num)
}

const formatCurrencies = (currencies) => {
    return Object.values(currencies).map(currency => (
        <div key={currency.name}>
           currency: {currency.symbol} - {currency.name}
        </div>
    ))
}

const Country = ({ country }) => {

    const getGoogleMapsLink = (googleMapsUrl) => {
        return googleMapsUrl
    }

    return (
        <div key ={country.cca3}>
            <section id="countryFlag">
                <span>{country.flag}</span> <br />
                <p> {country.name.common}</p>
            </section>
            <p className="countryInfo">
                Capital City: {country.capital} <br />
                Total Population: {formatNumberWithCommas(country.population)} people<br />
                Region: {country.region} <br />
                {formatCurrencies(country.currencies)} 
            <a
                href={getGoogleMapsLink(country.maps.googleMaps)}
                target="_blank"
                rel="noopener noreferrer"
                id="countyMapLink"
            >
                View {country.name.common} on Google Maps
            </a>
            </p>
        </div> 
    )
}

export default Country