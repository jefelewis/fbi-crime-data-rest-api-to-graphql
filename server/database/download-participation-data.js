// Imports: Node.js File System
import fs from 'fs';

// Imports: Axios
import axios from 'axios';

// Data: Geographic Data
let regions = ["midwest", "northeast", "south", "west"];
let states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]


// Retrieve Participation Data for the United States
function downloadAllParticipationData() {
  // Axios: GET Request
  return axios({
    method:'get',
    url:`https://api.usa.gov/crime/fbi/sapi/api/participation/national?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
    responseType:'stream'
  })
  // Write response to .json file and store in the database
  .then((response) => {
    response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/participation-data/all-united-states/united-states-participation.json`))
  })
  // Error Handling
  .catch((error) => console.log(error));
}


// Retrieve Participation Data for the United States
function downloadAllParticipationDataByRegion() {
  // Iterate through the Regions
  for(let i = 0; i < regions.length; i++) {
    let region = regions[i];
    
    // Axios: GET Request
    axios({
      method:'get',
      url:`https://api.usa.gov/crime/fbi/sapi/api/participation/regions/${region}?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      responseType:'stream'
    })
    // Write response to .json file and store in the database
    .then((response) => {
      response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/participation-data/regions/${region}-participation.json`))
    })
    // Error Handling
    .catch((error) => console.log(error));

    // Set Timeout ()
    
  }
}


// Retrieve Participation Data for the United States
function downloadAllParticipationDataByState() {
  // Iterate through the States
  for(let i = 0; i < states.length; i++) {
    let state = states[i];
    
    // Axios: GET Request
    axios({
      method:'get',
      url:`https://api.usa.gov/crime/fbi/sapi/api/participation/states/${state}?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      responseType:'stream'
    })
    // Write response to .json file and store in the database
    .then((response) => {
      response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/participation-data/states/${state}-participation.json`))
    })
    // Error Handling
    .catch((error) => console.log(error));

    // Set Timeout
  }
}


// Excute
downloadAllParticipationData();
downloadAllParticipationDataByRegion();
downloadAllParticipationDataByState();