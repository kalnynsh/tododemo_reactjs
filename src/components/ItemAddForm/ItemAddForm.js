import React, { Component } from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component
{
    constructor() {
        super();

        this.state = {
            visible: true,
        };

        this.changeVisibility = () => {
            this.setState(({visible}) => {
                return {
                    visible: !visible,
                }
            });
        };
    }

    render() {
        const { onItemAdded } = this.props;
        const {visible} = this.state;
        const newContent = 'Learn AJAX';

        const spStyle = {
            color: 'black',
            fontWeight: 'normal',
        };

        let classNames = 'todo-list-add-item';

        if (!visible) {
            classNames += ' hidden';
        }

        return (
            <div className="item-add-form">
                <span
                    className={classNames}
                >
                    <span
                        className="todo-list-add-item-label"
                        style={spStyle}
                    >
                        { newContent }
                    </span>

                    <button
                        type="button"
                        className="btn btn-outline-info btn-sm float-right"
                        onClick={() => onItemAdded(newContent)}
                        onChange={this.changeVisibility}
                    >
                        <i className="fa fa-plus-square"></i>
                    </button>
                </span>
            </div>
        );
    }
}
