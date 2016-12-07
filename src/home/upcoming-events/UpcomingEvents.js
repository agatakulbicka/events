import React from 'react'
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const mapStateToProps = (state) => ({
    events: state.eventsCitiesData.events,
    fetchingEvents: state.eventsCitiesData.fetchingEvents
})


class UpcomingEvents extends React.Component {
    render() {

        var {
            events,
            fetchingEvents
        }=this.props;
        return (
            <Panel collapsible defaultExpanded
                   header="Najbliższe wydarzenia (kliknij by zwinąć panel)"
                   bsStyle="success">
                {fetchingEvents ? "Ładowanie danycj..." :
                    <ListGroup fill>
                        {events.sort(function (a, b) {
                            var keyA = new Date(a.start),
                                keyB = new Date(b.start);
                            // Compare the 2 dates
                            if (keyA < keyB) return -1;
                            if (keyA > keyB) return 1;
                            return 0;
                        })
                            .filter(function (event) {
                                return new Date(event.start) >= new Date();
                            })
                            .filter(function (event, index) {
                                return index < 3;
                            })
                            .map(event =>
                                <ListGroupItem key={event.id}>
                                    <Link to={`/list-events/${event.id}`}>
                                        <div>
                                            <h3>{event.title}</h3>
                                            <p>{event.start.slice(0, 10)}</p>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                            )
                        }
                    </ListGroup>
                }
            </Panel>
        )
    }
}

export default connect(mapStateToProps)(UpcomingEvents)