import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid, Col, Panel, Row, Image, Pager, Alert} from 'react-bootstrap'
import './single-event-styles.css'
import GoogleMap from 'google-map-react'
import Place from '../place/Place'
import {Link} from 'react-router'


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


        // We get an array with objects. After filtering we get one element array with our selected element (object). To get data from this object, we need
        //selected that we want the very first element of our single-element event array [0]
        var eventOneObjectArray = events
            .filter(currentEvent => currentEvent.id === parseInt(this.props.params.singleEventId, 10));
        var event = eventOneObjectArray[0];

        var eventIndex = events.indexOf(event);
        var previousEventId = null;
        var nextEventId = null;
        if (eventIndex > 0) previousEventId = events[eventIndex - 1].id;
        if (eventIndex < events.length - 1) nextEventId = events[eventIndex + 1].id;


        return (
            <Grid className="single-event-panel">
                {eventOneObjectArray.length === 0 ? <Alert bsStyle="danger">Niestety nie ma wydarzenia o podanym id.
                        <Link to={`/list-events`}>
                            <div>
                                <h3>Przejdź do strony wydarzeń.</h3>
                            </div>
                        </Link>
                    </Alert> :
                    <div>
                        <Row>
                            <Col xs={12}>
                                <Pager>
                                    {previousEventId != null ?
                                        <LinkContainer to={`/list-events/${previousEventId}`}>
                                            <Pager.Item>&larr; Poprzednie</Pager.Item>
                                        </LinkContainer> :
                                        <Pager.Item href="/" disabled>Brak wcześniejszych</Pager.Item>}

                                    {' '}
                                    {nextEventId != null ?
                                        <LinkContainer to={`/list-events/${nextEventId}`}>
                                            <Pager.Item>Kolejne &rarr;</Pager.Item>
                                        </LinkContainer> :
                                        <Pager.Item href="/" disabled>Brak następnych</Pager.Item>}
                                </Pager>
                            </Col>
                        </Row>
                        {fetchingEvent ? "ładuję dane" :

                            <Panel key={event.id}
                                   header={event.eventName}
                                   bsStyle="success">
                                <Row>
                                    <Col xs={12}>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} xs={12}>
                                        <p>Miasto: <strong>{event.cityName}</strong></p>
                                        <p>Grupa docelowa: <strong>{event.target}</strong></p>
                                        <p>Data: <strong>{event.eventDate}</strong></p>
                                        <p>Godzina rozpoczęcia: <strong>{event.hour}</strong></p>
                                        <p>Adres: <strong>{event.address}</strong></p>
                                        <Image className="event-img"
                                               responsive src={event.imgSrc} alt="242x200"/>
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
                    </div>
                }
            </Grid>
        )
    }
}


export default connect(mapStateToProps)(SingleEvent)