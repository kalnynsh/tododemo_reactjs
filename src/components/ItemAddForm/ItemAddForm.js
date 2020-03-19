import React, { Component } from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component
{
    constructor() {
        super();

        this.state = {
            task: '',
        };

        this.onInputChanged = (event) => {
            this.setState({
                task: event.target.value,
            });
        };

        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onItemAdded(this.state.task);
        }
    }

    render() {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add item to list"
                    onChange={this.onInputChanged}
                />

                <button
                    type="submit"
                    className="btn btn-outline-info btn-sm float-right"
                >
                    <i className="fa fa-plus-square"></i>
                </button>
            </form>
        );
    }
}
