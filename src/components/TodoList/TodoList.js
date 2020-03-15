import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {

    const elements = todos.map(({id, content, important}) => {

        return (
            <li key={id}>
                <TodoListItem
                    content={content}
                    important={important}
                />
            </li>
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;
