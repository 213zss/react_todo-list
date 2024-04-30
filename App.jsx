import React,{ Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from './components/Footer'
import './App.css'
export default class App extends Component{
    state={
        todoList:[
            {id:1,name:'吃饭',done:true},
            {id:3,name:'睡觉',done:false},
            {id:4,name:'上厕所',done:true},
            {id:5,name:'学习',done:false},
        ],
        count:0
    }
    // 添加todo
    addTodo=(obj)=>{
        const {todoList}=this.state
        const newTodo=[obj,...todoList]
        this.setState({todoList:newTodo})
    }
    // 更新todo
    updateTodo=(id,done)=>{
        const {todoList}=this.state
        const newTodo=todoList.map((todo)=>{
            if(todo.id==id) return {...todo,done}
            else return todo
        })
        this.setState({todoList:newTodo})
    }
    // 删除todo
    deleteTodo=(id)=>{
        const {todoList}=this.state
        const newTodo=todoList.filter((todo)=>{
            return todo.id!=id
        })
        this.setState({todoList:newTodo})
    }
    allTodo=(done)=>{
        const {todoList}=this.state
        const newTodo=todoList.map((todo)=>{
            return {...todo,done}
        })
        this.setState({todoList:newTodo})
    }
    clearDone=()=>{
        const {todoList}=this.state
        const newTodo=todoList.filter((todo)=>{
            return todo.done==false
        })
        this.setState({todoList:newTodo})
    }
    render(){
        const {todoList}=this.state
        return (
            <div className="app">
                <Header addTodo={this.addTodo}></Header>
                <List todoList={todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                <Footer todoList={todoList} allTodo={this.allTodo} clearDone={this.clearDone}></Footer>
            </div>
        )
    }
}


    // 1.如何确定将数据放在哪个组件的state中
    //     某个组件使用：放在自身的state中
    //     某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    // 2.父子组件通信：
    //     父组件给子组件传递数据：通过props传递
    //     子组件给父组件传递数据：通过props传递，要求父组件提前给子组件传递一个参数
    // 3.注意defaultChecked和checked的区别，类似还有defaultValue和value
    // 4.状态在哪里，操作状态的方法就在哪里
