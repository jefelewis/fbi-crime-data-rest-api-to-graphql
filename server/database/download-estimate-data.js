// Imports: Node.js File System
import fs from 'fs';

// Imports: Axios
import axios from 'axios';

// Data: Geographic Data
let regions = ["midwest", "northeast", "south", "west"];
let states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]


// Retrieve Estimate Data for the United States
function downloadAllEstimateData() {
  // Axios: GET Request
  return axios({
    method:'get',
    url:`https://api.usa.gov/crime/fbi/sapi/api/estimates/national?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
    responseType:'stream'
  })
  // Write response to .json file and store in the database
  .then((response) => {
    response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/Estimate-data/all-united-states/united-states-Estimate.json`))
  })
  // Error Handling
  .catch((error) => console.log(error));
}


// Retrieve Estimate Data for the United States
function downloadAllEstimateDataByRegion() {
  // Iterate through the Regions
  for(let i = 0; i < regions.length; i++) {
    let region = regions[i];
    
    // Axios: GET Request
    axios({
      method:'get',
      url:`https://api.usa.gov/crime/fbi/sapi/api/estimates/regions/${region}?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      responseType:'stream'
    })
    // Write response to .json file and store in the database
    .then((response) => {
      response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/Estimate-data/regions/${region}-Estimate.json`))
    })
    // Error Handling
    .catch((error) => console.log(error));

    // Set Timeout ()
    
  }
}


// Retrieve Estimate Data for the United States
function downloadAllEstimateDataByState() {
  // Iterate through the States
  for(let i = 0; i < states.length; i++) {
    let state = states[i];
    
    // Axios: GET Request
    axios({
      method:'get',
      url:`https://api.usa.gov/crime/fbi/sapi/api/estimates/states/${state}?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      responseType:'stream'
    })
    // Write response to .json file and store in the database
    .then((response) => {
      response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/Estimate-data/states/${state}-Estimate.json`))
    })
    // Error Handling
    .catch((error) => console.log(error));

    // Set Timeout
  }
}


// Excute
downloadAllEstimateData();
downloadAllEstimateDataByRegion();
downloadAllEstimateDataByState();