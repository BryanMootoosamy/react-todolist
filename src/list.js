import React, {Component} from 'react';
import TodoItem from './item';
export default class List extends Component {
    constructor(props){
        super();
        this.state={
            selectedTodos: []
        };
    }
    toggleTodo(todoDone, index){
        this.props.onTodoToggle(todoDone, index);
    }
    showTodos(todos){
        return (
            todos.map((todo, index) => {
                return (
                    <TodoItem 
                        item={todo}
                        index={index}
                        key={index}
                        toggleTodo={this.toggleTodo.bind(this)}
                        addToList={this.addToList.bind(this)}
                    />
                );
            })
        );
    }
    addToList(index, event){
        if (event) {
            let _list = this.state.selectedTodos;
            let _todo = this.props.todos[index];
            if (event) {
                _list.push(_todo);
            } else {
                _list.splice(_list.indexOf(_todo), 1);
            }
            this.setState({
                selectedTodos: _list
            });
            const afficher = this.state.selectedTodos.length > 0;
            {afficher ? <button> Traiter </button> : null};
        }
    }
    processTodo(){
        let list = this.state.selectedTodos;
        list.forEach(item => item.done = !item.done)
        this.setState({
            selectedTodos: list
        });
    }
    render() {
        return(
            this.showTodos(this.props.todos)
        );
    }
}