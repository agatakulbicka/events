import React from 'react'
import {
    Grid, Row, Col,
    FormGroup, FormControl,
    HelpBlock, ControlLabel, Radio,
    Collapse, Image
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {
    showFieldToInsertPayment,
    hideFieldToInsertPayment,
    showFile
} from './actionCreators'
import './new-event-form.css'

const mapStateToProps = (state) => ({
    isPaymentLabelOpened: state.addNewEvents.isPaymentLabelOpened,
    imgSource: state.addNewEvents.imgSource
})

const mapDispatchToProps = (dispatch) => ({
    showFieldToInsertPayment: () => dispatch(showFieldToInsertPayment()),
    hideFieldToInsertPayment: () => dispatch(hideFieldToInsertPayment()),
    showFile: (file) => dispatch(showFile(file))
})


class NewEventForm extends React.Component {

    render() {
        var {
            isPaymentLabelOpened,
            showFieldToInsertPayment,
            hideFieldToInsertPayment,
            showFile,
            imgSource
        }=this.props;

        return (
            <div>
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

                                <input type="date"/>
                                <input type="time"/>
                                <input type="url"/>

                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);