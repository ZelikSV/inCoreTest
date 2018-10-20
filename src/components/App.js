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
    clientD: [],
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
            <Search clients={this.props.clients}
            update={ this.searchClient.bind(this) }
            />
 
            <ClientsList clientsData={this.props.clients} 
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
  clients: state.reducerClients
}
}
const mapDispatchToProps = (dispatch) =>{
  return {
    allClient: text => dispatch(filterClients(text))
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);