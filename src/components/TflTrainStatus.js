import React from "react"
import { properties } from "../properties";

class TflTrainStatus extends React.Component {

    state = {
        isLoaded: false,
        models: null
    };

    componentDidMount() {
        fetch(`https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status?app_id=${properties.APP_ID}&app_key=${properties.APP_KEY}`)
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
            models
        } = this.state;

        if (!isLoaded) return <div>Loading...</div>;

        return (
            <div>
                <h1>TFL Train Status</h1>
                {
                    models.map(models =>
                        <p key={models.name}>Name: {models.name}, Status: {models.lineStatuses[0].statusSeverityDescription}</p>
                    )
                }
            </div>
        )
    }
}

export default TflTrainStatus;