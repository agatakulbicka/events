import React from 'react'
import {
    FormGroup, FormControl, ControlLabel, Image
} from 'react-bootstrap'

export default class AddNewForm extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Podaj nazwę...',
            description: 'Pełny opis wydarzenia...',
            cost: 'Koszt wydarzenia...',
            start: null,
            target: 'wszyscy',
            imgSrc: '',
            file: []
        }
        this.showFile = this.showFile.bind(this);
    }

    showFile() {
        var file = this.refs.file.files[0]
        var reader = new FileReader();
        reader.readAsDataURL(file);


        reader.onloadend = function (e) {
            if(file.length == 0) {
                console.log('załaduj mniejsze zdjęcie')
            }
            else {
                this.setState({
                    imgSrc: [reader.result].size > 2000
                })
                console.log('file size', file.size)
            }

        }.bind(this);

    }


    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.state.title, this.state.description, this.state.cost,
                    this.state.start, this.state.target, this.state.imgSrc)
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

                <FormGroup controlId="formEventCategory">
                    <ControlLabel>Do kogo skierowane jest to wydarzenie</ControlLabel>
                    <FormControl componentClass="select" placeholder="select"
                                 defaultValue={this.state.target}
                                 onChange={(event) => this.setState({
                                     target: event.target.value
                                 })}
                    >
                        <option value="wszyscy">wszyscy</option>
                        <option value="kobiety">kobiety</option>
                        <option value="mezczyzni">mężczyźni</option>
                        <option value="seniorzy">seniorzy</option>
                        <option value="dzieci">dzieci</option>
                    </FormControl>
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

                <FormGroup controlId="formImg" type="file">
                    <ControlLabel>Załaduj grafikę</ControlLabel>
                    <input ref="file"
                           type="file"
                           defaultValue={this.state.file}
                           onChange={this.showFile}
                    />
                    <Image className="event-image" src={this.state.imgSrc} responsive

                    />

                </FormGroup>

                <FormGroup
                    controlId="formEventStartDate">
                    <ControlLabel>Data wydarzenithis.props.filea:</ControlLabel>
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