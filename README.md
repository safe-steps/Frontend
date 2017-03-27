# Safe Steps Frontend

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
 - Include 1 line for the API Key in the following format. Ping me for the actual API key.
```
API_KEY=MY_API_KEY
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
