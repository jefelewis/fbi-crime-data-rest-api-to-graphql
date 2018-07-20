// getArsonByState(stateAbbr: String): Arson
// getPoliceEmploymentByState(stateAbbr: String): PoliceEmployment
// getAllAgencies: AgencyState

// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getAgencyByState(stateAbbr: String): [AgencyByState]
    getAllParticipation: ParticipationByNational
    getParticipationByRegion(regionName: String): ParticipationByRegion
    getParticipationByState(stateAbbreviation: String): ParticipationByState
  }

  type Pagination {
    count: Int
    page: Int
    pages: Int
    per_page: Int
  }

  type ParticipationByNational {
    results: [AllParticipation]
    pagination: Pagination
  }

  type ParticipationByRegion {
    results: [RegionParticipation]
    pagination: Pagination
  }

  type ParticipationByState {
    results: [StateParticipation]
    pagination: Pagination
  }

  type AllParticipation {
    data_year: Int
    population: Int
    total_agency_count: Int
    published_agency_count: Int
    active_agency_count: Int
    covered_agency_count: Int
    population_covered: Int
    agency_count_nibrs_submitting: Int
    agency_count_leoka_submitting: Int
    agency_count_pe_submitting: Int
    agency_count_srs_submitting: Int
    csv_header: String
  }

  type StateParticipation {
    data_year: Int
    population: Int
    total_agency_count: Int
    published_agency_count: Int
    active_agency_count: Int
    covered_agency_count: Int
    population_covered: Int
    agency_count_nibrs_submitting: Int
    agency_count_leoka_submitting: Int
    agency_count_pe_submitting: Int
    agency_count_srs_submitting: Int
    state_id: Int
    state_abbr: String
    csv_header: String
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
    latitude: Int
    longitude: Int
  }
`;


// Exports
export default TYPEDEFS;