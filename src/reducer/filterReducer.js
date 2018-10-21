
const clientsFilter = '';
  
export  const filterReducer = (state=clientsFilter, action) =>{
      if(action.type === "FILTER_CLIENTS"){
     return  action.payload;
     }
      return state;
  }
   