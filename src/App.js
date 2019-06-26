import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import AllahName from "./components/AllahName";
import CalendarWidget from "./components/Calendar";
import TflStatus from "./components/TflTrainStatus"
import "./App.css"

class App extends React.Component {

    render() {
        return (
            <div>
                <table border="2">
                    <tbody>
                        <tr>
                            <td>
                                <AllahName/>
                            </td>
                            <td>
                                <PrayerTimes/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CalendarWidget/>
                            </td>
                            <td>
                                <TflStatus/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;
