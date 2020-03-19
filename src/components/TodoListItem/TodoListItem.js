import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({
                        content,
                        done,
                        important,
                        onDeleted,
                        onToggleImportant,
                        onToggleDone
                    }) => {

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
                style={ spStyle }
                onClick={ onToggleDone }
            >
                { content }
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleImportant }
            >
                <i className="fa fa-exclamation"></i>
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted }
            >
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
}

export default TodoListItem;
