import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import AllahName from "./components/AllahName";
import CalendarWidget from "./components/Calendar";
import TflStatus from "./components/TflTrainStatus"
import Weather from "./components/Weather"
import Ayah from "./components/Ayah"
import "./App.css"

class App extends React.Component {

    render() {
        return (
            <div>
                <table border="2">
                    <tbody>
                        <tr>
                            <td width="25%">
                                <AllahName/>
                            </td>
                            <td width="50"/>
                            <td width="25%">
                                <Weather/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <PrayerTimes/>
                            </td>
                            <td/>
                            <td>
                                <TflStatus/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Ayah/>
                            </td>
                            <td/>
                            <td>
                                <CalendarWidget/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;
