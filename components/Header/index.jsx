import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  // enter键添加todo
  add=(event)=>{
    const {keyCode,target}=event
    if(keyCode!=13) return
    if(!target.value.trim()){
      alert('输入不能为空')
      return
    }
    const todo={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todo)
    target.value=''
  }
  // 对接收到的props进行限制
  static propTypes={
      addTodo:PropTypes.func.isRequired
  }


  render() {
    return (
      <div className='todo-header'>
        <input type="text" placeholder='请输入你的任务名称，按回车键确认' onKeyUp={this.add}/>
      </div>
    )
  }
}
