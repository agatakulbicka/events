import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid, Col, Panel, Row, Image, Pager} from 'react-bootstrap'
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
                <Row>
                    <Col xs={12}>
                        <Pager>
                            {event.id > 0 ?
                                <LinkContainer to={`/list-events/${event.id - 1}`}>
                                    <Pager.Item>&larr; Poprzednie</Pager.Item>
                                </LinkContainer> :
                                <Pager.Item href="/" disabled>Brak wcześniejszych</Pager.Item>}

                            {' '}
                            {event.id < events.length - 1 ?
                                <LinkContainer to={`/list-events/${event.id + 1}`}>
                                    <Pager.Item>Kolejne &rarr;</Pager.Item>
                                </LinkContainer> :
                                <Pager.Item href="/" disabled>Brak następnych</Pager.Item>}

                        </Pager>
                    </Col>
                </Row>
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