import React, {Component} from 'react';
export default class Todoform extends Component {
    addToDo(event){
        event.preventDefault();
        const task = this.ToDoTask.value;
        this.props.onNewToDo({
            title: task,
            done: false,
            createdAt: new Date()
        });
        this.ToDoTask.value = '';
    }
    render(){
        return(
            <div>
                <form method="post">
                    <input type="text" name="insert" id="insert" ref={(input) => this.ToDoTask = input}/>
                    <button onClick={this.addToDo.bind(this)}>Ajouter</button>
                </form>
            </div>
        );
    }
}