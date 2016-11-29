import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
BigCalendar.momentLocalizer(moment);
import {Grid, Row, Col} from 'react-bootstrap'
import './events-calendar-styles.css'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    events: state.eventsCitiesData.events
})


class EventCalendar extends React.Component {
    render(){

        var {events}=this.props;
        return (
            <div id="mainEventCalendar">
                <Grid>
                    <Row>
                        <Col>
                            <BigCalendar
                                events={events.map((event) => event)}
                                defaultDate={new Date()}
                                defaultView='month'
                                popup
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default connect (mapStateToProps)(EventCalendar)
