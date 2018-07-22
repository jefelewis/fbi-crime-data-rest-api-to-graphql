// Imports: Axios
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/config/config.js'
// FBI API Key
// iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

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
    // Get Victim Data by Region (NOT WORKING. LOOKS LIKE URL PATH FROM REST API IS BAD)
    getVictimDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/victim/regions/${args.regionName}/${args.variable}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Victim Data by State (WORKING)
    getVictimDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/victim/states/${args.stateAbbreviation}/age?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // OFFENDER DATA (WORKING)
    // Get all Offender Data (WORKING)
    // No Pagination
    getAllOffenderData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offender/national/${args.variable}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Offender Data by Region (WORKING)
    // No Pagination
    getOffenderDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offender/regions/${args.regionName}/${args.variable}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Offender Data by State (WORKING)
    // No Pagination
    getOffenderDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offender/states/${args.stateAbbreviation}/${args.variable}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // PARTICIPATION DATA
    // Get all Participation Data (WORKING)
    // No Pagination
    getAllParticipationData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/national/?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Participation Data by Region (WORKING)
    // No Pagination
    getParticipationDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/regions/${args.regionName}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Participation Data by State (WORKING)
    // No Pagination
    getParticipationDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/states/${args.stateAbbreviation}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // OFFENSE DATA (WORKING)
    // Get all Offense Data (WORKING)
    // No Pagination
    getAllOffenseData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/national/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Offense Data by Region (WORKING)
    // No Pagination
    getOffenseDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/regions/${args.regionName}/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Offense Data by State (WORKING)
    // No Pagination
    getOffenseDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/states/${args.stateAbbreviation}/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get all Linked Offense Data (WORKING)
    // No Pagination
    getAllLinkedOffenseData: (parent, args) => {
      return axios.get(``)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Linked Offense Data by Region (WORKING)
    // No Pagination
    getLinkedOffenseDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/linkedoffense/regions/${args.regionName}/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Linked Offense Data by State (WORKING)
    // No Pagination
    getLinkedOffenseDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/linkedoffense/states/${args.stateAbbreviation}/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get all Weapons Offense Data (CONNECTION IS WORKING, BUT THE RESULTS ARRAY IS EMPTY)
    // No Pagination
    getAllWeaponOffenseData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/weapons/national/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Weapons Offense Data by Region (WORKING)
    // No Pagination
    getWeaponOffenseDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/weapons/regions/${args.regionName}/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Weapons Offense Data by State (WORKING)
    // No Pagination
    getWeaponOffenseDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${args.offense}/offense/weapons/states/${args.stateAbbreviation}/count?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



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



    // ARSON (WORKING)
    // Get All Arson Data (WORKING)
    getAllArsonData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/national?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Arson Data by Region (WORKING)
    getArsonDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/regions/${args.regionName}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Arson Data by State (WORKING)
    getArsonDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/arson/states/${args.stateAbbreviation}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // ESTIMATES (WORKING)
    // Get All Estimate Data (WORKING)
    getAllEstimateData: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/estimates/national?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Estimate Data by Region (WORKING)
    getEstimateDataByRegion: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/estimates/regions/${args.regionName}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Estimate Data by State (WORKING)
    getEstimateDataByState: (parent, args) => {
      return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/estimates/states/${args.stateAbbreviation}?api_key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
};

// Exports
export default RESOLVERS;