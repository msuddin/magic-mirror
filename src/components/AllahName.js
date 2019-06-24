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
                {
                    models.map(model =>
                        <div key={model}>
                            <p>Allah Name for the Day is: {model.name}</p>
                            <p>This sounds like: {model.transliteration}</p>
                            <p>It means: {model.en.meaning}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default AllahName;