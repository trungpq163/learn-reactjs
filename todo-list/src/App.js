import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <TodoItem/>
                </header>
            </div>
        );
    }
}

export default App;
