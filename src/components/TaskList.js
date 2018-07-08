import React, {Component} from 'react';
import './TaskList.css'

class TaskList extends Component{
  render(){
    const {todoList,remove} = this.props;
    return(
      <div>
        <div className='row'>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <table className="table">
              <caption> TODO LIST </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                todoList.map((item,i) => {
                    return(
                      <tr key={i}>
                        <th scope="row">1</th>
                        <td>{todoList[i]}</td>
                        <td>
                          <button className='btn-danger' onClick={(e) => remove(item)} > Remove </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }
}

export default TaskList;
