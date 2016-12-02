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
    render() {

        var {events}=this.props;
        return (
            <div id="mainEventCalendar">
                <Grid>
                    <Row>
                        <Col>
                            <BigCalendar
                                selectable={true}
                                events={events.map(function (event) {
                                    return {
                                        ...event,
                                        start: new Date(event.start),
                                        end: new Date(event.end)
                                    }
                                })
                                }
                                defaultDate={new Date()}
                                defaultView='month'
                                timeslots={1}
                                popup
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps)(EventCalendar)
