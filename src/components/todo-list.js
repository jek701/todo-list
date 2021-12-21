import React from "react";
import TodoListItem from "./todo-list-item";


const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li className="list-group-item" key={id}><TodoListItem
                {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}/></li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default ToDoList;