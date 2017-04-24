# Safe Steps Frontend

Version 1.0.0

Template cloned from https://github.com/erikras/react-redux-universal-hot-example

## Installation
 - Be sure to have nodejs and npm installed (https://nodejs.org/en/download/)
 - Run the following command to ensure that your node is the right version. It should be greater than 5.6.0:
```bash
npm -v
```
 - cd into the root folder of this project and run the following command to install dependencies.
```bash
npm i
```

## Setup
 - Create a file called '.env' this is where you'll place your environment variables
 - Include 3 lines for the API Key and email information in the following format. Ping me for the actual API key.
```
API_KEY=MY_API_KEY
EMAIL=MY_EMAIL
EMAIL_PASS=MY_PASS

```

## Dev
 - Run this command to start the project in dev mode. Changes to files will automatically re-transpile the code.
 - You should be able to access the site at http://localhost:3000 after everything has transpiled.
 - Note: usually the server will start before the code has transpiled. Wait for the green text to show up to get the site.
```bash
npm run dev
```

## Production
```bash
npm run build
npm start
```

# Version 1.0.0 Release Notes

## Feature List
 - Web page supports server side rendering with dynamic client-side interactions for a faster, rich experience.
 - Home page was augmented for a more appealing aesthetic.
 - Tutorial page now exists to provide visitors with information on domestic violence.
 - Scenario list page allows visitors to view all scenarios in the database.
 - Scenario Editor page provides a gui for visitors to create their own scenarios
 - Scenarios in the scenario editor can be automatically saved to the database.
 - The scenario page allows visitors to interactively practice their skills in interacting with victims of domestic violence.
 - Safety Plan Page allows users to keep notes in order to generate an apt safety plan.
 - The safety plan can be emailed to any email address.

## Known Defects
 - When switching to the scenarios page, the client will occasionally freeze.

## Bug Fixes
 - Deleting the final step on the scenario editor page will no longer cause the app to crash.
 - Duplicating a step on the scenario page will now create a step that is independently editable instead of updating both.
