import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {
  // 对接收到的props进行限制
  static propTypes={
    todoList:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired
  }
  render() {
    const {todoList} = this.props;
    return (
      <div>
        <ul>
            {
              todoList.map((todo)=>{
                return <Item key={todo.id} {...todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}></Item>
              })
            }
        </ul>
      </div>
    )
  }
}
