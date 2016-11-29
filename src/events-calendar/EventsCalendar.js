import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
BigCalendar.momentLocalizer(moment);
import events from './events'
import {Grid, Row, Col} from 'react-bootstrap'
import './events-calendar-styles.css'


export default (props) =>
    <div id="mainEventCalendar">
        <Grid>
            <Row>
                <Col>
                    <BigCalendar
                        //    {...this.props}
                        events={events}
                        defaultDate={new Date()}
                        defaultView='month'
                        popup
                    />
                </Col>
            </Row>
        </Grid>
    </div>