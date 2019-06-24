import React from "react"

class AllahName extends React.Component {

    state = {
        isLoaded: false,
        models: []
    };

    componentDidMount() {
        fetch(`http://localhost:8081/allah-name/${Math.floor(Math.random() * 100)}`)
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
                        <h1>Allah Name</h1>
                    </tr>
                    <tr>
                        {
                            models.map(model =>
                                <table border="2" key={model}>
                                    <tr>
                                        <td>Name</td>
                                        <td>{model.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Transliteration</td>
                                        <td>{model.transliteration}</td>
                                    </tr>
                                    <tr>
                                        <td>Meaning</td>
                                        <td>{model.en.meaning}</td>
                                    </tr>
                                </table>
                            )
                        }
                    </tr>
                </table>
            </div>
        )
    }
}

export default AllahName;