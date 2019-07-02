import React from "react"

class Ayah extends React.Component {

    state = {
        isLoaded: false,
        models: []
    };

    componentDidMount() {
        fetch(`http://localhost:8081/ayah/${Math.floor(Math.random() * 6237)}`)
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
                <h1>Ayah</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>{models.text}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>{models.surah.number}({models.surah.englishName}):{models.numberInSurah}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ayah;