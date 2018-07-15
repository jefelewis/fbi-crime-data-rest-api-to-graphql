// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getArson(state_abbr: String): Arson
  }

  type Arson {
    grouping_bitmap: Int
    year: Int
    state_abbr: String
    reported: Int
    unfounded: Int
    actual: Int
    cleared: Int
    juvenile_cleared: Int
    uninhabited: Int
    est_damage_value: Int
  }
`;


// Exports
export default TYPEDEFS;