import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import AllahName from "./components/AllahName";
import CalendarWidget from "./components/Calendar";
import "./App.css"

class App extends React.Component {

    render() {
        return (
            <div>
                <table border="2">
                    <tr>
                        <td>
                            <AllahName/>

                        </td>
                        <td>
                            <PrayerTimes/>
                        </td>
                    </tr>
                    <tr>
                        <CalendarWidget/>
                    </tr>
                </table>
            </div>
        )
    }
}

export default App;
