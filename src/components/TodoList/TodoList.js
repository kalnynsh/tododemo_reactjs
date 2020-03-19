import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = ({ todos, onDelete }) => {

    const elements = todos.map(({id, content, important}) => {

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    content={content}
                    important={important}
                    onDelete={() => onDelete(id)}
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
