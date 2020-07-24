import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="bg" >
        
      <div className="form-container" style={this.props.data.req ? { marginTop:"-42vh" } : { backgroundImage:"linear-gradient( 150deg, rgba(22, 22, 24, 0.801) 25%, #221318c9 70%, #2c1010d8 84% )"}} >
     
        <form onSubmit={this.props.getWeather}>
          <input
            type="text"
            className="location"
            id="city-input"
            placeholder="ENTER  CITY"
          />
          <input
            type="text"
            className="location"
            id="exampleInputCountry1"
            placeholder="ENTER COUNTRY"
          />
          <button type="submit" className="btn btn-outline-info">
            GET WEATHER
          </button>
        </form>
      </div>
      </div>
    );
  }
}
