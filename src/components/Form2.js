import React, { Component } from "react";

export default class Form2 extends Component {
  render() {
    return (
      <div className="center-container" >
        <form onSubmit={this.props.getWeather}>
          <input
            type="city"
            className="form-control"
            id="city-input"
            placeholder="Enter City..."
          />
          <input
            type="country"
            className="form-control"
            id="exampleInputCountry1"
            placeholder="Enter Country..."
          />
          <button type="submit"  className="btn btn-primary" size="lg">
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}
