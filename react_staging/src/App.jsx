import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//状态在哪里，操作状态的方法就在哪里

	//初始化状态
	state = {todos:[
		{id:'001',name:'吃饭',done:false},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}
  addList=(ms)=>{
   console.log('ms',ms)
	 this.setState({
		todos:[ms,...this.state.todos]
	 })
	}
	updateTodo=(id,v)=>{
   console.log(id,v)
	 const newarr = this.state.todos.map((todoObj)=>{
		// return i.id===id ? {...i,v}:i
		if(todoObj.id === id){
		 return {id,name:todoObj.name,done:v}
		}else{
			return todoObj
		}
	})
	console.log('newarr===',newarr)
	 this.setState({
		todos:newarr
	 })
	}

	deleteTodo = (id)=>{
		//获取原来的todos
		const {todos} = this.state
		//删除指定id的todo对象
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	
	
	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addList} />
					<List todos={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer/>
				</div>
			</div>
		)
	}
}
