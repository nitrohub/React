import React, { Component } from 'react';


class Mutate extends Component{

    constructor(props){
        super(props);
        this.state={
            test: 1,
            todos : [
                {id: 1, bread:1, done:false},
                {id: 2, bread:3, done:true},
                {id: 3, bread:2, done:false}
            ]
        };
        this.updateTodoWrongWay = this.updateTodoWrongWay.bind(this);
        this.UpdateTodoRightWay = this.UpdateTodoRightWay.bind(this);
    }

    updateTodoWrongWay(e){
        const todo = this.state.todos.find((e)=>e.id===2);
        todo.done  = false;
        this.setState({
            todos:this.state.todos
        });
    }

    UpdateTodoRightWay(e){
        const todos = this.state.todos.map((todo)=>{
            if(todo.id==2){
                return {...todo,done:false};
            }
            return todo;
        });
        this.setState({todos:todos,test:10});
    }

    render(){
        return (
            <div>
                <h1>Working!</h1>
                <button onClick={this.updateTodoWrongWay}>updateTodoWrongWay!</button>
                <button onClick={this.UpdateTodoRightWay}>UpdateTodoRightWay!</button>
            </div>
        );
    }
}

export default Mutate;