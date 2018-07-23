# Federal Bureau of Investigation (FBI) Crime Data Explorer GraphQL Server
Operation Refactor America's wrapped Federal Bureau of Investigation (FBI) Crime Data Explorer REST API with GraphQL. The REST endpoints have been mapped as GraphQL types and resolvers. If you'd like to contribute to this project, please fork this repository over and submit a pull request.

## On This Page
*  [About the GraphQL API](#about-the-api)
*  [About the Data](#about-the-data)
*  [Using the GraphQL API](#using-the-graphql-api)
*  [Testing the API Endpoints](#testing-the-api-endpoints)
*  [API Data Model](#api-data-model)
*  [Example GraphQL Queries](#example-graphql-queries)


## About the API
### Victim Data
Victim Data requires a selection for each three categories:

#### Category #1 (Geographic Level):
United States
Region
State

#### Category #2 (Offense):
Aggravated-Assualt
Arson
Burglary
Homicide
Larceny
Motor-Vehicle-Theft
Property-Crime
Rape
Robbery
Violent-Crime

#### Category #3 (Variable):
Age
Count
Ethnicity
Race
Sex
Relationship



## About the Data



## Using the GraphQL API
npm run server
http://localhost:4000/graphiql


## Testing the API Endpoints
npm jest


## API Data Model
*   **Id** - A unique identifier for each directory record
*   **Name** – The name of the corporation.
*   **Description** – Any notes about contacting the corporation.
*   **Subdivision** – Used for mailing letters to the corporation..
*   **Street1** – A first line of address information (such as the street address) for contacting the corporation.
*   **Street2** – A second line of address information for contacting the corporation.
*   **City** – The city of the corporation's mailing address.
*   **StateTer** – The state of the corporation's mailing address.
*   **Zip** – The postal zip code of the corporation's mailing address.
*   **Email** – The e-mail address for contacting the corporation.
*   **Phone** – The phone number to be used when contacting the corporation (may contain more than one).
*   **TTY** – The TTY number to be used when contacting the corporation (may contain more than one).
*   **Tollfree** – The toll-free number to be used when contacting the corporation (may contain more than one).
*   **URI** – The URL to access the corporation’s complete directory record via the API.

## Example GraphQL Queries

The Contacts endpoint will return an array of objects, such as:
