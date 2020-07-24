import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Form from "./components/Form";
import Result from "./components/Result";



export default class App extends Component {
  state = {
    temperature: undefined,
    
    tempd2: undefined,
    tempd3: undefined,
    tempd4: undefined,
    tempd5: undefined,
    tempd6: undefined,
    tempd7: undefined,

    city: undefined,
    country: undefined,
    humidity: undefined,
    wind_speed : undefined,
    wind_degree: undefined,
    time: undefined,

    description: undefined,
    desc2: undefined,
    desc3: undefined,
    desc4: undefined,
    desc5: undefined,
    desc6: undefined,
    desc7: undefined,

    error: undefined,
    req: false,
    backgroundStyle: {
      backgroundImage: 'https://images.unsplash.com/photo-1476619925034-16410ddef932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements[0].value;
    const country = e.target.elements[1].value;
    if (city && country) {
      const dataJSON = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e646812b93d241c3960d12ccc92f80eb`
      );

      const data = await dataJSON.json();
      console.log(data);


    if (data.cod ===200)
   {   
    const lat = data.coord.lat
    const long = data.coord.lon 
    const fulldataJSON = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=e646812b93d241c3960d12ccc92f80eb`
      )
      const fulldata = await fulldataJSON.json();
      console.log(fulldata);

      this.setState({
        temperature: Math.floor(data.main.temp - 273.15),
        tempd2: Math.floor(fulldata.daily[1].temp.day - 273.15),
        tempd3: Math.floor(fulldata.daily[2].temp.day - 273.15),
        tempd4: Math.floor(fulldata.daily[3].temp.day - 273.15),
        tempd5: Math.floor(fulldata.daily[4].temp.day - 273.15),
        tempd6: Math.floor(fulldata.daily[5].temp.day - 273.15),
        tempd7: Math.floor(fulldata.daily[6].temp.day - 273.15),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind_speed : fulldata.current.wind_speed,
        wind_degree: fulldata.current.wind_deg,
        desc2: fulldata.daily[1].weather[0].description,
        desc3: fulldata.daily[2].weather[0].description,
        desc4: fulldata.daily[3].weather[0].description,
        desc5: fulldata.daily[4].weather[0].description,
        desc6: fulldata.daily[5].weather[0].description,
        desc7: fulldata.daily[6].weather[0].description,

        time : data.dt,
        description: data.weather[0].description,
        
        req: true
      })
   }
        else
         alert('City not found')


    }
    console.log(this.state)
  };


  render() {
    
    return (
      <div style={{ backgroundImage: `url(${this.state.backgroundStyle.backgroundImage})`, height:"100vh", width:"100vw",zIndex:"-100", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:'norepeat'}} id="main">

<Form data={this.state} getWeather={this.getWeather} />
            <Result data={this.state} />
        </div>
    )
  }
}