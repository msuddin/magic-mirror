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
                <h1>Allah Name</h1>
                {
                    models.map(model =>
                        <div key={model}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>Name:</p>
                                        </td>
                                        <td width="25px"/>
                                        <td>
                                            <p>{model.name}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Transliteration</p>
                                        </td>
                                        <td/>
                                        <td>
                                            <p>{model.transliteration}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Meaning:</p>
                                        </td>
                                        <td/>
                                        <td>
                                            <p>{model.en.meaning}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default AllahName;