import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css';
import logo from './tasklogo.png';

class App extends Component {

  constructor(){
    super();

    this.state = {
      todoList: ['study', 'work', 'sleep'],
      newTask: ''
    }
  }

  addList = (event) => {
    this.setState({
      newTask: event.target.value
    })
  }

  addTodo = (event) => {
    event.preventDefault();
    const {todoList,newTask} = this.state

    if(newTask!==''){
      this.setState({
        todoList: [...todoList, newTask],
        newTask: ''
      })
    }
  }

  removeTask = (task) => {

    const {todoList} = this.state;

    const updatedTodoList = todoList.filter(updateTasks => {
      return updateTasks !== task;
    })

    this.setState({
      todoList: [...updatedTodoList]
    })
  }

  render(){
    const {todoList} = this.state;
    return(
      <div className='App'>
        <div>
          <h1> TODO LIST </h1>
          <img src={logo} alt='logo' className='logo'/>
        </div>

        <TaskForm getValue={this.addList} submitForm={this.addTodo} value={this.state.newTask}/>

        <TaskList todoList={todoList} remove={this.removeTask}/>
      </div>
    );
  }
}

export default App;
