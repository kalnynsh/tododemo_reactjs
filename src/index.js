import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/Header/AppHeader';
import SearchPanel from './components/Panel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));
