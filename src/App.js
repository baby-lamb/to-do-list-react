import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import ContentsTodolist from './components/ContentsTodolist';
import ContentsChecklist from './components/ContentsChecklist';
import ContentsCalender from './components/ContentsCalender';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contents:[
        {id:1, title:'To do list'},
        {id:2, title:'Check list'},
        {id:3, title:'Calender'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <MainHeader data={this.state.contents}></MainHeader>
        <ContentsTodolist></ContentsTodolist>
        <ContentsChecklist></ContentsChecklist>
        <ContentsCalender></ContentsCalender>
      </div>
    );
  }
}



export default App;
