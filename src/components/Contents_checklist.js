import React, { Component } from 'react';
import './Contents_checklist.css';


function Calender(){
  function generate(){
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week(); === 1 ? 53 : today.clone().endOf('month').week();
    let calender = [];
    for (let week = startWeek; week <= endWeek; week++){
      calender.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n,i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
              return (
                <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                  <span className={`text`}>{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
  return calender;
}

class Contents_checklist extends Component {
  render() {




    return (
      <section>
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
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </section>
    );
  }
}




export default Contents_checklist;
