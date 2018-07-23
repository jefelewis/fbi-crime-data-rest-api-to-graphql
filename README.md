# Federal Bureau of Investigation (FBI) Crime Data Explorer GraphQL Server
Operation Refactor America's wrapped Federal Bureau of Investigation (FBI) Crime Data Explorer REST API with GraphQL. The REST endpoints have been mapped as GraphQL types and resolvers. Note: Using this API requires a free API Key, which can be acquired here: https://api.data.gov/signup/. Once recieved, go to ./config/config.js and enter the API key into APIKEY.

If you'd like to contribute to this project, please fork this repository over and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
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
*  [Example GraphQL Queries](#example-graphql-queries)

## About the Data
The data comes directly from the Federal Bureau of Investigation's REST API. A summary of endpoints and documentation can be found here: https://crime-data-explorer.fr.cloud.gov/api

## Using the GraphQL API
npm run server
http://localhost:4000/graphiql

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


## Example GraphQL Queries
### Example Query: Number of all Burglary Victims (Annually)
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

### Example Query: Number of all Burglary Victims in the Midwest Region (Annually)
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


### Example Query: Number of all Burglary Victims in the state of Texas (Annually)
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
