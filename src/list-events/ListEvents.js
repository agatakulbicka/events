import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Thumbnail, Button, Grid, Glyphicon, ButtonGroup} from 'react-bootstrap'
import './list-events-style.css'
import {addEventToFavourites, deleteEventFromFavourites, activateFilter} from './actionCreators'
import filters from './filters'
import {LinkContainer} from 'react-router-bootstrap'


const mapStateToProps = (state) => ({
    events: state.eventsCitiesData.events,
    fetchingEvents: state.eventsCitiesData.fetchingEvents,
    favouritesEventsIds: state.favouritesEvents.favouritesEventsIds,
    availableFilters: state.favouritesEvents.availableFilters,
    activeFilter: {
        filterName: state.favouritesEvents.activeFilterName,
        predicate: filters[state.favouritesEvents.activeFilterName].predicate
    }
})

const mapDispatchToProps = (dispatch) => ({
    addEventToFavourites: (eventId) => dispatch(addEventToFavourites(eventId)),
    deleteEventFromFavourites: (eventId) => dispatch(deleteEventFromFavourites(eventId)),
    activateFilter: (filterName) => dispatch(activateFilter(filterName))
})

class ListEvents extends React.Component {
    render() {
        var {
            events,
            fetchingEvents,
            favouritesEventsIds,
            addEventToFavourites,
            deleteEventFromFavourites,
            availableFilters,
            activeFilter,
            activateFilter
        }=this.props;

        let selectedEvents = events.filter(activeFilter.predicate);
        return (
            <Grid>
                <Row>
                    <ButtonGroup>
                        {availableFilters.map((currentFilterName) => (
                                <Button bsStyle="success"
                                        key={currentFilterName}
                                        onClick={() => activateFilter(currentFilterName)}
                                        className={currentFilterName === activeFilter.filterName ? 'active' : ''}
                                >
                                    {filters[currentFilterName].label}
                                </Button>
                            )
                        )}
                    </ButtonGroup>
                </Row>
                <Row className="flexbox thumb-row">
                    {fetchingEvents ? "ładuję dane..." :
                        <div>
                            {selectedEvents.length === 0 ?
                                <h1>Brak wydarzeń w podanej kategorii</h1>
                                :
                                selectedEvents
                                    .map((event) => (
                                        <Col xs={12} sm={6} md={4} lg={4} className="thumb-col"
                                             key={event.id}>
                                            <Thumbnail
                                                src={event.imgSrc}
                                                key={event.id}>
                                                <h3>{event.eventName}</h3>
                                                <p>{event.target}</p>
                                                <p>{event.cityName}</p>
                                                <p>{event.eventDate}</p>
                                                <p>{event.shortDescription}</p>
                                                <p>
                                                    <LinkContainer to={`/list-events/${event.id}`}>
                                                        <Button bsStyle="success">Czytaj więcej</Button>
                                                    </LinkContainer>
                                                    &nbsp;
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
                                        </Col>
                                    ))}
                        </div>
                    }
                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEvents)