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

    this.setState({
      todoList: [...todoList, newTask],
      newTask: ''
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

        {/*  */}

        <TaskList todoList={todoList}/>
      </div>
    );
  }
}

export default App;
