// Imports: Node.js File System
import fs from 'fs';

// Imports: Axios
import axios from 'axios';

// Data: Geographic Data
let regions = ["midwest", "northeast", "south", "west"];
let states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]
let variables = ["age", "count", "ethnicity", "race", "sex", "relationship"];
let offenses = ["aggravated-assault", "arson", "burglary", "homicide", "larceny", "motor-vehicle-theft", "property-crime", "rape", "robbery", "violent-crime"];


// Retrieve Victim Data for the United States
function downloadAllVictimData() {

  // Iterate through the Variables
  for(let i = 0; i < variables.length; i++) {
    let variable = variables[i];

    // Iterate through the Offenses
    for(let i = 0; i < offenses.length; i++) {
      let offense = offenses[i];

      // Axios: GET Request
      return axios({
        method:'get',
        url:`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${offense}/victim/national/${variable}?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
        responseType:'stream'
      })
      // Write response to .json file and store in the database
      .then((response) => {
        response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/victim-data/all-united-states/${offense}/${offense}-by-${variable}.json`))
      })
      .then(console.log("Offense: ", offense))
      // Error Handling
      .catch((error) => console.log(error));
    }
  }
}


// // Retrieve Victim Data for the United States
// function downloadAllVictimDataByRegion() {
//   // Iterate through the Regions
//   for(let i = 0; i < regions.length; i++) {
//     let region = regions[i];
    
//     // Axios: GET Request
//     axios({
//       method:'get',
//       url:`https://api.usa.gov/crime/fbi/sapi/api/police-employment/regions/${region}/?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
//       responseType:'stream'
//     })
//     // Write response to .json file and store in the database
//     .then((response) => {
//       response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/employment-data/police-employment/regions/${region}-police-employment.json`))
//     })
//     // Error Handling
//     .catch((error) => console.log(error));

//     // Set Timeout ()
    
//   }
// }


// // Retrieve Victim Data for the United States
// function downloadAllVictimDataByState() {
//   // Iterate through the States
//   for(let i = 0; i < states.length; i++) {
//     let state = states[i];
    
//     // Axios: GET Request
//     axios({
//       method:'get',
//       url:`https://api.usa.gov/crime/fbi/sapi/api/police-employment/states/${state}/?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
//       responseType:'stream'
//     })
//     // Write response to .json file and store in the database
//     .then((response) => {
//       response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/employment-data/police-employment/states/${state}-police-employment.json`))
//     })
//     // Error Handling
//     .catch((error) => console.log(error));

//     // Set Timeout
//   }
// }


// Excute
downloadAllVictimData();
// downloadAllVictimDataByRegion();
// downloadAllVictimDataByState();