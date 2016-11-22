import React from 'react'
import {Row, FormGroup, ControlLabel, FormControl, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import Place from '../place/Place'
import './home-style.css'
import {connect} from 'react-redux'
import {showEventsInCity} from './actionCreators'

const mapStateToProps = (state) => ({
    events: state.eventsCitiesData.events,
    cities: state.eventsCitiesData.cities,
    fetchingCities: state.eventsCitiesData.fetchingCities,
    fetchingEvents: state.eventsCitiesData.fetchingEvents,
    currentCity: state.eventsCitiesData.currentCity,
    cityLat: state.eventsCitiesData.cityLat,
    cityLng: state.eventsCitiesData.cityLng
})

const mapDispatchToProps = (dispatch) => ({
    showEventsInCity: (currentCity, cityLat,cityLng) => dispatch(showEventsInCity(currentCity, cityLat, cityLng))
})

class Home extends React.Component {
    render() {
        var {
            events,
            cities,
            fetchingCities,
            fetchingEvents,
            showEventsInCity,
            currentCity,
            cityLat,
            cityLng
        }=this.props
        console.log(this.props.currentCity, 'miasto');
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <form>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Wybierz interesujące Cię miasto: </ControlLabel>
                                {fetchingCities ? 'Proszę czekać, trwa ładowanie danych' :
                                    <FormControl componentClass="select" placeholder="select"
                                                 data-lat="test"
                                                 onChange={(event) =>showEventsInCity(event.target.value,
                                                     event.target.options[event.target.selectedIndex].dataset.lat,
                                                     event.target.options[event.target.selectedIndex].dataset.lng)}>
                                        {cities.map((city) =>
                                            <option value={city.cityName} key={city.id}
                                                    data-lat={city.coordinates.lat} data-lng={city.coordinates.lng}>
                                                {city.cityName}
                                            </option>
                                        )}
                                    </FormControl>
                                }
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {fetchingEvents ? "Ładuję dane mapy, proszę czekać..." :
                            <div className="mainMap">

                                <GoogleMap
                                    bootstrapURLKeys={{
                                        key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                        language: 'pl'
                                    }}
                                    center={[parseFloat(cityLat), parseFloat(cityLng)]}
                                    zoom={11}>

                                    {events.filter((singleEvent)=> singleEvent.cityName === currentCity)
                                        .map((singleEvent) =>
                                            <Place text={"A"}
                                                   className="mapPointer"
                                                   key={singleEvent.id}
                                                   lat={singleEvent.coordinates.lat}
                                                   lng={singleEvent.coordinates.lng}
                                            />)}
                                </GoogleMap>
                            </div>
                        }
                    </Col>
                </Row>


            </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)