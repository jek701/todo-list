import React, {Component} from "react";

class TodoListItem extends Component {

    render() {
        const { name, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        const liStyle = {
            color: important ? "red" : "black",
            fontWeight: important ? 'bold' : 'inherit',
            textDecoration: done ? 'line-through' : 'inherit',
        };

        let className = 'todo-list-item display-row';

        if (done) {
            className += ' done';
        }

        return (
            <span className={className}>
                <span style={liStyle} onClick={ onToggleDone }>{name}</span>
                <div>
                    <button type='button' onClick={ onToggleImportant } className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation" />
                    </button>
                    <button type='button' onClick={ onDeleted } className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </span>


        )

    }
}

export default  TodoListItem;