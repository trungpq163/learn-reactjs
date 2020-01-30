import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
    constructor() {
        super();
        this.todoItems = [
            // { title: 'Mua bim bim', isComplete: true },
            // { title: 'Đi đá bóng' },
            // { title: 'Đi đổ xăng' }
        ]
    }
    render() {
        if (this.todoItems.length > 0) {
            return (
                <div className="App">
                    {
                        this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)
                    }
                </div>
            );
        } else {
            return (
                <div className="App">
                    Nothing here..
                </div>
            )
        }
    }
}

export default App;
