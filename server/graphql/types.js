// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getArsonByState(stateAbbr: String): Arson
    getPoliceEmploymentByState(stateAbbr: String): PoliceEmployment
    getAgencyByState(stateAbbr: String): [Agency]
    getAllAgencies: AgencyState
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

  type PoliceEmployment {
    data_year: Int
    civilian_ct: Int
    female_civilian_ct: Int
    female_officer_ct: Int
    female_total_ct: Int
    male_civilian_ct: Int
    male_officer_ct: Int
    male_total_ct: Int
    population: Int
    total_pe_ct: Int
    state_id: Int
    state_name: String
    state_abbr: String
    pe_ct_per_1000: Int
  }

  type AgencyState {
    ori: Ori
  }

  type Ori {
    agency: Agency
  }

  type Agency {
    ori: String
    agency_name: String
    agency_type_name: String
    state_name: String
    state_abbr: String
    division_name: String
    region_name: String
    region_desc: String
    county_name: String
    nibrs: Boolean
    latitude: String
    longitude: String
  }


`;


// Exports
export default TYPEDEFS;