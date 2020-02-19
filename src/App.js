import React, { Component } from 'react';
import './App.css';
import Main_header from './components/Main_header';
import Contents_todolist from './components/Contents_todolist';
import Contents_checklist from './components/Contents_checklist';
import Contents_calender from './components/Contents_calender';

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
        <Contents_todolist></Contents_todolist>
        <Contents_checklist></Contents_checklist>
        <Contents_calender></Contents_calender>
      </div>
    );
  }
}

export default App;
