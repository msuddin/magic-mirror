import React from "react"
import Calendar from 'react-calendar'

class CalendarWidget extends React.Component {

    state = {
        date: new Date()
    };

    onChange = date => this.setState({ date });

    render() {
        return (
            <div className="calendar-widget">
                <h1>Calendar</h1>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }
}

export default CalendarWidget;