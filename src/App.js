import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import ContentsTodolist from './components/ContentsTodolist';
// import ContentsChecklist from './components/ContentsChecklist';
// import ContentsCalender from './components/ContentsCalender';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contents:[
        {id:1, title:'To do list', mode:'todolist'},
        {id:2, title:'Check list', mode:'checklist'},
        {id:3, title:'Calender', mode:'calender'},

      ]
    }
  }
  render() {
    return (
      <div className="App">
        <MainHeader data={this.state.contents}></MainHeader>
        <ContentsTodolist></ContentsTodolist>
      </div>
    );
  }
}

// <ContentsChecklist></ContentsChecklist>
// <ContentsCalender></ContentsCalender>

export default App;
