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
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>Fajr:</p>
                            </td>
                            <td width="25px"/>
                            <td>
                                <p>{models.timings.Fajr}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Dhuhr:</p>
                            </td>
                            <td/>
                            <td>
                                <p>{models.timings.Dhuhr}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Asr:</p>
                            </td>
                            <td/>
                            <td>
                                <p>{models.timings.Asr}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Maghrib:</p>
                            </td>
                            <td/>
                            <td>
                                <p>{models.timings.Maghrib}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Isha:</p>
                            </td>
                            <td/>
                            <td>
                                <p>{models.timings.Isha}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PrayerTimes;