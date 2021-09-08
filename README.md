# Biomaterial Search Engine

The project aims to provide users with useful information regarding biomaterials they are looking for and sources data from a 3rd party API (Application Programming Interface) to collect and show the results. Cients using this application would be able to see results based on element name or using Material Id.

## Features

- Search for biomaterials and elements
- View results and find the test result for each element
- Download raw JSON file

## Installation
Import the source code from repository

Install NodeJS (https://nodejs.org/en/download/)


Open terminal and run following command to install Sails Js
```sh
npm install sails -g
```

## Running the application

Generate and store  API key from Materials Project for running project
1. Go to https://www.materialsproject.org/open
2. Look for Login to the Materials Project and generate API key text
3. Generate API key
4. After API key is generated, navigate to query.js and details.js file under api -> controller and paste the keys in API_Key field




Run your sails app
Open terminal and move to your folder where project is located and run following command
```sh
sails lift
```


