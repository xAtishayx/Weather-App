import React, { Component } from "react";
import cloud from "../cloud.png";
import snow from "../snow.png";
import rain from "../rain.png";
import nightrain from "../nightr.png";
import moon from "../stars.png";
import suncloud from "../sunc.png";
import sun from "../sun.png";
import Moment from "react-moment";



export default class Result extends Component {
  state = {
    icons:undefined,
    date: undefined
  }


  render() {
    
    const date = new Date();
    console.log(date);
    const fdate = this.props.data.time;
    return (

        <div id="app" className="wrapper" style={this.props.data.req ? {  } : { display: "none" }}>
  <div className="top" style={{ backgroundImage: `url(${this.props.data.backgroundImage})`}}>
  <h1 className="location" style={{color:"#8AC3E2"}}>{this.props.data.city}, {this.props.data.country}</h1>
  


    <div className="detail">

      <span><i className="fa fa-map-marker"></i></span>
      <span>{this.props.data.city}, {this.props.data.country}</span>

      <span> <Moment unix format='h:mm a'>{fdate}</Moment> </span>
      

    </div>
    <ul className="options">
      <li ><i className="fa fa-cloud" aria-hidden="true"></i> WEATHER</li>
      <li ><i className="fa fa-send"></i>NEWS & EVENTS</li>
      <li ><i className="fa fa-picture-o"></i>GALLERY (30)</li>
    </ul>
  <a href="https://github.com/xAtishayx/Weather-App" target="blank">  <div className="latest-locations"><i className="fa fa-github" aria-hidden="true"></i><span><center>Fork Me</center></span></div> </a>
  </div>
  <div className="bottom">
    <ul>
      <li>
        <div className="temp-middle">
        <div className="temperature-stats"><span className="temperature" style={{color:"#66D0E6"}}>{this.props.data.temperature}°</span><Icon temp={this.props.data.temperature} des={this.props.data.description} req={this.props.data.req} height="100" width="100"/></div>
      <p className="temp-extra"><span className="day"><Moment unix format='Do dddd'>{fdate}</Moment> </span> <span>{this.props.data.wind_speed}mph / {this.props.data.wind_degree}°</span></p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day"><Moment unix format='dddd' add={{ days: 1}}>{fdate}</Moment> </p>
          <div className="weather"><Icon temp={this.props.data.temperature} des={this.props.data.desc2} req={this.props.data.req} height="50" width="50"/></div>
      <p className="temperature">{this.props.data.tempd2}°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day"><Moment unix format='dddd' add={{ days: 2}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={this.props.data.temperature} des={this.props.data.desc3} req={this.props.data.req} height="50" width="50"/></div>
          <p className="temperature">{this.props.data.tempd3}°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day"><Moment unix format='dddd' add={{ days: 3}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={this.props.data.temperature} des={this.props.data.desc4} req={this.props.data.req} height="50" width="50"/></div>
          <p className="temperature">{this.props.data.tempd4}°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day"><Moment unix format='dddd' add={{ days: 4}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={this.props.data.temperature} des={this.props.data.desc5} req={this.props.data.req} height="50" width="50"/></div>
          <p className="temperature">{this.props.data.tempd5}°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day"><Moment unix format='dddd' add={{ days: 5}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={this.props.data.temperature} des={this.props.data.desc6} req={this.props.data.req} height="50" width="50"/></div>
          <p className="temperature">{this.props.data.tempd6}°</p>
        </div>
      </li>
      <li>
        <div className="temp-middle">
          <p className="day"><Moment unix format='dddd' add={{ days: 6}}>{fdate}</Moment></p>
          <div className="weather"><Icon temp={this.props.data.temperature} des={this.props.data.desc7} req={this.props.data.req} height="50" width="50"/> </div>
          <p className="temperature">{this.props.data.tempd6}°</p>
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
    console.log(this.props.des)
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
        
        {/* {this.props.temp > 10  ? <img src={sun} heigh="50" width="50 " alt = "icon" /> :<img src={rain} heigh="50" width="50 "/>} */}
        </div>
    )
  }
}