import React, { Component } from 'react';
import TodoList from '../TodoList';
import AppHeader from '../Header';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';

export default class App extends Component
{
    state = {
        todoData: [
            {
                content: 'Make breakfast',
                important: false,
                id: this.getId(),
            },
            {
                content: 'Learn DDD',
                important: true,
                id: this.getId(),
            },
            {
                content: 'Learn React',
                important: false,
                id: this.getId(),
            },
        ],
    };

    getId() {
        return `f${(+(new Date()) + Math.random()*100).toString(16)}`;
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((elem) => elem.id === id);

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ],
            };
        });
    };

    render() {
        const {todoData} = this.state;

        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={todoData}
                    onDelete={this.deleteItem}
                />
            </div>
        );
    }
};
