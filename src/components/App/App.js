import React from 'react';
import TodoList from '../TodoList';
import AppHeader from '../Header';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';

const App = () => {
    const getId = function () {
        return `f${(+(new Date()) + Math.random()*100).toString(16)}`;
    };

    const todoData = [
        {
            content: 'Make breakfast',
            important: false,
            id: getId(),
        },
        {
            content: 'Learn DDD',
            important: true,
            id: getId(),
        },
        {
            content: 'Learn React',
            important: false,
            id: getId(),
        },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;
