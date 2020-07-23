import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="bg" >
      <div className="form-container" style={this.props.data.req ? { marginTop:"4vh" } : { backgroundImage:"linear-gradient( 150deg, rgba(22, 22, 24, 0.801) 25%, #221318c9 70%, #2c1010d8 84% )"}} >
        <form onSubmit={this.props.getWeather}>
          <input
            type="text"
            className="location"
            id="city-input"
            placeholder="Enter City..."
          />
          <input
            type="text"
            className="location"
            id="exampleInputCountry1"
            placeholder="Enter Country..."
          />
          <button type="submit" className="btn btn-outline-info">
            Get Weather
          </button>
        </form>
      </div>
      </div>
    );
  }
}
