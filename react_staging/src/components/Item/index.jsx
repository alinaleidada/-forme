import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	handleCheck=(id)=>{
		return (event)=>{
			this.props.updateTodo(id,event.target.checked)
		}
	}
	handleDelete=(id)=>{
		return()=>{
			if(window.confirm('确定删除吗？')){
				this.props.deleteTodo(id)
			}
		}
	}
	render() {
		const {name,done,id} = this.props
		return (
			<li>
				<label>
				<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button  onClick={this.handleDelete(id)}  className="btn btn-danger">删除</button>
			</li>
		)
	}
}