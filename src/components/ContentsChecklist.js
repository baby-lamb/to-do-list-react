import React, { Component } from 'react';
import './ContentsChecklist.css';




class ContentsChecklist extends Component{
  render(){



    return (
      <section id='checklist'>
        <div>Month</div>
        <div>하루에 물 한잔 이상 마시기</div>
        <ul>
          <li>Sun</li>
          <li>Mon</li>
          <li>The</li>
          <li>Wen</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
          <li><input type='bttton' /><input type='bttton' /><input type='bttton' /><input type='bttton' /></li>
        </ul>
      </section>
    );
  }
}




export default ContentsChecklist;
