# Better Doctor Finder

#### Use this app to search BetterDoctor's API for doctors in your area. Current Version: 2/14/20

#### By Sarah "Sasa" Schwartz

## Description

This program makes API calls to the BetterDoctor API and presents the information to the user. The user can search for a specific doctor by name or input specific symptoms and receive doctor recommendations in their area.

## Setup/Installation Requirements

- Get a free API key from the BetterDoctor API website
- Clone the repo to your desktop
- Create a .env file in the root director
- Store your key in the .env file in the format: API_KEY = YOURKEYHERE
- "\$ npm install" in your terminal
- "\$ npm run start" in your terminal
- The application should open in a local server
- Enjoy!

### Specs

##### User can search for providers based on symptoms

- Example input: "toothache"
- Example output: "Steven Toschi" (and description about this doctor)

##### User can search for providers by name

- Example input: Toschi
- Example output: "Steven Toschi" (and description about this doctor)

##### If no doctors meet the user's search criteria, the screen will display a notice

- Example input: notrealname
- Example output: "We're sorry, no doctors met your search criteria."

##### If the query fails to return a valid result, the screen will display an error

- Example input: Toschi (but API call fails)
- Example output: "We're sorry, but we are currently having trouble accessing our database of doctors. Please try again at another time."

## Known Bugs

- Doctors' website URLs do not always load properly such that they are clickable.

## Technologies Used

- Javascript
- BetterDoctor API
- HTML/CSS
- Bootstrap
- jQuery
- Jest
- Webpack
- Babel
- ESlint

### License

- MIT
