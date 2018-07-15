// Imports: Node Fetch
const fetch = require('node-fetch');

import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Wrapped GraphQL REST APIs/fbi-crime-data-rest-api-to-graphql/config/config.js'


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getArson: async (parent, args) => {
      const response = await 
      fetch(`https://api.usa.gov/crime/fbi/sapi/api/arson/states/CA?api_key=nVpjUwkbXUEb3IQZDmThbZ1SLsBruEnBoZpxfxxj`);
      return response.json();
    }
  }
};

// Exports
export default RESOLVERS;