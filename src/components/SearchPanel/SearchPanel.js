import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component
{
    state = {
        term: ''
    };

    onTermChanged = (event) => {
        const { onSearchChanged = () => {} } = this.props;

        this.setState({
            term: event.target.value,
        });

        onSearchChanged(this.state.term);
    };

    render() {
        return (
            <input
                type="text"
                placeholder='Search text'
                className="form-control search-panel-input"
                onChange={this.onTermChanged}
                value={this.state.term}
            />
        );
    }
}
