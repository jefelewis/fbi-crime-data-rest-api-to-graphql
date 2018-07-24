// Imports: Node.js File System
import fs from 'fs';

// Imports: Axios
import axios from 'axios';

// Data: Geographic Data
let regions = ["midwest", "northeast", "south", "west"];
// let states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]
let states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT"]

// Retrieve Police Employment Data for the United States
function downloadAllPoliceEmploymentData() {
  return axios({
    method:'get',
    url:`https://api.usa.gov/crime/fbi/sapi/api/police-employment/national?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
    responseType:'stream'
  })
  .then( (response) => {
    // Write response to .json file and store in the database
    response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/employment-data/police-employment/all-united-states/united-states-police-employment.json`))
  })
  // Error Handling
  .catch((error) => console.log(error))
}



// Retrieve Police Employment Data for the United States
function downloadAllPoliceEmploymentDataByRegion() {

  for(let i = 0; i < regions.length; i++) {
    let region = regions[i];
    
    axios({
      method:'get',
      url:`https://api.usa.gov/crime/fbi/sapi/api/police-employment/regions/${region}/?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      responseType:'stream'
    })
    .then( (response) => {
      // Write response to .json file and store in the database
      response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/employment-data/police-employment/regions/${region}-police-employment.json`))
    })
    // Error Handling
    .catch((error) => console.log(error))
  }
}

// Retrieve Police Employment Data for the United States
function downloadAllPoliceEmploymentDataByState() {

  for(let i = 0; i < regions.length; i++) {
    let state = states[i];
    
    axios({
      method:'get',
      url:`https://api.usa.gov/crime/fbi/sapi/api/police-employment/states/${state}/?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      responseType:'stream'
    })
    .then( (response) => {
      // Write response to .json file and store in the database
      response.data.pipe(fs.createWriteStream(`/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/database/employment-data/police-employment/states/${state}-police-employment.json`))
    })
    // Error Handling
    .catch((error) => console.log(error))
  }

}



// Excute
downloadAllPoliceEmploymentData();
downloadAllPoliceEmploymentDataByRegion();
downloadAllPoliceEmploymentDataByState();