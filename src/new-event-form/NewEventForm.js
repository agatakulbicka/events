import React from 'react'
import {
    Grid, Row, Col,
    FormGroup, FormControl,
    HelpBlock, ControlLabel, Radio,
    Collapse, Image, Button
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {
    showFieldToInsertPayment,
    hideFieldToInsertPayment,
    showFile,
    getCoordinatesOnClick
} from './actionCreators'
import  {showEventsInCity} from '../home/actionCreators'
import './new-event-form.css'
import GoogleMap from 'google-map-react'

import Place from '../place/Place'

const mapStateToProps = (state) => ({
    isPaymentLabelOpened: state.addNewEvents.isPaymentLabelOpened,
    imgSource: state.addNewEvents.imgSource,
    currentLocalisation: state.eventsCitiesData.currentLocalisation,
    place: state.addNewEvents.place,
    isPlaceMarked: state.addNewEvents.isPlaceMarked,
    cities: state.eventsCitiesData.cities,
    currentGeoLocalisation: state.eventsCitiesData.currentGeoLocalisation

})

const mapDispatchToProps = (dispatch) => ({
    showFieldToInsertPayment: () => dispatch(showFieldToInsertPayment()),
    hideFieldToInsertPayment: () => dispatch(hideFieldToInsertPayment()),
    showFile: (file) => dispatch(showFile(file)),
    getCoordinatesOnClick: (place) => dispatch(getCoordinatesOnClick(place)),
    showEventsInCity: (currentCity, cityLat, cityLng) => dispatch(showEventsInCity(currentCity, cityLat, cityLng))
})


class NewEventForm extends React.Component {

    render() {
        var {
            isPaymentLabelOpened,
            showFieldToInsertPayment,
            hideFieldToInsertPayment,
            showFile,
            imgSource,
            currentLocalisation,
            getCoordinatesOnClick,
            place,
            isPlaceMarked,
            cities,
            currentGeoLocalisation,
            showEventsInCity
        }=this.props;

        return (
            <div id="addNewEventForm">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <form>
                                <FormGroup
                                    controlId="formEventTitle">
                                    <ControlLabel>Nazwa wydarzenia:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Wprowadź tytuł wydarzenia"
                                    />
                                    <FormControl.Feedback />
                                    <HelpBlock>Validation is based on string length.</HelpBlock>
                                </FormGroup>

                                <FormGroup controlId="formEventCategory">
                                    <ControlLabel>Do kogo skierowane jest to wydarzenie</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="wszyscy">wszyscy</option>
                                        <option value="kobiety">kobiety</option>
                                        <option value="mezczyzni">mężczyźni</option>
                                        <option value="seniorzy">seniorzy</option>
                                        <option value="dzieci">dzieci</option>
                                    </FormControl>
                                </FormGroup>

                                <FormGroup controlId="formEventCityName">
                                    <ControlLabel>Wybierz miasto:</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="olsztyn">Olsztyn</option>
                                        <option value="gdansk">Gdańsk</option>
                                        <option value="wrocław">Wrocław</option>
                                        <option value="poznan">Poznań</option>
                                        <option value="gdynia">Gdynia</option>
                                    </FormControl>
                                </FormGroup>

                                <FormGroup controlId="formEventEventCoordinates">
                                    <ControlLabel>Zaznacz na mapie miejsce, w którym odbędzie się
                                        wydarzenie:</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select"
                                                 onChange={(event) => showEventsInCity(event.target.value,
                                                     event.target.options[event.target.selectedIndex].dataset.lat,
                                                     event.target.options[event.target.selectedIndex].dataset.lng)}>
                                        <option value="Twoja obecna lokalizacja"
                                                data-lat={currentGeoLocalisation.cityLat}
                                                data-lng={currentGeoLocalisation.cityLng}>
                                            Twoja obecna lokalizacja
                                        </option>
                                        {cities.map((city) =>
                                            <option value={city.cityName} key={city.id}
                                                    data-lat={city.coordinates.lat}
                                                    data-lng={city.coordinates.lng}>
                                                {city.cityName}
                                            </option>
                                        )}
                                    </FormControl>
                                    <div className="addNewEventMap">
                                        <GoogleMap
                                            bootstrapURLKeys={{
                                                key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                                language: 'pl'
                                            }}
                                            onClick={(place) => getCoordinatesOnClick(place)}
                                            center={[parseFloat(currentLocalisation.cityLat), parseFloat(currentLocalisation.cityLng)]}
                                            zoom={12}>
                                            {console.log('aktualne miasto do wświetlenia:', currentLocalisation.currentCity, 'wspolrzedne', currentGeoLocalisation.cityLng, currentGeoLocalisation.cityLat)}
                                            {isPlaceMarked ?
                                                <Place
                                                    lat={place.lat}
                                                    lng={place.lng}
                                                />
                                                : null}

                                        </GoogleMap>
                                    </div>
                                </FormGroup>

                                <FormGroup controlId="formAddress">
                                    <ControlLabel>Adres, pod którym odbędzie się wydarzenie:</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="textarea"/>
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Czy wydarzenie jest płatne?</ControlLabel>

                                    <div>
                                        <Radio inline
                                               name="ifEventIsFree"
                                               onClick={ (boxContent)=> hideFieldToInsertPayment(boxContent)}>
                                            Nie
                                        </Radio>
                                        {' '}
                                        <Radio inline
                                               name="ifEventIsFree"
                                               onClick={ ()=> showFieldToInsertPayment()}>
                                            Tak
                                        </Radio>
                                        <Collapse in={isPaymentLabelOpened}>
                                            <div>
                                                <FormControl
                                                    type="text"
                                                    placeholder="Koszt wydarzenia"
                                                    value={isPaymentLabelOpened ? this.value : ''}
                                                />
                                                <ControlLabel>Link do biletów (opcjonalnie)</ControlLabel>
                                                <input type="url"/>
                                                <FormControl.Feedback />
                                            </div>
                                        </Collapse>
                                    </div>
                                </FormGroup>

                                <FormGroup controlId="formImg" type="file">
                                    <ControlLabel>Załaduj grafikę</ControlLabel>
                                    <input type="file"
                                           onChange={(event) => showFile(event.target.files[0])}
                                    />
                                    <Image className="event-image" src={imgSource} responsive/>
                                </FormGroup>

                                <FormGroup controlId="formShortDescription">
                                    <ControlLabel>Skrócony opis wydarzenia</ControlLabel>
                                    <FormControl componentClass="textarea"
                                                 placeholder="Kilka zdań na temat wydarzenia"/>
                                </FormGroup>

                                <FormGroup controlId="formFullDescription">
                                    <ControlLabel>Pełny opis wydarzenia</ControlLabel>
                                    <FormControl componentClass="textarea"
                                                 placeholder="W tym miejscu możesz opisać całe wydarzenie"/>
                                </FormGroup>

                                <FormGroup controlId="formFullDescription">
                                    <ControlLabel>Data wydarzenia</ControlLabel>
                                    <p><input type="date"/></p>
                                </FormGroup>

                                <FormGroup controlId="formFullDescription">
                                    <ControlLabel>Godzina ropoczęcia</ControlLabel>
                                    <p><input type="time"/></p>
                                </FormGroup>

                                <FormGroup controlId="formFullDescription">
                                    <ControlLabel>Godzina zakończenia (opcjonalnie)</ControlLabel>
                                    <p><input type="time"/></p>
                                </FormGroup>

                                <FormGroup controlId="formFullDescription">
                                    <ControlLabel>Link do strony wydarzenia</ControlLabel>
                                    <p><input type="url"/></p>
                                </FormGroup>
                                <Button type="submit"
                                        bsStyle="success">
                                    Submit
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);