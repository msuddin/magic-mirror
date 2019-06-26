import React from "react"

class TflTrainStatus extends React.Component {

    state = {
        isLoaded: false,
        models: null
    };

    componentDidMount() {
        fetch(`https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then(json => {
                console.log("Printing Json");
                console.log(json);
                this.setState({
                    models: json,
                    isLoaded: true
                });
                console.log("Printing this.state.models");
                console.log(this.state.models)
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