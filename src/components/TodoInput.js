import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const{item,handelChange,handelSubmit,editItem} =this.props;
        return (
           <div className="card card-body my-3">
                <from onSubmit={handelSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-light">
                                <i className="fas fa-book"/> 
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add Todo items.." value={item} onChange={handelChange}/>
                    </div>
                    <button type="submit" disabled={item?false:true} 
                    className=
                    {editItem ?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3 text-uppercase"}>{editItem?"edit item" : "Add Item(s)"}</button>
                </from>
           </div>
        );
    }
}

export default TodoInput;
