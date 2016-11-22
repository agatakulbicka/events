import React from 'react'
import {DropdownButton, MenuItem, Row, FormGroup, ControlLabel, FormControl, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import Place from '../place/Place'
import './home-style.css'


class Home extends React.Component {
    render() {
        return (<div>
            <Row>
                <Col md={6}>
                    <form>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Wybierz interesujące Cię miasto: </ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Gdańsk</option>
                                <option value="other">Olsztyn</option>
                                <option value="other">Wrocław</option>
                                <option value="other">Gietrzwałd</option>
                            </FormControl>
                        </FormGroup>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="mainMap">
                        <GoogleMap
                            bootstrapURLKeys={{
                                key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                language: 'pl'
                            }}
                            center={[54.3434247232928, 18.52667212486267]}
                            zoom={11}
                        >
                            <Place/>
                        </GoogleMap>
                    </div>
                </Col>
            </Row>


        </div>)
    }
}

export default Home