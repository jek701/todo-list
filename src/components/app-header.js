import React from "react";

const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>To-do приложение</h1>
            <h2>{toDo} должно быть сделано, {done} сделано</h2>
        </div>
    )
}

export default AppHeader;