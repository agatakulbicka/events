import React from 'react'
import {
    FormGroup, FormControl, ControlLabel
} from 'react-bootstrap'

export default class AddNewForm extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Enter title...',
            description: 'Enter description',
            cost: 'Enter cost',
            start: null
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.state.title, this.state.description, this.state.cost, this.state.start)
            }}>
                <FormGroup
                    controlId="formEventTitle">
                    <ControlLabel>Nazwa wydarzenia:</ControlLabel>
                    <FormControl
                        type="text"
                        defaultValue={this.state.title}
                        onChange={(event) => this.setState({
                            title: event.target.value
                        })}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                    controlId="formEventDescription">
                    <ControlLabel>Opis wydarzenia:</ControlLabel>
                    <FormControl
                        type="text"
                        defaultValue={this.state.description}
                        onChange={(event) => this.setState({
                            description: event.target.value
                        })}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                    controlId="formEventCost">
                    <ControlLabel>Nazwa wydarzenia:</ControlLabel>
                    <FormControl
                        type="text"
                        defaultValue={this.state.cost}
                        onChange={(event) => this.setState({
                            cost: event.target.value
                        })}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                    controlId="formEventStartDate">
                    <ControlLabel>Data wydarzenia:</ControlLabel>
                    <FormControl
                        type="date"
                        defaultValue={this.state.start}
                        onChange={(event) => this.setState({
                            start: event.target.value
                        })}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <button>Dodaj wydarzenie</button>
            </form>
        )
    }
}