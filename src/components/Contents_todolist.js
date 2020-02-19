import React, { Component } from 'react';
import './Contents_todolist.css';



class Contents_todolist extends Component {
  render() {




    return (
      <section>
        <ul>
          <li>
            <input type="button" value="□" />
            코딩 연습 하기
          </li>
          <li>
            <input type="button" value="□" />
            물 1L 마시기
          </li>
          <li>
            <input type="text" placeholder="write to do list" />
            <input type="button" value="+" />
          </li>
        </ul>
      </section>
    );
  }
}




export default Contents_todolist;
