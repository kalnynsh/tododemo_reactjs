import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component
{
    render () {

        const { content, important = false } = this.props;

        const spStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span style={spStyle}
                  className="todo-list-item"
            >
                <span className="todo-list-item-label">
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
