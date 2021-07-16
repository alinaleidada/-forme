import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		addTodo:PropTypes.func.isRequired
	}
	addTodoFa = (event)=>{
    // console.log('event',event.keyCode)
		if(event.keyCode===13){
			this.props.addTodo({id:nanoid(),name:event.target.value,done:false})
			event.target.value=''
		}else{return}
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.addTodoFa}  type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}