import React, { Component } from 'react';

export default class ClientsList extends Component{
constructor(props) {
  super(props);
  
}
    render() {
        return (
            <ul className="clients-list">
            {this.props.clientsData.map((item, key)=>{
              return (
                <li className="user-line" key={ key }
                onClick={ ()=>{ this.props.choiceClient(item) } }
                >
                <img src={item.general.avatar} className="user-line-avatar" />
                <div className="user-line-content">
                  <h2>{item.general.firstName + ' ' + item.general.lastName}</h2>
                  <p>{ item.job.title }</p>
                </div>
              </li>
              );
            })
            }
            </ul>
        );
      }
}
