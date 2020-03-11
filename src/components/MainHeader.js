import React, { Component } from 'react';
import './MainHeader.css';



class MainHeader extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
      list.push(<li key={data[i].id}><a href={"/content/"+data[i].id}
      onClick={function(e){
        e.preventDefault();
        data[i].setState({
          mode:data[i].mode
        });
      }}
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
