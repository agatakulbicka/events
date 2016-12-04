import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid, Col, Panel, Row, Image, Pager} from 'react-bootstrap'
import './single-event-styles.css'
import GoogleMap from 'google-map-react'
import Place from '../place/Place'


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
            <Grid className="single-event-panel">
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

                    <Panel key={event.id}
                           header={event.title}
                           bsStyle="success">
                        <Row>
                            <Col xs={12}>

                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} xs={12}>
                                <p>Miasto: <strong>{event.cityName}</strong></p>
                                <p>Grupa docelowa: <strong>{event.target}</strong></p>
                                <p>Data: <strong>{event.date}</strong></p>
                                <p>Godzina rozpoczęcia: <strong>{event.hour}</strong></p>
                                <p>Adres: <strong>{event.address}</strong></p>
                                <Image className="event-img"
                                       responsive src={event.img} alt="242x200"/>
                            </Col>
                            <Col lg={8} xs={12}>
                                <p>{event.description}</p>
                                <div className="single-event-map">

                                    <GoogleMap
                                        bootstrapURLKeys={{
                                            key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                            language: 'pl'
                                        }}
                                        center={[event.coordinates.lat, event.coordinates.lng]}
                                        zoom={11}>
                                                <Place
                                                    key={event.id}
                                                    lat={event.coordinates.lat}
                                                    lng={event.coordinates.lng}
                                                />
                                    </GoogleMap>
                                </div>
                            </Col>
                        </Row>

                    </Panel>
                }
            </Grid>
        )
    }
}


export default connect(mapStateToProps)(SingleEvent)