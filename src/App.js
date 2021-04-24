import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state={
    items:[{id:1,Title:"Rahul"},{id:2,Title:"Tuba"}],
    id:uuidv4(),
    item:'',
    editItem:false
  };
  handelChange = e=>{console.log('handel Change');}
  handelSubmit = e =>{console.log('handel Submit');}
  clearList = ()=>{console.log('List clear');}
  handelDelete = id =>{console.log(`Handel Delete ${id}`)}
  handelEdit = id =>{console.log(`Handel Edit ${id}`)}

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">
                To Do Input
              </h3>
              <TodoInput 
              item={this.state.item} 
              handelChange={this.handelChange} 
              handelSubmit={this.handelSubmit} 
              handelEdit={this.handelEdit}  
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handelDelete={this.handelDelete}
                handelEdit={this.handelEdit}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
