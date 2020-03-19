import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component
{
    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        };

        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done,
                };
            });
        };

        this.onImportantClick = () => {
            this.setState(({important}) => {
                return {
                    important: !important,
                };
            });
        };
    }

    render() {
        const { content, onDelete } = this.props;
        const { done, important } = this.state;

        const spStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span
                className={classNames}
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
                    onClick={ this.onImportantClick }
                >
                    <i className="fa fa-exclamation"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDelete}
                >
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        );
    }
}
