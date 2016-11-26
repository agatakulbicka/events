import React from 'react'
import {connect} from 'react-redux'
import {Grid, Col, Panel, Row, Image} from 'react-bootstrap'
import './single-event-styles.css'


const mapStateToProps = (state) => ({
    fetchingEvent: state.eventsCitiesData.fetchingEvents,
    events: state.eventsCitiesData.events
})

class SingleEvent extends React.Component {

    render() {
        var {
            fetchingEvent,
            events
        }=this.props

        var event = events[this.props.params.singleEventId]

        return (
            <Grid>
                {fetchingEvent ? "ładuję dane" :

                    <Panel key={event.id}>
                        <Row>
                            <Col xs={12}>
                                <h1>{event.title}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} xs={12}>
                                <p>Miasto: {event.cityName}</p>
                                <p>Grupa docelowa: {event.target}</p>
                                <p>Data: {event.date}</p>
                                <p>Godzina rozpoczęcia: {event.hour}</p>
                                <p>Adres: {event.address}</p>
                                <Image className="event-img"
                                       responsive src={event.img} alt="242x200"/>
                            </Col>
                            <Col lg={8} xs={12}>
                                <p>{event.description}</p>
                            </Col>
                        </Row>

                    </Panel>
                }
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(SingleEvent)