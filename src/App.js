import React, { Component } from 'react';
import './App.css';
import Main_header from './components/Main_header';
import Contents from './components/Contents';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contents:[
        {id:1, title:'to do list', mode:'todolist'},
        {id:2, title:'check list', mode:'checklist'},
        {id:3, title:'calender', mode:'calender'},

      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Main_header data={this.state.contents}></Main_header>
        <Contents></Contents>
      </div>
    );
  }
}

export default App;
