import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/Header/AppHeader';
import SearchPanel from './components/Panel/SearchPanel';

const App = () => {

    const todoData = [
        {
            content: 'Make breakfast',
            important: false
        },
        {
            content: 'Learn DDD',
            important: true
        },
        {
            content: 'Learn React',
            important: false
        },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
