import React, { Component } from 'react';

export default class Search extends Component{
constructor(props) {
  super(props);
  this.state = {
    textInputs: ''
  }
}
searchUpkeys(event){
return this.props.update(event.target.value);
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