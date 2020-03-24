import React, {Component} from 'react';
import TodoList from '../TodoList';
import AppHeader from '../Header';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import './App.css';

export default class App extends Component
{
    state = {
        todoData: [
            this.createTodoItem('Make breakfast'),
            this.createTodoItem('Have lunch'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Learn DDD'),
        ],
        term: '',
    };

    getId() {
        return `f${(+(new Date()) + Math.random()*100).toString(16)}`;
    };

    createTodoItem(text) {
        return {
            content: text,
            done: false,
            important: false,
            id: this.getId(),
        };
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = this.findElementIndex(todoData, id);

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ],
            };
        });
    };

    addItem = (text) => {
        const todoNewItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newTodoData = [
                ...todoData,
                todoNewItem,
            ];

            return {
                todoData: newTodoData,
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
            };
        });
    };

    findElementIndex(elemens, id) {
        return elemens.findIndex((elem) => elem.id === id);
    }

    toggleProperty(arr, id, property) {
        const idx = this.findElementIndex(arr, id);
        const oldItem = arr[idx];

        const newItem = {
            ...oldItem,
            [property]: !oldItem[property]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((elem) => {
            return elem
                .content
                .toLowerCase()
                .indexOf(term.toLowerCase())
                    > -1
            ;
        });
    };

    onSearchChanged = (term) => {
        this.setState({ term });
    };

    render() {
        const { todoData, term } = this.state;

        const doneCount = todoData
                            .filter((elem) => elem.done === true)
                            .length;

        const lastAmount = todoData.length - doneCount;

        const visibleItems = this.search(todoData, term);

        return (
            <div className="todo-app">
                <AppHeader toDo={lastAmount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChanged={this.onSearchChanged} />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onItemAdded={this.addItem}
                />
            </div>
        );
    }
};
