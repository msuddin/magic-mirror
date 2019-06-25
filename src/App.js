import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import AllahName from "./components/AllahName";
import "./App.css"

class App extends React.Component {

    render() {
        return (
            <div>
                <table border="2">
                    <tr>
                        <AllahName/>
                    </tr>
                    <tr>
                        <PrayerTimes/>
                    </tr>
                </table>
            </div>
        )
    }
}

export default App;