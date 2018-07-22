// getAllAgencies: AgencyState
// getAgencyByState(stateAbbr: String): [AgencyByState]

// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {

    getAllVictimData(offense: String, variable: String): Victim


    getVictimDataByRegion(offense: String, regionName: String, variable: String): Victim
    getVictimDataByState(offense: String, stateAbbreviation: String): Victim


    getAllParticipationData: AllParticipation
    getParticipationDataByRegion(regionName: String): ParticipationByRegion
    getParticipationDataByState(stateAbbreviation: String): ParticipationByState

    getVariableLookupForAgencies: AgencyLookup

    

    getAllWeaponOffenseData(offense: String): AllWeaponOffense
    getWeaponOffenseDataByRegion(offense: String, regionName: String): WeaponOffenseByRegion
    getWeaponOffenseDataByState(offense: String, stateAbbreviation: String): WeaponOffenseByState   

    getAllPoliceEmploymentData: AllPoliceEmployment
    getPoliceEmploymentDataByRegion(regionName: String): PoliceEmploymentByRegion
    getPoliceEmploymentDataByState(stateAbbreviation: String): PoliceEmploymentByState

    getAllArsonData: AllArson
    getArsonDataByRegion(regionName: String): ArsonByRegion
    getArsonDataByState(stateAbbreviation: String): ArsonByState

    getAllEstimateData: AllEstimate
    getEstimateDataByRegion(regionName: String): EstimateByRegion
    getEstimateDataByState(stateAbbreviation: String): EstimateByState
  }

  type Pagination {
    count: Int
    page: Int
    pages: Int
    per_page: Int
  }

  type Victim {
    ui_type: String
    noun: String
    title: String
    short_title: String
    data: [VictimData]
  }

  type VictimData {
    value: Int
    data_year: Int
    key_type: String
    key: String
  }

  type AllParticipation {
    results: [AllParticipationData]
    pagination: Pagination
  }

  type ParticipationByRegion {
    results: [RegionParticipationData]
    pagination: Pagination
  }

  type ParticipationByState {
    results: [StateParticipationData]
    pagination: Pagination
  }

  type AllParticipationData {
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

  type RegionParticipationData {
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
    region_code: Int
    region_name: String
    csv_header: String
  }

  type StateParticipationData {
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








  type AllWeaponOffense {
    uri_type: String
    noun: String
    category: String
    title: String
    short_title: String
    data: [AllWeaponOffenseData]
  }

  type WeaponOffenseByRegion {
    uri_type: String
    noun: String
    category: String
    title: String
    short_title: String
    data: [RegionWeaponOffenseData]
  }

  type WeaponOffenseByState {
    uri_type: String
    noun: String
    category: String
    title: String
    short_title: String
    data: [StateWeaponOffenseData]
  }

  type AllWeaponOffenseData {
    value: Int
    data_year: Int
    key_type: String
    key: String
  }

  type RegionWeaponOffenseData {
    value: Int
    data_year: Int
    key_type: String
    key: String
  }

  type StateWeaponOffenseData {
    value: Int
    data_year: Int
    key_type: String
    key: String
  }









  type AgencyLookup {
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

  type AllPoliceEmployment {
    results: [AllPoliceEmploymentData]
    pagination: Pagination
  }

  type PoliceEmploymentByRegion {
    results: [PoliceEmploymentByRegionData]
    pagination: Pagination
  }

  type PoliceEmploymentByState {
    results: [PoliceEmploymentByStateData]
    pagination: Pagination
  }

  type AllPoliceEmploymentData {
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
    pe_ct_per_1000: String
  }

  type PoliceEmploymentByRegionData {
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
    region_code: Int
    region_name: String
    pe_ct_per_1000: String
  }

  type PoliceEmploymentByStateData {
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
    state_name: String
    state_abb: String
    pe_ct_per_1000: String
  }


  type AllArson {
    results: [AllArsonData]
    pagination: Pagination
  }

  type AllArsonData {
    grouping_bitmap: Int
    year: Int
    state_abbr: String
    ori: String
    reported: Int
    unfounded: Int
    actual: Int
    cleared: Int
    juvenile_cleared: Int
    uninhabited: Int
    est_damage_value: Int
  }
  
  type ArsonByRegion {
    results: [RegionArsonData]
    pagination: Pagination
  }

  type RegionArsonData {
    grouping_bitmap: Int
    year: Int
    state_abbr: String
    ori: String
    reported: Int
    unfounded: Int
    actual: Int
    cleared: Int
    juvenile_cleared: Int
    uninhabited: Int
    est_damage_value: Int
  }
  

  type ArsonByState {
    results: [StateArsonData]
    pagination: Pagination
  }

  type StateArsonData {
    grouping_bitmap: Int
    year: Int
    state_abbr: String
    ori: String
    reported: Int
    unfounded: Int
    actual: Int
    cleared: Int
    juvenile_cleared: Int
    uninhabited: Int
    est_damage_value: Int
  }




  type AllEstimate {
    results: [AllEstimateData]
    pagination: Pagination
  }

  type AllEstimateData {
    state_abbr: String
    year: Int
    population: Int
    violent_crime: Int
    homicide: Int
    rape_legacy: Int
    rape_revised: Int
    robbery: Int
    aggravated_assault: Int
    property_crime: Int
    burglary: Int
    larceny: Int
    motor_vehicle_theft: Int
    arson: Int
  }
  
  type EstimateByRegion {
    results: [RegionEstimateData]
    pagination: Pagination
  }

  type RegionEstimateData {
    state_id: Int
    state_abbr: String
    year: Int
    population: Int
    violent_crime: Int
    homicide: Int
    rape_legacy: Int
    rape_revised: Int
    robbery: Int
    aggravated_assault: Int
    property_crime: Int
    burglary: Int
    larceny: Int
    motor_vehicle_theft: Int
    arson: Int
  }
  

  type EstimateByState {
    results: [StateEstimateData]
    pagination: Pagination
  }

  type StateEstimateData {
    state_id: Int
    state_abbr: String
    year: Int
    population: Int
    violent_crime: Int
    homicide: Int
    rape_legacy: Int
    rape_revised: Int
    robbery: Int
    aggravated_assault: Int
    property_crime: Int
    burglary: Int
    larceny: Int
    motor_vehicle_theft: Int
    arson: Int
  }
`;


// Exports
export default TYPEDEFS;