import React, { Component } from "react";
import cloud from "../cloud.png";
import snow from "../snow.png";
import rain from "../rain.png";
import suncloud from "../sunc.png";
import sun from "../sun.png";
import Moment from "react-moment";



export default class Result extends Component {

  

  render() {
    
    const date = new Date();
    // console.log(date);
 
    
    const {temperature,
      tempd2,
      tempd3,
      tempd4,
      tempd5,
      tempd6,
      tempd7,
      city,
      country,
      humidity,
      wind_speed,
      wind_degree,
      time,
      description,
      desc2,
      desc3,
      desc4,
      desc5,
      desc6,
      desc7,
      error,
      req,
      backgroundImage} = this.props.data 

      const fdate = time;
    console.log(city)
    return (

        <div id="app" className="wrapper" style={req ? {  } : { display: "none" }}>
  <div className="top" style={{ backgroundImage: `url(${backgroundImage})`}}>
  <h1 className="location" style={{color:"#8AC3E2"}}>{city}, {country}</h1>
  


    <div className="detail">

      <span><i className="fa fa-map-marker"></i></span>
      <span>{city}, {country}</span>

      <span> <Moment unix format='h:mm a'>{fdate}</Moment> </span>
      <br />

    </div>
    <ul className="options">
      <li onClick={()=> {window.location.reload()}}><i className="fa fa-cloud" aria-hidden="true" ></i>NEW CITY</li>
      <li id="social"><i className="fa fa-linkedin" ></i><a href="https://www.linkedin.com/in/atishay-srivastava-7a1140174" target="blank"> LINKEDIN </a> </li>
      <li id="social"><i className="fa fa-github" ></i> <a href="https://github.com/xAtishayx/" target="blank"> GITHUB </a></li>
    </ul>
  <a href="https://github.com/xAtishayx/Weather-App" target="blank">  <div className="latest-locations"><i className="fa fa-github" aria-hidden="true"></i><span><center>Fork Me</center></span></div> </a>
  </div>
  <div className="bottom">
    <ul>
      <li id="mainicon">
        <div className="temp-middle">
        <div className="temperature-stats"><span className="temperature" style={{color:"#66D0E6"}}>{temperature}°</span><Icon temp={temperature} des={description} req={req} height="100" width="100"/></div>
      <p className="temp-extra"><span className="day"><Moment unix format='Do dddd'>{fdate}</Moment> </span> <span>{wind_speed}mph / {wind_degree}°</span></p>
        </div>
      </li>
      <li id="icons">
        <div className="temp-middle" >
          <p className="day"><Moment unix format='dddd' add={{ days: 1}}>{fdate}</Moment> </p>
          <div className="weather"><Icon temp={temperature} des={desc2} req={req} height="50" width="50"/></div>
      <p className="temperature">{tempd2}°</p>
        </div>
      </li>
      <li id="icons">
        <div className="temp-middle" >
          <p className="day"><Moment unix format='dddd' add={{ days: 2}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={temperature} des={desc3} req={req} height="50" width="50"/></div>
          <p className="temperature">{tempd3}°</p>
        </div>
      </li>
      <li id="icons">
        <div className="temp-middle" >
          <p className="day"><Moment unix format='dddd' add={{ days: 3}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={temperature} des={desc4} req={req} height="50" width="50"/></div>
          <p className="temperature">{tempd4}°</p>
        </div>
      </li>
      <li id="icons">
        <div className="temp-middle" >
          <p className="day"><Moment unix format='dddd' add={{ days: 4}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={temperature} des={desc5} req={req} height="50" width="50"/></div>
          <p className="temperature">{tempd5}°</p>
        </div>
      </li>
      <li id="icons">
        <div className="temp-middle" >
          <p className="day"><Moment unix format='dddd' add={{ days: 5}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={temperature} des={desc6} req={req} height="50" width="50"/></div>
          <p className="temperature">{tempd6}°</p>
        </div>
      </li>
      <li id="icons">
        <div className="temp-middle" >
          <p className="day"><Moment unix format='dddd' add={{ days: 6}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={temperature} des={desc7} req={req} height="50" width="50"/> </div>
          <p className="temperature">{tempd6}°</p>
        </div>
      </li>
    </ul>
  </div>
</div> 

      
    );
  }
}
class Icon extends Component {

  render(){
    // console.log(this.props.des)
    return(
      <div>
         {(() => {
           if(this.props.req){
        if (this.props.temp < 0) {
          return (
            <img src={snow} height={this.props.height} width={this.props.width} alt = "icon" />
          )
        }
        else if (this.props.des.includes('haze') || this.props.des.includes('mist')) {
          return (
            <img src={cloud} height={this.props.height} width={this.props.width} alt = "icon" />
          )
        } 
        else if (this.props.des.includes('rain')) {
          return (
            <img src={rain} height={this.props.height} width={this.props.width} alt = "icon" />
          )
        }
        else if (this.props.des.includes('cloud')) {
          return (
            <img src={suncloud} height={this.props.height} width={this.props.width} alt = "icon" />
          )
        }
         else if(this.props.des.includes('clear')) {
          return (
            <img src={sun } height={this.props.height} width={this.props.width} alt = "icon"/>
          )
        }
        else {
          return (
            <img src={sun } height={this.props.height} width={this.props.width} alt = "icon"/>
          )
        }
      }
      })()}
        
        </div>
    )
  }
}