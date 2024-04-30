import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

export default class Item extends Component {
  // 改变todo状态
  change=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
    
  }
  delete=(id)=>{
    return ()=>{
      if(window.confirm('确定删除吗')){
        this.props.deleteTodo(id)
      }
    }
  }
  
  render() {
    const {id,name,done}=this.props;
    return (
      <li className='todo'>
          <label>
            <input type="checkbox" checked={done} onChange={this.change(id)}/>
            <span>{name}</span>
          </label>
          <button className='btn' onClick={this.delete(id)}>删除</button>
      </li>
    )
  }
}
