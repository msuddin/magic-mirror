import React from "react"

class Ayah extends React.Component {

    state = {
        isLoaded: false,
        models: []
    };

    componentDidMount() {
        fetch(`http://localhost:8081/ayah/10/20`)
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
                <p>{models.text}</p>
                <p>{models.surah.number}({models.surah.englishName}):{models.numberInSurah}</p>
                <p></p>
            </div>
        )
    }
}

export default Ayah;