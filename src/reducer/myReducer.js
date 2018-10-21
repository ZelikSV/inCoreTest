  
const clientsBase  = require('../../clients.json');

export const reducerClients = (state=clientsBase, action) =>{
      if(action.type === "ALL"){
     return  state;
     }
      return state;
  }
  