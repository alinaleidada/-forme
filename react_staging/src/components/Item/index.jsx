import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state={changecolor:false}
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
	changeBg=(id)=>{
		return()=>{
			this.setState({changecolor:id})
		}
	}
	render() {
		const {changecolor} = this.state;
		const {name,done,id} = this.props
		return (
			<li style={{backgroundColor:changecolor?'#ccc':'#fff'}} onMouseEnter={this.changeBg(true)} onMouseLeave={this.changeBg(false)}>
				<label>
				<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button  onClick={this.handleDelete(id)}  className="btn btn-danger">删除</button>
			</li>
		)
	}
}