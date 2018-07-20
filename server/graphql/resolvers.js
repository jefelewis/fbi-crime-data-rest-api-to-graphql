// Imports: Axios
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/config/config.js'
// FBI API Key
// iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // ARSON
    // Get Arson by State
    // getArsonByState: (parent, args) => {
    //   return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/states/${args.stateAbbr}?api_key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },
    // // Get Police Employment by State
    // getPoliceEmploymentByState: (parent, args) => {
    //   return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/police-employment/states/${args.stateAbbr}?api_key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },
    // // Get Agency by State
    // getAgencyByState: (parent, args) => {
    //   return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/${args.stateAbbr}?api_key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },




    // // Get all Agencies
    // getAllAgencies: (parent, args) => {
    //   return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/agencies?api_key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },






    // PARTICIPATION
    // Get all Participation
    getAllParticipation: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/national/?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },

  
    // Get Participation by Region
    getParticipationByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/regions/${args.regionName}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // Get Participation by State (WORKING)
    getParticipationByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/states/${args.stateAbbreviation}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
};

// Exports
export default RESOLVERS;