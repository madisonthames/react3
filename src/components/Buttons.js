import React, {Component} from 'react'
import NewForm from './NewForm'

export default class Buttons extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div className='buttonsRow'>
            <button className='buttons' onClick={() => this.props.actionPrevious()}>{"<"} Previous</button>
                <div>
                    <button className='middleButtons'>Edit</button>
                    <button className='middleButtons' onClick={() => this.props.actionDelete()}>Delete</button>
                    <button className='middleButtons' onClick={() => this.props.actionNew()}>New</button>
                </div>
            <button className='buttons' onClick={() => this.props.actionNext()}>Next ></button>
        </div> 
        )
    }
}