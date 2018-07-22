{
  getAllWeaponOffenseData (offense: "aggravated-assault"){
    uri_type
    noun
    category
    title
    short_title
    data {
     value
      data_year
      key_type
      key
    }
  }
}

{
  getOffenseDataByRegion (offense: "burglary", regionName: "west"){
    uri_type
    noun
    category
    title
    short_title
    data{
     	value
      data_year
      key_type
      key
    }
  }
}

{
  getWeaponOffenseDataByState(stateAbbreviation: "TX", offense: "aggravated-assault"){
    uri_type
    noun
    category
    title
    short_title
    data {
      value
      data_year
      key_type
      key
    }
  }
}



{
  getWeaponOffenseDataByState(stateAbbreviation: "ca", offense: "aggravated-assault"){
    uri_type
    noun
    category
    title
    short_title
    data {
      value
      data_year
      key_type
      key
    }
  }
}




{
  getParticipationDataByState(stateAbbreviation: "ca") {
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
  getParticipatioDatanByRegion(regionName: "west") {
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




{
  getAllVictimData(offense: "burglary", variable: "sex") {
    ui_type
    noun
    title
    short_title
    data {
      value
      data_year
      key_type
      key
    }
  }
}




{
  getVariableLookupForAgencies {
    ori {
     agency {
    	ori
    	agency_name
    	agency_type_name
    	state_name
      state_abbr
      division_name
      region_name
      region_desc
      county_name
      nibrs
      latitude
      longitude
    }
    } 
  }
}



{
  getAllPoliceEmploymentData {
  	pagination {
  	  count
  	  page
  	  pages
  	  per_page
  	}
  	results {
      data_year
      civilian_ct
      female_civilian_ct
      female_officer_ct
      female_total_ct
      male_civilian_ct
      male_officer_ct
      male_total_ct
      population
      total_pe_ct
      pe_ct_per_1000
    }
  }
}




{
  getPoliceEmploymentDataByRegion(regionName: "midwest") {
  	pagination {
  	  count
  	  page
  	  pages
  	  per_page
  	}
  	results {
      data_year
      civilian_ct
      female_civilian_ct
      female_officer_ct
      female_total_ct
      male_civilian_ct
      male_officer_ct
      male_total_ct
      population
      total_pe_ct
      region_code
      region_name
      pe_ct_per_1000
    }
  }
}




{
  getPoliceEmploymentDataByState(stateAbbreviation: "CA") {
  	pagination {
  	  count
  	  page
  	  pages
  	  per_page
  	}
  	results {
      data_year
      civilian_ct
      female_civilian_ct
      female_officer_ct
      female_total_ct
      male_civilian_ct
      male_officer_ct
      male_total_ct
      population
      total_pe_ct
			state_name
      state_abb
      pe_ct_per_1000
    }
  }
}



{
  getAllArsonData {
   pagination {
    count
    page
    pages
    per_page
  }
    results {
      grouping_bitmap
      year
      state_abbr
      ori
      reported
      unfounded
      actual
      cleared
      juvenile_cleared
      uninhabited
      est_damage_value
    }
  }

{
  getArsonDataByState(stateAbbreviation: "CA") {
    pagination {
      count
      page
      pages
      per_page
    }
    results {
      grouping_bitmap
      year
      state_abbr
      ori
      reported
      unfounded
      actual
      cleared
      juvenile_cleared
      uninhabited
      est_damage_value
    }
  }
}

{
  getArsonDataByRegion(regionName: "west") {
    pagination {
      count
      page
      pages
      per_page
    }
    results {
      grouping_bitmap
      year
      state_abbr
      ori
      reported
      unfounded
      actual
      cleared
      juvenile_cleared
      uninhabited
      est_damage_value
    }
  }
}


{
  getAllEstimateData {
  	pagination {
  	  count
  	  page
  	  pages
  	  per_page
  	}
  	results {
    	state_abbr
      year
      population
      violent_crime
      homicide
      rape_legacy
      rape_revised
      robbery
      aggravated_assault
      property_crime
      burglary
      larceny
      motor_vehicle_theft
      arson
    }
  }
}


{
  getEstimateDataByState (stateAbbreviation: "CA"){
  	pagination {
  	  count
  	  page
  	  pages
  	  per_page
  	}
  	results {
      state_id
    	state_abbr
      year
      population
      violent_crime
      homicide
      rape_legacy
      rape_revised
      robbery
      aggravated_assault
      property_crime
      burglary
      larceny
      motor_vehicle_theft
      arson
    }
  }
}

{
  getEstimateDataByRegion (regionName: "west"){
  	pagination {
  	  count
  	  page
  	  pages
  	  per_page
  	}
  	results {
      state_id
    	state_abbr
      year
      population
      violent_crime
      homicide
      rape_legacy
      rape_revised
      robbery
      aggravated_assault
      property_crime
      burglary
      larceny
      motor_vehicle_theft
      arson
    }
  }
}

}