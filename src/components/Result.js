import React, { Component } from "react";
import cloud from "../cloud.png"
import nightrain from "../nightr.png"
import rain  from "../rain.png"
import suncloud from "../sunc.png"
import sun from "../sun.png"


export default class Result extends Component {
  render() {
    return (
      // <div
      //   className="center-container result-container"
      //   style={this.props.data.req ? { width: "100%" } : { width: 0 }}
      // >
      //   {/* <h4>
      //     City: <span>{this.props.data.city}</span>
      //   </h4>
      //   <h4>
      //     Temperature: <span>{this.props.data.temperature} C</span>
      //   </h4>
      //   <h4>
      //     Humidity: <span>{this.props.data.humidity}</span>
      //   </h4>
      //   <h4>
      //     Description:{" "}
      //     <span style={{ textTransform: "capitalize" }}>
      //       {this.props.data.description}
      //     </span>
      //   </h4> */}
        <div id="app" className="wrapper" style={this.props.data.req ? {  } : { display: "none" }}>
  <div className="top">
  <h1 className="location" style={{color:"#8AC3E2"}}>{this.props.data.city}, {this.props.data.country}</h1>


    {/* <form onSubmit={this.props.getWeather}>
    <input type="text" className="location" placeholder="Miami, FL"/>
    <input type="text" className="location" placeholder="Miami, FL"/>
          <input
            type="city"
            className="location"
            id="city-input"
          placeholder={this.props.data.city}
          />
          <input
            type="country"
            className="location"
            id="exampleInputCountry1"
            placeholder={this.props.data.country}
          />
          <button type="submit" className="btn btn-primary">
            Get Weather
          </button>
        </form> */}
  


    <div className="detail">
      <span><i className="fa fa-map-marker"></i></span>
      <span>{this.props.data.city}, {this.props.data.country}</span>
      <span>7:30 pm</span>
      

    </div>
    <ul className="options">
      <li ><i class="fa fa-cloud" aria-hidden="true"></i> WEATHER</li>
      <li ><i className="fa fa-send"></i>NEWS & EVENTS</li>
      <li ><i class="fa fa-picture-o"></i>GALLERY (30)</li>
    </ul>
  <a href="https://github.com/xatishayx" target="blank">  <p className="latest-locations"><i class="fa fa-github" aria-hidden="true"></i><span><center>Fork Me</center></span></p> </a>
  </div>
  <div className="bottom">
    <ul>
      <li>
        <div className="temp-middle">
        <p className="temperature-stats"><span className="temperature">{this.props.data.temperature}°</span><img src={rain} heigh="120" width="120 "/></p>
          <p className="temp-extra"><span class="day">MONDAY 23th</span> <span>4mph / 67°</span></p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day">TUE</p>
          <p className="weather"><img src={cloud} heigh="50" width="50 "/></p>
          <p className="temperature">60°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day">WED</p>
          <p className="weather"><img src={sun} heigh="50" width="50 "/></p>
          <p className="temperature">72°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day">THU</p>
          <p className="weather"><img src={suncloud} heigh="50" width="50 "/></p>
          <p className="temperature">63°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day">FRI</p>
          <p className="weather"><img src={rain} heigh="50" width="50 "/></p>
          <p className="temperature">65°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day">SAT</p>
          <p className="weather"><img src={rain} heigh="50" width="50 "/></p>
          <p className="temperature">18°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day">SUN</p>
          <p className="weather"><img src={sun} heigh="50" width="50 "/></p>
          <p className="temperature">69°</p>
        </div>
      </li>
    </ul>
  </div>
</div> 

      
    );
  }
}
