import React,{Component} from "react";
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    state={
        count:0
    }
    static propTypes={
        todoList:PropTypes.array.isRequired,
        clearDone:PropTypes.func.isRequired    
    }
    clear=()=>{
        this.props.clearDone()
    }
    allCheck=(event)=>{
        this.props.allTodo(event.target.checked)
    }
    render() { 
        const {todoList}=this.props
        const doneCount=todoList.reduce((pre,todo)=>pre+(todo.done?1:0),0)
        const all=todoList.length
        return (
            <div className="footer">
                <div>
                    <input type="checkbox" checked={doneCount==all&&doneCount!=0} onChange={this.allCheck}/>
                    <span>已完成{doneCount}/全部{all}</span>
                </div>
                <button onClick={this.clear}>清除已完成任务</button>
            </div>
        );
    }
}
 