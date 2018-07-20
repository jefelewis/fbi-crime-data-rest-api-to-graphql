{
  getParticipationByState(stateAbbreviation: "CA") {
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