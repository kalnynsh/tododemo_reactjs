import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component
{
    constructor() {
        super();

        this.onLabelClick = () => {
            console.log(`Done: ${this.props.content}`);
        };
    }

    render() {
        const { content, important = false } = this.props;

        const spStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span
                className="todo-list-item"
            >
                <span
                    className="todo-list-item-label"
                    style={spStyle}
                    onClick={ this.onLabelClick }
                >
                    { content }
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                >
                    <i className="fa fa-exclamation"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                >
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        );
    }
}
