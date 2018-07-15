// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getPokemon(id: Int!): Pokemon
    getAllPokemon: Pokemon
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    is_default: Boolean
    order: Int
    weight: String
    abilities: [Abilities]
    held_items: String
    location_area_encounters: String
    moves: [Moves]
    species: [Species]
    stats: [Stats]
    types: [Types]
  }
`;


// Exports
export default TYPEDEFS;