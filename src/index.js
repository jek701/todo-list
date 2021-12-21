import React, { Component } from "react";
import ReactDOM from 'react-dom'
import ToDoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import '../src/components/style.css'
import ItemStatusFilter from "./components/item-status-filter";
import ItemAddForm from "./components/item-add-form/item-add-form";


class App extends Component {

    maxId = 1;

    state = {
        todoData: [

        ],
        term: '',
        filter: 'all'
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)

            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        })
    };

    createTodoItem(name) {
        return {
            name,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};

            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

            return {todoData: newArray}
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

            return {todoData: newArray}
        })
    }

    onSearchChange = (term) => {
        this.setState({ term })
    }

    onFilterChange = (filter) => {
        this.setState({ filter })
    }



    search (items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    filter (items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="padding">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <SearchPanel onSearchChange={this.onSearchChange} />
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
                <ToDoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm addItem={this.addItem} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));