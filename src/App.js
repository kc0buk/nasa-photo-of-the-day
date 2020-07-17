import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {API_KEY, APOD_URL, MARS_WEATHER_URL } from './constants'
import HeroImage from './components/HeroImage'
import MarsWeather from './MarsWeather'

function App() {
  const [apodData, setApodData] = useState({})
  const [apodDate, setApodDate] = useState('')
  const [marsWeatherData, setMarsWeatherData] = useState({})
  const [date, setDate] = useState('')
  
  const apiDate = `&date=${date}`

  useEffect (() => {
    axios.get(`${APOD_URL}/?api_key=${API_KEY}${apiDate}`)
      .then( res => {
        setApodData(res.data)
        setApodDate(res.data.date)
        
        // console.log(res.data)
      })
      .catch( err => {
        console.log(`The error was ${err}`)
      })
  }, [date])

  useEffect (() => {
    axios.get(`${MARS_WEATHER_URL}api_key=${API_KEY}`)
      .then( res => {
        console.log(res)
        setMarsWeatherData(res.data)
        
        // console.log(res.data)
      })
      .catch( err => {
        console.log(`The error was ${err}`)
      })
  }, [])

  // const getDate = (e) => {
  //   setDate(e.target.value)
  // }

  return (
    <div className="App">
      <HeroImage apodData={apodData} apodDate={apodDate} setDate={setDate}/>
      <MarsWeather marsWeatherData={marsWeatherData}>
    </div>
  );
}

export default App;
