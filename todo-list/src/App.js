import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/survey.svg';

// class App
class App extends Component {
    constructor(){
        super();
        this.state = {
            newItems: '',
            todoItems: [
                { title: 'Mua bim bim', isComplete: true },
                { title: 'Đi đá bóng', isComplete: true },
                { title: 'Đi đổ xăng'}
            ]
        }

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
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

    onKeyUp = function(event) {
        let text = event.target.value;
        if (event.keyCode === 13) { // enter keyCode     
            if (!text) {
                return;
            }
            text = text.trim();

            if (!text) {
                return;
            }

            this.setState({
                todoItems: [
                    { title: text, isComplete: false },
                    ...this.state.todoItems,

                ]
            })
        } else {
            this.setState({
                newItems: text
            })
        }
        
    }

    onChange(event) {
        this.setState({
            newItems: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
               <div className="Header">
                    <img src={tick} witdh={30} height={30}/>
                    <input 
                        type="text" 
                        placeholder="Add a new item" 
                        onKeyUp={this.onKeyUp} 
                        value={this.state.newItems}    
                        onChange={this.onChange}
                    />
               </div>
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
