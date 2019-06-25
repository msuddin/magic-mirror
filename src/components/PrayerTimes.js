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
                <table border="2">
                    <tr>
                        <h1>Prayers</h1>
                    </tr>
                    <tr>
                        <table border="2">
                            <tr>
                                <td>Fajr</td>
                                <td>{models.timings.Fajr}</td>
                            </tr>
                            <tr>
                                <td>Dhuhr</td>
                                <td>{models.timings.Dhuhr}</td>
                            </tr>
                            <tr>
                                <td>Asr</td>
                                <td>{models.timings.Asr}</td>
                            </tr>
                            <tr>
                                <td>Maghrib</td>
                                <td>{models.timings.Maghrib}</td>
                            </tr>
                            <tr>
                                <td>Isha</td>
                                <td>{models.timings.Isha}</td>
                            </tr>
                        </table>
                    </tr>
                </table>
            </div>
        )
    }
}

export default PrayerTimes;