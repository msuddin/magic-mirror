import React from "react"

class TflTrainStatus extends React.Component {

    state = {
        isLoaded: false,
        models: []
    };

    componentDidMount() {
        fetch(`https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status?app_id=ef79ed93&app_key=3808a1306143fa8d0979709dccc1de7d`)
            .then(res => {
                if (res.ok) {
                    console.log("Printing Results");
                    console.log(res);
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then(json => {
                this.setState({
                    models: json.data,
                    isLoaded: true
                });
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
                <p>Name</p>
                <p>{models}</p>
            </div>
        )
    }
}

export default TflTrainStatus;