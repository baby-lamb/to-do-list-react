import React, { Component } from 'react';
import './MainHeader.css';



class MainHeader extends Component {
  render() {
    const list = [];
    const data = this.props.data;
    let i = 0;
    while(i < data.length){
      list.push(<li key={data[i].id}><a href={"/components/"+data[i].id}
      onClick={
        function(e){
          e.preventDefalt();
        }
      }
      >{data[i].title}</a></li>)
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




export default MainHeader;
