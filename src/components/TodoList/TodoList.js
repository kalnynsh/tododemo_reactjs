import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = ({
    todos,
    onDeleted,
    onToggleImportant,
    onToggleDone
}) => {

    const elements = todos.map(({id, content, done, important}) => {

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    content={content}
                    done={done}
                    important={important}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
