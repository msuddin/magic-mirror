import React from "react"

class PrayerTimes extends React.Component {

    state = {
        isLoaded: false,
        models: {}
    };

    componentDidMount() {
        const date = new Date();
        fetch(`http://localhost:8081/daily-prayer-time/${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`)
            .then(res => {
                if (res.ok) {
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
                <h1>Prayers</h1>
                <p>Fajr: {models.timings.Fajr}</p>
                <p>Dhuhr: {models.timings.Dhuhr}</p>
                <p>Asr: {models.timings.Asr}</p>
                <p>Maghrib: {models.timings.Maghrib}</p>
                <p>Isha: {models.timings.Isha}</p>
            </div>
        )
    }
}

export default PrayerTimes;