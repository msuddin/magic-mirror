import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import AllahName from "./components/AllahName";

class App extends React.Component {

    render() {
        return (
            <div>
                <AllahName/>
                <PrayerTimes/>
            </div>
        )
    }
}

export default App;