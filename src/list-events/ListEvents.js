import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Thumbnail, Button, Grid} from 'react-bootstrap'
import './list-events-style.css'


const mapStateToProps = (state) => ({
    events: state.eventsCitiesData.events,
    fetchingEvents: state.eventsCitiesData.fetchingEvents
})


class ListEvents extends React.Component {
    render() {
        var {
            events,
            fetchingEvents
        }=this.props;

        return (
            <Grid>
                <Row className="flexbox thumb-row">
                    {fetchingEvents ? "ładuję dane..." :
                        <div>
                            {events.map((event) => (
                                <Col xs={12} sm={6} md={4} lg={4} className="thumb-col">
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
                                            <Button bsStyle="default">Dodaj do ulubionych</Button>
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

export default connect(mapStateToProps)(ListEvents)