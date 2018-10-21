
 const clientsBase = [
    {
      "general": {
        "firstName": "Liana",
        "lastName": "Crooks",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
      },
      "job": {
        "company": "Ledner, Johnson and Predovic",
        "title": "Investor Functionality Coordinator"
      },
      "contact": {
        "email": "Gerry_Hackett77@gmail.com",
        "phone": "(895) 984-0132"
      },
      "address": {
        "street": "1520 Zemlak Cove",
        "city": "New Devon",
        "zipCode": "42586-7898",
        "country": "Guinea-Bissau"
      }
    },
    {
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
    },
    {
      "general": {
        "firstName": "Cortez",
        "lastName": "Pacocha",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg"
      },
      "job": {
        "company": "McKenzie Group",
        "title": "Forward Branding Developer"
      },
      "contact": {
        "email": "Sage_Wiegand@hotmail.com",
        "phone": "725.583.0926 x0430"
      },
      "address": {
        "street": "376 Reginald Dam",
        "city": "Port Enid fort",
        "zipCode": "51294-8361",
        "country": "Belarus"
      }
    },
    {
      "general": {
        "firstName": "Geoffrey",
        "lastName": "Russel",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg"
      },
      "job": {
        "company": "Nienow and Sons",
        "title": "Central Intranet Designer"
      },
      "contact": {
        "email": "Daron.Bartoletti9@gmail.com",
        "phone": "646.580.9390"
      },
      "address": {
        "street": "5050 Iva Extensions",
        "city": "Madonna burgh",
        "zipCode": "74470-6362",
        "country": "Fiji"
      }
    },
    {
      "general": {
        "firstName": "Christian",
        "lastName": "Wuckert",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg"
      },
      "job": {
        "company": "Jakubowski Inc",
        "title": "Future Branding Assistant"
      },
      "contact": {
        "email": "Zechariah48@hotmail.com",
        "phone": "555-516-5564"
      },
      "address": {
        "street": "1946 Nolan Mountain",
        "city": "Garnet stad",
        "zipCode": "79438",
        "country": "Puerto Rico"
      }
    },
    {
      "general": {
        "firstName": "Joana",
        "lastName": "Breitenberg",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/themrdave/128.jpg"
      },
      "job": {
        "company": "Jacobson - Fay",
        "title": "Global Factors Officer"
      },
      "contact": {
        "email": "Jaylon92@hotmail.com",
        "phone": "202.387.0215 x7568"
      },
      "address": {
        "street": "3446 Isabelle Shore",
        "city": "Port Kayli",
        "zipCode": "63713-9923",
        "country": "Switzerland"
      }
    }
  ]
  
export const reducerClients = (state=clientsBase, action) =>{
      if(action.type === "ALL"){
     return  state;
     }
      return state;
  }
  