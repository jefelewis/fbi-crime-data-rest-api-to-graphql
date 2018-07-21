// Imports: Axios
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/config/config.js'
// FBI API Key
// iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
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


    // VICTIM DATA
    // Get all Victim Data (WORKING)
    getAllVictimData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/victim/national/${args.variable}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Victim Data by Region
    getVictimDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/victim/regions/${args.regionName}/${args.variable}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Victim Data by State
    getVictimDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/victim/states/${args.stateAbbreviation}/age?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // PARTICIPATION DATA
    // Get all Participation Data (WORKING)
    getAllParticipationData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/national/?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Participation Data by Region (WORKING)
    getParticipationDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/regions/${args.regionName}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Participation Data by State (WORKING)
    getParticipationDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/states/${args.stateAbbreviation}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // // OFFENSE DATA
    // // Get all Weapons Offense Data
    // getAllWeaponsOffenseData: (parent, args) => {
    //   return axios.get(``)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },
    // // Get Weapons Offense Data by Region
    // getAllWeaponsOffenseDataByRegion: (parent, args) => {
    //   return axios.get(``)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },
    // // Get Weapons Offense Data by State
    // getAllWeaponsOffenseDataByState: (parent, args) => {
    //   return axios.get(``)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // }


    // REST API VARIABLE LOOKUPS
    getVariableLookupForAgencies: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/agencies/?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // POLICE EMPLOYMENT (WORKING)
    // Get all Police Employment Data (WORKING)
    getAllPoliceEmploymentData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/police-employment/national?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Police Employment Data by Region (WORKING)
    getPoliceEmploymentDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/police-employment/regions/${args.regionName}/?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Police Employment Data by State (WORKING)
    getPoliceEmploymentDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/police-employment/states/${args.stateAbbreviation}/?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // ARSON
    // Get All Arson Data by State (WORKING)
    getAllArsonData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/national?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Arson Data by Region
    getArsonDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/regions/${args.regionName}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Arson Data by State
    getArsonDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/states/${args.stateAbbreviation}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


  }
};

// Exports
export default RESOLVERS;