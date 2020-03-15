import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const items = [
        'Make breakfast',
        'Learn React',
        'Learn DDD',
        'Learn Symfony',
    ];

    return (
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem  /></li>
        </ul>
    );
};

export default TodoList;
