import React, { Component } from 'react';
import './ContentsCalender.css';



class ContentsCalender extends Component {
  render() {




    return (
      <section id='calender'>
        <div>November 2019</div>
        <ul>
          <li>SUN</li>
          <li>MON</li>
          <li>TUE</li>
          <li>WED</li>
          <li>THU</li>
          <li>FRI</li>
          <li>SAT</li>
        </ul>
        <ul>
          <li><input type="button" /></li>
          <li><input type="button" />2</li>
          <li><input type="button" />3</li>
          <li><input type="button" />4</li>
          <li><input type="button" />5</li>
          <li><input type="button" />6</li>
          <li><input type="button" />7</li>
        </ul>
      </section>
    );
  }
}




export default ContentsCalender;
