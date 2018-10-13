import React, { Component } from 'react';

export default class ClientsDetails extends Component{

constructor(props) {
  super(props);
  
}

    render() {
        return (
                    <div className="users-details">
                        <img className="users-details-avatar" src={ this.props.user.general.avatar }/>
                        <div className="users-details-content">
                                <ul>
                                    <li>Name:
                                    <h3>{this.props.user.general.firstName + ' ' + this.props.user.general.lastName}</h3>
                                    </li>
                                    <li>Company:
                                    <p>{this.props.user.job.company}</p>
                                    </li>
                                    <li>Job:
                                    <p>{this.props.user.job.title}</p>
                                    </li>
                                    <li>Email:
                                    <a href="#">{this.props.user.contact.email}</a>
                                    </li>
                                    <li>Phone:
                                    <a href="#">{this.props.user.contact.phone}</a>
                                    </li>
                                    <li>Adress:
                                    <p>{this.props.user.address.country}, <span>{this.props.user.address.city}</span> {this.props.user.address.zipCode}</p>
                                    <p>{this.props.user.address.street}</p>
                                    </li>
                                </ul>
                        </div>
                  </div>           
        );
      }
}
