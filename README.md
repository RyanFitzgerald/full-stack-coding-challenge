## Full Stack Coding Challenge

### Submission Details

#### Client Setup

1. Install required dependencies by running ```npm install```
2. Rename ```config.sample.js``` to ```config.js``` and add the Google Geocode API Key 
3. Run ```npm start``` to start the React app, accessible at https://localhost:3000

**Optional:** To load data from the client end, simply navigate to ```/add``` and upload a CSV with addresses.

**Optional:** To test the client side, simply run ```npm test``` from ```/server```.

#### Server Server

1. Install required dependencies by running ```npm install```
2. Rename ```variables.env.sample``` to ```variables.env``` and add the Google Geocode API Key and MongoDB credentials
3. Run ```npm start``` to start the Node / Express app, accessible at https://localhost:7777 (or ```npm run watch``` if making changes)

**Optional:** To load data from the server end, simply run ```npm run load-data``` and the contents of ```/data/addresses.csv``` will be added. Alternatively, you may also run ```npm run remove-data``` to empty the database. If the environment is set to production, these commands will not run.

**Optional:** To test the server side, simply run ```npm test``` from ```/client```.

#### General Challenges

* The first challenge that made this task difficult was determining what data to store in the database. At first glance, it would be easy to simply store the *Formatted Address* returned by the Geocode API as it is a searchable string, however this may not be the best decision in the future. First, storing both the formatted address and each individual address component (i.e. street number, street, city, etc.) allows for more indepth filtering should you decide to add it later. For example, you can enter a search term and then further filter the results on any one of those attributes, such as state. So your search could be something like "Look for all occurences of 'Main' in the state of Kansas". Also, having individual attributes allows you to be able to sort the results better as well (i.e. state in alphabetical order). Finally, the formatted address only contains the short state (i.e. "KY" instead of "Kentucky"), so you would not get the expected search results if you were to search "Kentucky".

* Another challenge that made this task more difficult was dealing with the data returned from the Geocode API. The data returned varied slightly from result-to-result and was in a vastly different format than the Address model of the app required, so I needed to write an additional function that would prepare and format the data as required. Moreover, the data had to also be checked in order to ensure it met the requirements of the challenge (i.e. type ```ROOFTOP```).

* Another challenge was dealing with the API calls in a synchronous manner. Since the server for this app made calls to an external API (Geocode) and then had to process the data and insert it into the database, it was important that no processing was done until the previous processing was completed. In order to accomplish this, I made use of Async / Await at both the API call level and at the CSV processing level.

### Submission Requirements

#### Description
- Build a UI which will display a number of addresses retrieved from an api endpoint

#### Requirements
- Server
    - Geocode the items in the provided `addresses.csv` file by using the [Google Geocode API](https://developers.google.com/maps/documentation/javascript/geocoding)
    - Add any necessary api endpoints that allow you to fulfill the requirements of the client
- Client
    - Only display items that result in a rooftop location type
    - Allow toggling between a list view and a map view of the results
    - Allow searching for a full/partial address in the results
        - `123 Rick Street` should return when searching for `Rick`

#### Submission Instructions
- Clone this repository and commit your changes locally (or to a separate remote repository)
- You're free to use any packages or libraries which help you to complete these tasks
- We should be able to start the application by doing a `npm install` and `npm start` on both the client and server (we will be running the code and QA will also be looking at the final product)
- When you are finished, please send us a link to the completed repository or a zip of the contents if you prefer

#### Criteria
- Must fulfill all requirements completely
- Our tech stack includes React and Node, so that is our preference but not required
- Keep in mind best practices, screen resolution and future considerations
- Describe any challenges that made the task more difficult

