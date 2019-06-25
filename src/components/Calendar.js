import React from "react"
import Calendar from 'react-calendar'

class CalendarWidget extends React.Component {

    state = {
        date: new Date()
    };

    onChange = date => this.setState({ date });

    render() {
        return (
            <div>
                <table border="2">
                    <tr>
                        <h1>Calendar</h1>
                    </tr>
                    <tr>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </tr>
                </table>
            </div>
        )
    }
}

export default CalendarWidget;