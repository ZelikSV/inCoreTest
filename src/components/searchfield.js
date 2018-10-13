import React, { Component } from 'react';

export default class Search extends Component{
constructor(props) {
  super(props);
  
}
      render() {
          return (
            <div className="ui icon input">
            <input type="text" placeholder="Search..." onChange={ this.props.update.bind(this)}
            />
            <i className="search icon"></i>
          </div>
          );
        }

}