import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
    constructor(){
        super();
        this.state = {
            todoItems: [
                { title: 'Mua bim bim', isComplete: true },
                { title: 'Đi đá bóng', isComplete: true },
                { title: 'Đi đổ xăng'}
            ]
        }
    }
    onItemClicked(item) {
        return (event) => {
            const isComplete = item.isComplete;
            const {todoItems} = this.state;
            const index = todoItems.indexOf(item);
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index + 1)
                ]
            });
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
                    <TodoItem key={index} 
                    item={item} 
                    onClick={this.onItemClicked(item)}/>)
                }
                {
                    this.state.todoItems.length === 0 && "Nothing here.."
                }
            </div>
        );
    }
}

export default App;
