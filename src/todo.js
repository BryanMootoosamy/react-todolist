import React, {Component} from 'react';
import List from './list';
import logo from './favicon.ico';
import Todoform from './todoform';
import Rebase from 're-base';
import app from './Base';
let base = Rebase.createClass(app.database());
export default class Todo extends Component {
    state = {
        test: ['bonjour', 'aurevoir']
    }
    
    componentDidMount(){
      base.syncState(`/`, {
        context: this,
        state: 'test',
        asArray: true
      });
    }
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        };
    }
    onNewToDo(todo){
        let newtodolist = this.state.todos;
        newtodolist.push(todo);
        this.setState({todos : newtodolist});
    }
    todoToggleState(todo, index){
        let _todo = todo;
        _todo.done = ! todo.done;
        let newTodos = this.state.todos;
        newTodos[index] = _todo;
        this.setState({todos: newTodos});
    }
    render() {
        return(
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Bonjour</h1>
                </header>
                <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
                <Todoform onNewToDo={this.onNewToDo.bind(this)}/>
                <List onTodoToggle={this.todoToggleState.bind(this)} todos={this.state.todos} />
            </div>
            
        );
    }
}