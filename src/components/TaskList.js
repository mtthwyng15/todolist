import React, {Component} from 'react';

class TaskList extends Component{
  // const {todoList} = this.props; 
  render(){
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
                  this.props.todoList.map(item => {
                    return(
                      <tr key={item}>
                        <th scope="row">1</th>
                        <td>{item}</td>
                        <td>Button</td>
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
