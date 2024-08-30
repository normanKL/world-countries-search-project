// src/App.jsx

import React from "react"
import './App.css'
import { useState, useEffect } from "react"
import Country from "./component/country"

const App = () => {

  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {

    async function fetchCountries() {

      const resp = await fetch("https://restcountries.com/v3.1/all")
      const data = await resp.json()

      const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      setCountries(sortedCountries)
    }

    fetchCountries()

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredCountries(results)
  }


  return (
    <>

    <h1>Country Finder</h1>

    <form onSubmit={handleSubmit}>
    <input
      type = "text"
      placeholder = "Search for a country"
      value = {searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button type ="submit">Submit</button>
    </form>

    {searchQuery && (
      <div id="countryInfoCard">
        {filteredCountries.map((country) => (
          <Country key = {country.cca3} country={country}/>
         
        ))}
      </div>
    )}
    </>
  )
}

export default App
