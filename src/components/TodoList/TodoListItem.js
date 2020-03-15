import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ content, important = false }) => {
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
};

export default TodoListItem;
