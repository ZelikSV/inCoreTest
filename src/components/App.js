import React, { Component } from 'react';
import styled from 'styled-components';
import ClientsList from './clientslist';
import ClientsDetails from './clientsdetails';
import Search from './searchfield';
import './App.scss';



class App extends Component{
constructor(props) {
  super(props);
  this.state = {
    clientsList:[],
    clientD: [],
    choice: {
      "general": {
        "firstName": "Deontae",
        "lastName": "Dare",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
      },
      "job": {
        "company": "D'Amore, Dicki and Borer",
        "title": "International Applications Consultant"
      },
      "contact": {
        "email": "Kellie.Marvin38@yahoo.com",
        "phone": "1-615-843-3426 x600"
      },
      "address": {
        "street": "65901 Glover Terrace",
        "city": "Alden ton",
        "zipCode": "57744-4248",
        "country": "Kenya"
      }
    }
}
this.load();
}

load(){
  fetch('./clients.json')
.then(response => response.json())
.then(data => this.setState({ clientsList:  data,
  clientD: data }));
}

searchClient(e){
  const value = e.target.value.toLowerCase();
  const filter =  this.state.clientsList.filter(user => {
          return user.general.firstName.toLowerCase().includes(value);
  });

this.setState({clientD: filter});
}
  choiceClient(dataClient){
    this.setState({choice: dataClient});
  }

    render() {

        return (
          <div className="app">
            <div className="ui container">
              <div className="users-column">
            <Search clients={this.state.clientsList}
            update={this.searchClient.bind(this)}
            />
            <ClientsList clientsData={this.state.clientD} 
              choiceClient={this.choiceClient.bind(this)}
            />
          </div>
              <ClientsDetails user={ this.state.choice } />
            </div>
          </div>
        );
      }
}

export default App;