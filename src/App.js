import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bg from "./23284.jpg";

import Form from "./components/Form";
import Result from "./components/Result";

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
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
        // `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=e646812b93d241c3960d12ccc92f80eb`
      );
      const data = await dataJSON.json();
      console.log(data);
      data.cod === 200
        ? this.setState({
            temperature: Math.floor(data.main.temp - 273.15),
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            req: true
          })
        : alert("City Not Found");
    }
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