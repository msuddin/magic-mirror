import React from "react"
import { properties } from "../properties";

class Weather extends React.Component {

    state = {
        isLoaded: false,
        models: {}
    };

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${properties.WEATHER_APP_KEY}&q=london&units=metric`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then(json => {
                this.setState({
                    models: json,
                    isLoaded: true
                });
            });
    }

    render() {
        const {
            isLoaded,
        } = this.state;

        if (!isLoaded) return <div>Loading...</div>;

        return (
            <div>
                <h1>Weather</h1>
                <p>City: {this.state.models.name}</p>
                <p>Temperature: {this.state.models.main.temp}</p>
                <p>Description: {this.state.models.weather[0].description}</p>
                <p>{this.state.models.weather[0].icon}</p>
                <img src={"http://openweathermap.org/img/wn/" + this.state.models.weather[0].icon + "@2x.png"} alt="Weather Icon"/>
            </div>
        )
    }
}

export default Weather;