import React, {Component} from 'react';
export default class TodoItem extends Component {
    addToList(event, index) {
        console.log(event);
        console.log(index);
    }
    render() {
        const todo = this.props.item;
        const index = this.props.index;
        let str = todo.done ? 'Marqué à faire': 'Marqué comme fait ';
        return (
            <div key={index} className="todo">
                <input type="checkbox" value={index} onClick={(e) => this.addToList(index, e.target.checked)} />
                {todo.title}
                <button onClick={() => this.props.toggleTodo(todo, index)}>{str}</button>
            </div>
        );
    }
}