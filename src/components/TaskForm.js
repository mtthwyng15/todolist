import React, {Component} from 'react';
import './TaskForm.css';

class TaskForm extends Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.submitForm}>
          <input
            type='text'
            placeholder='ENTER A TASK HERE'
            className='addTask'
            onChange={this.props.getValue}
            value={this.props.value}
          />
          <button className='btn-add'> ADD TASK </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
