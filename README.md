# Federal Bureau of Investigation (FBI) Crime Data Explorer GraphQL Server
Operation Refactor America's wrapped Federal Bureau of Investigation (FBI) Crime Data Explorer REST API with GraphQL. The REST endpoints have been mapped as GraphQL types and resolvers. Note: Using this API requires a free API Key, which can be acquired here: https://api.data.gov/signup/. Once recieved, go to ./config/config.js and enter the API key into APIKEY.

If you'd like to contribute to this project, please fork this repository over and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [About GraphQL Packages Used](#about-graphql-packages-used)
*  [Using the GraphQL API](#using-the-graphql-api)
*  [Testing the API Endpoints](#testing-the-api-endpoints)
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

## About GraphQL Packages Used
*  **GraphQL Server:** Apollo Server

## Using the GraphQL API
    **Start GraphQL Server:** npm run server
    **Create GraphQL Queries:** http://localhost:4000/graphiql

## Testing the API Endpoints
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


### Example #2: Number of all Burglary Victims in the Midwest Region (Annually)
**Query:**

    {
      getVictimDataByRegion(regionName:"midwest", offense: "burglary", variable: "count") {
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


### Example #3: Number of all Burglary Victims in the state of Texas (Annually)
**Query:**

    {
      getVictimDataByState(stateAbbreviation:"tx", offense: "burglary", variable: "count") {
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
              "value": 5,
              "data_year": 1997,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 12,
              "data_year": 1998,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 14,
              "data_year": 1999,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 21,
              "data_year": 2000,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 25,
              "data_year": 2001,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 18,
              "data_year": 2002,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 9,
              "data_year": 2003,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 10,
              "data_year": 2004,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 7,
              "data_year": 2005,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 33,
              "data_year": 2006,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 30,
              "data_year": 2007,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 23,
              "data_year": 2008,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 39,
              "data_year": 2009,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 22,
              "data_year": 2010,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 39,
              "data_year": 2011,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 24,
              "data_year": 2012,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 33,
              "data_year": 2013,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 31,
              "data_year": 2014,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 32,
              "data_year": 2015,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 39,
              "data_year": 2016,
              "key_type": null,
              "key": "0-9"
            },
            {
              "value": 142,
              "data_year": 1997,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 440,
              "data_year": 1998,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 437,
              "data_year": 1999,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 500,
              "data_year": 2000,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 677,
              "data_year": 2001,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 852,
              "data_year": 2002,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 642,
              "data_year": 2003,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 569,
              "data_year": 2004,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 785,
              "data_year": 2005,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1093,
              "data_year": 2006,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1148,
              "data_year": 2007,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1086,
              "data_year": 2008,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 1091,
              "data_year": 2009,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 931,
              "data_year": 2010,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 885,
              "data_year": 2011,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 864,
              "data_year": 2012,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 624,
              "data_year": 2013,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 530,
              "data_year": 2014,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 591,
              "data_year": 2015,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 615,
              "data_year": 2016,
              "key_type": null,
              "key": "10-19"
            },
            {
              "value": 598,
              "data_year": 1997,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 1947,
              "data_year": 1998,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2341,
              "data_year": 1999,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2380,
              "data_year": 2000,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3177,
              "data_year": 2001,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3687,
              "data_year": 2002,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2671,
              "data_year": 2003,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 2645,
              "data_year": 2004,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3406,
              "data_year": 2005,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 5303,
              "data_year": 2006,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 5525,
              "data_year": 2007,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 5721,
              "data_year": 2008,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 6313,
              "data_year": 2009,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 5515,
              "data_year": 2010,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 5507,
              "data_year": 2011,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 4749,
              "data_year": 2012,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 4105,
              "data_year": 2013,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3655,
              "data_year": 2014,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3508,
              "data_year": 2015,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 3323,
              "data_year": 2016,
              "key_type": null,
              "key": "20-29"
            },
            {
              "value": 575,
              "data_year": 1997,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 1983,
              "data_year": 1998,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 2394,
              "data_year": 1999,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 2321,
              "data_year": 2000,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3178,
              "data_year": 2001,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3460,
              "data_year": 2002,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 2781,
              "data_year": 2003,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 2630,
              "data_year": 2004,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3304,
              "data_year": 2005,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5312,
              "data_year": 2006,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5298,
              "data_year": 2007,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5532,
              "data_year": 2008,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5845,
              "data_year": 2009,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5303,
              "data_year": 2010,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 5439,
              "data_year": 2011,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 4852,
              "data_year": 2012,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 4322,
              "data_year": 2013,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3845,
              "data_year": 2014,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3704,
              "data_year": 2015,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 3570,
              "data_year": 2016,
              "key_type": null,
              "key": "30-39"
            },
            {
              "value": 475,
              "data_year": 1997,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 1521,
              "data_year": 1998,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 1949,
              "data_year": 1999,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 1902,
              "data_year": 2000,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 2869,
              "data_year": 2001,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3177,
              "data_year": 2002,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 2653,
              "data_year": 2003,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 2722,
              "data_year": 2004,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3508,
              "data_year": 2005,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 5057,
              "data_year": 2006,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 5166,
              "data_year": 2007,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 4974,
              "data_year": 2008,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 5254,
              "data_year": 2009,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 4880,
              "data_year": 2010,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 4801,
              "data_year": 2011,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 4169,
              "data_year": 2012,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3710,
              "data_year": 2013,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3154,
              "data_year": 2014,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 3152,
              "data_year": 2015,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 2953,
              "data_year": 2016,
              "key_type": null,
              "key": "40-49"
            },
            {
              "value": 245,
              "data_year": 1997,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 790,
              "data_year": 1998,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1050,
              "data_year": 1999,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1028,
              "data_year": 2000,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1695,
              "data_year": 2001,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1982,
              "data_year": 2002,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1793,
              "data_year": 2003,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 1787,
              "data_year": 2004,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 2148,
              "data_year": 2005,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3387,
              "data_year": 2006,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3562,
              "data_year": 2007,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3523,
              "data_year": 2008,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3916,
              "data_year": 2009,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3608,
              "data_year": 2010,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3918,
              "data_year": 2011,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3502,
              "data_year": 2012,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 3058,
              "data_year": 2013,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 2914,
              "data_year": 2014,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 2777,
              "data_year": 2015,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 2633,
              "data_year": 2016,
              "key_type": null,
              "key": "50-59"
            },
            {
              "value": 95,
              "data_year": 1997,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 366,
              "data_year": 1998,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 453,
              "data_year": 1999,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 459,
              "data_year": 2000,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 775,
              "data_year": 2001,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 865,
              "data_year": 2002,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 813,
              "data_year": 2003,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 899,
              "data_year": 2004,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1161,
              "data_year": 2005,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1654,
              "data_year": 2006,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1812,
              "data_year": 2007,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1775,
              "data_year": 2008,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 2040,
              "data_year": 2009,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1939,
              "data_year": 2010,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 2207,
              "data_year": 2011,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 2036,
              "data_year": 2012,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1874,
              "data_year": 2013,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1707,
              "data_year": 2014,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1758,
              "data_year": 2015,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 1762,
              "data_year": 2016,
              "key_type": null,
              "key": "60-69"
            },
            {
              "value": 61,
              "data_year": 1997,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 216,
              "data_year": 1998,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 255,
              "data_year": 1999,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 287,
              "data_year": 2000,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 439,
              "data_year": 2001,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 472,
              "data_year": 2002,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 494,
              "data_year": 2003,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 462,
              "data_year": 2004,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 605,
              "data_year": 2005,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 839,
              "data_year": 2006,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 850,
              "data_year": 2007,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 781,
              "data_year": 2008,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 779,
              "data_year": 2009,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 807,
              "data_year": 2010,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 890,
              "data_year": 2011,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 850,
              "data_year": 2012,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 836,
              "data_year": 2013,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 823,
              "data_year": 2014,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 753,
              "data_year": 2015,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 826,
              "data_year": 2016,
              "key_type": null,
              "key": "70-79"
            },
            {
              "value": 22,
              "data_year": 1997,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 98,
              "data_year": 1998,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 116,
              "data_year": 1999,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 106,
              "data_year": 2000,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 171,
              "data_year": 2001,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 191,
              "data_year": 2002,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 192,
              "data_year": 2003,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 202,
              "data_year": 2004,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 232,
              "data_year": 2005,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 342,
              "data_year": 2006,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 407,
              "data_year": 2007,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 318,
              "data_year": 2008,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 356,
              "data_year": 2009,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 358,
              "data_year": 2010,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 371,
              "data_year": 2011,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 307,
              "data_year": 2012,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 347,
              "data_year": 2013,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 311,
              "data_year": 2014,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 267,
              "data_year": 2015,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 288,
              "data_year": 2016,
              "key_type": null,
              "key": "80-89"
            },
            {
              "value": 3,
              "data_year": 1997,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 16,
              "data_year": 1998,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 15,
              "data_year": 1999,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 9,
              "data_year": 2000,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 33,
              "data_year": 2001,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 26,
              "data_year": 2002,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 31,
              "data_year": 2003,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 34,
              "data_year": 2004,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 31,
              "data_year": 2005,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 66,
              "data_year": 2006,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 68,
              "data_year": 2007,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 42,
              "data_year": 2008,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 53,
              "data_year": 2009,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 46,
              "data_year": 2010,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 61,
              "data_year": 2011,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 64,
              "data_year": 2012,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 47,
              "data_year": 2013,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 56,
              "data_year": 2014,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 44,
              "data_year": 2015,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 50,
              "data_year": 2016,
              "key_type": null,
              "key": "90-99"
            },
            {
              "value": 137,
              "data_year": 1997,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 504,
              "data_year": 1998,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 645,
              "data_year": 1999,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 773,
              "data_year": 2000,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 717,
              "data_year": 2001,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 798,
              "data_year": 2002,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 364,
              "data_year": 2003,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 281,
              "data_year": 2004,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 367,
              "data_year": 2005,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 341,
              "data_year": 2006,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 532,
              "data_year": 2007,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 470,
              "data_year": 2008,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 478,
              "data_year": 2009,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 430,
              "data_year": 2010,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 446,
              "data_year": 2011,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 422,
              "data_year": 2012,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 353,
              "data_year": 2013,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 265,
              "data_year": 2014,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 209,
              "data_year": 2015,
              "key_type": null,
              "key": "Unknown"
            },
            {
              "value": 241,
              "data_year": 2016,
              "key_type": null,
              "key": "Unknown"
            }
          ]
        }
      }
    }
