// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Wrapped GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/config/config.js'


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getArson: async (parent, args) => {
      const response = await 
      fetch(`https://api.usa.gov/crime/fbi/sapi/api/arson/states/${args.stateAbbr}?api_key=${APIKEY}`);
      return response.json();
    },
    getPoliceEmployment: async (parent, args) => {
      const response = await 
      fetch(`https://api.usa.gov/crime/fbi/sapi/api/police-employment/states/${args.stateAbbr}?api_key=${APIKEY}`);
      return response.json();
    },
    getAgency: async (parent, args) => {
      const response = await 
      fetch(`https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/${args.stateAbbr}?api_key=${APIKEY}`);
      return response.json();
    },
    getAgencies: async (parent, args) => {
      const response = await 
      fetch(`https://api.usa.gov/crime/fbi/sapi/api/agencies/?api_key=${APIKEY}`);
      return response.json();
    },
  }
};

// Exports
export default RESOLVERS;