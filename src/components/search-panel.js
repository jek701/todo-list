import React, { Component } from "react";

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input type="text" className="input" placeholder='Поиск' value={this.state.term} onChange={this.onSearchChange}/>
        )
    }
}