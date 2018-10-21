import React, { Component } from 'react';
import styled from 'styled-components';
import ClientsList from './clientslist';
import ClientsDetails from './clientsdetails';
import Search from './searchfield';
import './App.scss';


import {connect} from 'react-redux';
import filterClients  from '../actions/index';


class App extends Component{
constructor(props) {
  super(props);
  this.state = {
    choice: this.props.clients[0]
}

}

searchClient(e){
  return this.props.allClient(e);
}

  choiceClient(dataClient){
    this.setState({choice: dataClient});
  }

    render() {
        return (
          <div className="app">
            <div className="ui container">
              <div className="users-column">
            <Search
            update={ this.searchClient.bind(this) }
            />
 
            <ClientsList 
            clientsData={this.props.clients} 
              choiceClient={this.choiceClient.bind(this)}
            />
          </div>
              <ClientsDetails user={ this.state.choice } />
            </div>
          </div>
        );
      }
}
const mapStateToProps = (state) =>{
  
return{
  
  clients: state.reducerClients.filter(
    item=>
    {
      return item.general.firstName.toLowerCase().includes(state.filterReducer)
      ||  item.general.lastName.toLowerCase().includes(state.filterReducer)
      ||  item.job.company.toLowerCase().includes(state.filterReducer)
      ||  item.job.title.toLowerCase().includes(state.filterReducer)
      ||  item.contact.email.toLowerCase().includes(state.filterReducer)
      ||  item.contact.phone.toLowerCase().includes(state.filterReducer)
      ||  item.address.street.toLowerCase().includes(state.filterReducer)
      ||  item.address.city.toLowerCase().includes(state.filterReducer)
      ||  item.address.zipCode.toLowerCase().includes(state.filterReducer)
      ||  item.address.country.toLowerCase().includes(state.filterReducer);
}    
    )
}
}
const mapDispatchToProps = (dispatch) =>{
  return {
    allClient: text => dispatch(filterClients(text))
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);