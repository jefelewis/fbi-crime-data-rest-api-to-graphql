{
  getParticipationByState(stateAbbreviation: "ca") {
    results {
      state_id
      state_abbr
      data_year
      population
    }
    pagination{
    	count
      page
      pages
      per_page
    }
  }
}

{
  getParticipationByRegion(regionName: "west") {
    results {
      data_year
      population
      total_agency_count
      published_agency_count
      active_agency_count
      active_agency_count
      population
      agency_count_nibrs_submitting
      agency_count_leoka_submitting
      agency_count_pe_submitting
      agency_count_srs_submitting
      region_code
      region_name
      csv_header
    }
    pagination {
      count
      page
      pages
      per_page
    }
  }
}