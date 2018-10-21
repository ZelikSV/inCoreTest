import React, { Component } from 'react';

export default class Search extends Component{
constructor(props) {
  super(props);
  
}
searchUpkeys(event){
  const val = event.target.value.toLowerCase();
return this.props.update(val);

}
      render() {
          return (
            <div className="ui icon input">
            <input type="text" placeholder="Search..." 
            onChange={ this.searchUpkeys.bind(this) }
            />
            <i className="search icon"></i>
          </div>
          );
        }

}