import React, { Component } from 'react';
import './Main_header.css';



class Main_header extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
      list.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
      i = i+1;
    }



    return (
      <header>
          <ul>
            {list}
          </ul>
      </header>
    );
  }
}




export default Main_header;