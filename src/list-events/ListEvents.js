import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Thumbnail, Button, Grid, Glyphicon} from 'react-bootstrap'
import './list-events-style.css'
import {addEventToFavourites, deleteEventFromFavourites} from './actionCreators'


const mapStateToProps = (state) => ({
    events: state.eventsCitiesData.events,
    fetchingEvents: state.eventsCitiesData.fetchingEvents,
    favouritesEventsIds: state.favouritesEvents.favouritesEventsIds
})

const mapDispatchToProps = (dispatch) => ({
    addEventToFavourites: (eventId) => dispatch(addEventToFavourites(eventId)),
    deleteEventFromFavourites: (eventId) => dispatch(deleteEventFromFavourites(eventId))
})


class ListEvents extends React.Component {
    render() {
        var {
            events,
            fetchingEvents,
            favouritesEventsIds,
            addEventToFavourites,
            deleteEventFromFavourites

        }=this.props;

        return (
            <Grid>
                <Row className="flexbox thumb-row">
                    {fetchingEvents ? "ładuję dane..." :
                        <div>
                            {events.map((event) => (
                                <Col xs={12} sm={6} md={4} lg={4} className="thumb-col"
                                     key={event.id}>
                                    <Thumbnail
                                        src={event.img} alt="242x200"
                                        key={event.id}>
                                        <h3>{event.title}</h3>
                                        <p>{event.category}</p>
                                        <p>{event.cityName}</p>
                                        <p>{event.date}</p>
                                        <p>{event.description}</p>
                                        <p>
                                            <Button bsStyle="primary">Czytaj więcej</Button>&nbsp;
                                            {favouritesEventsIds.indexOf(event.id) > -1 ?
                                                <Button key={event.id}
                                                        onClick={() => deleteEventFromFavourites(event.id)}
                                                        bsStyle="default">
                                                    <Glyphicon glyph="minus"/>
                                                </Button>
                                                :
                                                <Button key={event.id}
                                                        onClick={() => addEventToFavourites(event.id)}
                                                        bsStyle="default">
                                                    <Glyphicon glyph="heart"/>
                                                </Button>
                                            }
                                        </p>
                                    </Thumbnail>
                                </Col>   ))}
                        </div>
                    }
                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEvents)