import React from 'react'
import { Row, FormGroup, ControlLabel, FormControl, Col} from 'react-bootstrap'
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
    currentCity: state.eventsCitiesData.currentCity
})

const mapDispatchToProps = (dispatch) => ({
    showEventsInCity: (currentCity) => dispatch(showEventsInCity(currentCity))
})

class Home extends React.Component {
    render() {
        var {
            events,
            cities,
            fetchingCities,
            fetchingEvents,
            showEventsInCity,
            currentCity
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
                                                 onChange={(event =>showEventsInCity(event.target.value))}>
                                        {cities.map((city) =>
                                            <option value={city.cityName} key={city.id}>
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
                                    center={[54.3434247232928, 18.52667212486267]}
                                    zoom={11}
                                >
                                    <Place text={"A"}/>
                                </GoogleMap>
                            </div>
                        }
                    </Col>
                </Row>


            </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)