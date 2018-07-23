# Federal Bureau of Investigation (FBI) Crime Data Explorer GraphQL Server
Operation Refactor America's wrapped Federal Bureau of Investigation (FBI) Crime Data Explorer REST API with GraphQL. The REST endpoints have been mapped as GraphQL types and resolvers. **Note: Using this API requires a free API Key,** which can be acquired here: https://api.data.gov/signup/. Once recieved, go to ./config/config.js and enter the API key into APIKEY.

If you'd like to contribute to this project, please fork this repository over and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [GraphQL Server: Apollo Server](#graphql-server-apollo-server)
*  [GraphQL Server: Start](#graphql-server-start)
*  [GraphQL Server: Query](#graphql-server-query)
*  [GraphQL Server: Testing API Endpoints](#graphql-server-testing-api-endpoints)
*  [API Data: Victim Data](#api-data-victim-data)
*  [API Data: Offender Data](#api-data-offender-data)
*  [API Data: Participation Data](#api-data-participation-data)
*  [API Data: Offense Data](#api-data-offense-data)
*  [API Data: Linked Offense Data](#api-data-linked-offense-data)
*  [API Data: Weapons Offense Data](#api-data-weapons-offense-data)
*  [API Data: Police Employment Data](#api-data-police-employment-data)
*  [API Data: Arson Data](#api-data-arson-data)
*  [API Data: Estimate Data](#api-data-estimate-data)
*  [GraphQL Query Examples](#graphql-query-examples)

## About the Data
The data comes directly from the Federal Bureau of Investigation's REST API. A summary of endpoints and documentation can be found here: https://crime-data-explorer.fr.cloud.gov/api

## GraphQL Server: Apollo Server
This GraphQL server uses apollo-server-express and not Facebook's graphql-express.

## GraphQL Server: Start
    npm run server

## GraphQL Server: Query
    http://localhost:4000/graphiql

## GraphQL Server: Testing API Endpoints
    npm jest

## API Data: Victim Data
Note: Victim Data **requires one selection for each of the three categories**:

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)

**Category #2 (Offense):**
*  Aggravated-Assualt
*  Arson
*  Burglary
*  Homicide
*  Larceny
*  Motor-Vehicle-Theft
*  Property-Crime
*  Rape
*  Robbery
*  Violent-Crime

**Category #3 (Variable):**
*  Age
*  Count
*  Ethnicity
*  Race
*  Sex
*  Relationship



## API Data: Offender Data
Note: Offender Data **requires one selection for each of the three categories**:

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)

**Category #2 (Offense):**
*  Aggravated-Assualt
*  Arson
*  Burglary
*  Homicide
*  Larceny
*  Motor-Vehicle-Theft
*  Property-Crime
*  Rape
*  Robbery
*  Violent-Crime

**Category #3 (Variable):**
*  Age
*  Count
*  Ethnicity
*  Race
*  Sex
*  Relationship



## API Data: Participation Data
Note: Participation Data **requires ONE selection for ONE category**:

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)



## API Data: Offense Data
Note: Offense Data **requires ONE selection for the ONE category.** The API only returns Offense data using the count variable, so category #3 is not needed.

**Category #1 (Geographic Level) (NOT REQUIRED FOR AGENCY):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)

**Category #2 (Originating Agency Identification) (ONLY REQUIRED FOR AGENCY):**
*  Ori (These can be found when running)



## API Data: Linked Offense Data
Note: Linked Offense Data **requires ONE selection for each of the TWO categories.** The API only returns Linked Offense data using the count variable, so category #3 is not needed.

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)

**Category #2 (Offense):**
*  Aggravated-Assualt
*  Arson
*  Burglary
*  Homicide
*  Larceny
*  Motor-Vehicle-Theft
*  Property-Crime
*  Rape
*  Robbery
*  Violent-Crime



## API Data: Weapons Offense Data
Note: Weapons Offense Data **requires ONE selection for each of the TWO categories.** The API only returns Weapons Offense data using the count variable, so category #3 is not needed.

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)

**Category #2 (Offense):**
*  Aggravated-Assualt
*  Arson
*  Burglary
*  Homicide
*  Larceny
*  Motor-Vehicle-Theft
*  Property-Crime
*  Rape
*  Robbery
*  Violent-Crime



## API Data: Police Employment Data
Note: Police Employment Data **requires ONE selection for the ONE category.**

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)

**Category #2 (Originating Agency Identification) (ONLY REQUIRED FOR AGENCY):**
*  Ori (These can be found when running)



## API Data: Arson Data
Note: Arson Data **requires ONE selection for the ONE category.**

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)



## API Data: Estimate Data
Note: Estimate Data **requires ONE selection for the ONE category.**

**Category #1 (Geographic Level):**
*  United States (Note: No GraphQL argument required since there's only one country)
*  Region (Northeast, West, South, Midwest)
*  State Abbreviation (Note: Some states don't provide data)


## GraphQL Query Examples
### Example #1: Number of all Burglary Victims (Annually)
**Query:**

    {
      getAllVictimData(offense: "burglary", variable: "count") {
        noun
        ui_type
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

**GraphQL Result:**

    {
      "data": {
        "getAllVictimData": {
          "noun": null,
          "ui_type": "text",
          "title": "Victim Count",
          "short_title": null,
          "data": [
            {
              "value": 1301920,
              "data_year": 2006,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1635462,
              "data_year": 2007,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1992726,
              "data_year": 2008,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 2165776,
              "data_year": 2009,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 2025232,
              "data_year": 2010,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 2205040,
              "data_year": 2011,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 2147740,
              "data_year": 2012,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1857727,
              "data_year": 2013,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1474746,
              "data_year": 2014,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1712404,
              "data_year": 2015,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1164996,
              "data_year": 2016,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 64854,
              "data_year": 2003,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 109620,
              "data_year": 2004,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 84105,
              "data_year": 2005,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 12976,
              "data_year": 2002,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 2023704,
              "data_year": 2001,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 437166,
              "data_year": 2000,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 2411,
              "data_year": 1999,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1352000,
              "data_year": 1997,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 1920850,
              "data_year": 1998,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 23368,
              "data_year": 1995,
              "key_type": null,
              "key": "Count"
            },
            {
              "value": 14760,
              "data_year": 1996,
              "key_type": null,
              "key": "Count"
            }
          ]
        }
      }
    }


### Example #2: Retrieve Agency by Originating Agency Identification (ORI)
**Query:**

    {
      getAgencyByOri(ori: "HI0010100") {
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

**GraphQL Result:**

    {
      "data": {
        "getAgencyByOri": {
          "ori": "HI0010100",
          "agency_name": "Hilo Police Department",
          "agency_type_name": "City",
          "state_name": "Hawaii",
          "state_abbr": "HI",
          "division_name": "Pacific",
          "region_name": "West",
          "region_desc": "Region IV",
          "county_name": "",
          "nibrs": false,
          "latitude": "19.716698",
          "longitude": "-155.08688"
        }
      }
    }    


### Example #3: Number of all Homicide Victims in the Arizona by Age Range (Annually)
**Query:**

    {
      getVictimDataByState(stateAbbreviation:"az", offense: "homicide", variable: "age") {
        noun
        ui_type
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

**GraphQL Result:**

    {
      "data": {
        "getVictimDataByState": {
          "noun": "Victim",
          "ui_type": "basic_table",
          "title": "Victim Age",
          "short_title": "Age",
          "data": [
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 1,
              "data_year": 2007,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 1,
              "data_year": 2008,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 2,
              "data_year": 2009,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 1,
              "data_year": 2010,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 1,
              "data_year": 2011,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 1,
              "data_year": 2012,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 4,
              "data_year": 2013,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 4,
              "data_year": 2014,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 1,
              "data_year": 2016,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 0,
              "data_year": 2007,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1,
              "data_year": 2008,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 0,
              "data_year": 2010,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1,
              "data_year": 2011,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1,
              "data_year": 2012,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 3,
              "data_year": 2013,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 0,
              "data_year": 2014,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 2,
              "data_year": 2015,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1,
              "data_year": 2016,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 5,
              "data_year": 2007,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 1,
              "data_year": 2008,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 4,
              "data_year": 2009,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3,
              "data_year": 2010,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2,
              "data_year": 2011,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2,
              "data_year": 2012,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3,
              "data_year": 2013,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 1,
              "data_year": 2014,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 4,
              "data_year": 2015,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2,
              "data_year": 2016,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 1,
              "data_year": 2005,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1,
              "data_year": 2006,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1,
              "data_year": 2007,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1,
              "data_year": 2008,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 2,
              "data_year": 2009,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5,
              "data_year": 2010,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 0,
              "data_year": 2011,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1,
              "data_year": 2012,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 0,
              "data_year": 2013,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1,
              "data_year": 2014,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3,
              "data_year": 2016,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1,
              "data_year": 2005,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 2,
              "data_year": 2007,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 2,
              "data_year": 2009,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 0,
              "data_year": 2010,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3,
              "data_year": 2011,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3,
              "data_year": 2012,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 1,
              "data_year": 2013,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3,
              "data_year": 2014,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 1,
              "data_year": 2015,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 1,
              "data_year": 2016,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2007,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1,
              "data_year": 2010,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3,
              "data_year": 2011,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2012,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1,
              "data_year": 2013,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2014,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1,
              "data_year": 2016,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1,
              "data_year": 2006,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1,
              "data_year": 2007,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 0,
              "data_year": 2010,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 2,
              "data_year": 2011,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1,
              "data_year": 2012,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1,
              "data_year": 2013,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 0,
              "data_year": 2014,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 3,
              "data_year": 2015,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1,
              "data_year": 2016,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2007,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2010,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 2,
              "data_year": 2011,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2012,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2013,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2014,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2016,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2007,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2010,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2011,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2012,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2013,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2014,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 1,
              "data_year": 2016,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2007,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2010,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2011,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2012,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2013,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2014,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2016,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 0,
              "data_year": 2005,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2006,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2007,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2008,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2009,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 1,
              "data_year": 2010,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2011,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2012,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2013,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 1,
              "data_year": 2014,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2015,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 0,
              "data_year": 2016,
              "key_type": null,
              "key": "Unknown"
            }
          ]
        }
      }
    }