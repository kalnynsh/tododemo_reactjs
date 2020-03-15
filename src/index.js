import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/Header/AppHeader';
import SearchPanel from './components/Panel/SearchPanel';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
