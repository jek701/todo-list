import React, { Component } from "react";

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render(onSubmit) {
        return (
            <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
                <input type="text" className='form-control' onChange={this.onLabelChange} value={this.state.label} placeholder="what needs to be done"/>
                <button className='btn btn-outline-secondary'>Add Item</button>
            </form>
        )
    }
}