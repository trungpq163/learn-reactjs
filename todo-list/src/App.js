import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoItem title="Mua bim bim"/>
                <TodoItem title="Đi đá bóng"/>
                <TodoItem title="Đi đổ xăng"/>
            </div>
        );
    }
}

export default App;
