# metal-assignment

My awesome Metal.js project

## Setup

1. Install NodeJS >= v0.12.0 and NPM >= v3.0.0, if you don't have it yet. You
can find it [here](https://nodejs.org).

2. Install local dependencies:

  ```
  npm install
  ```

3. Build the code:

  ```
  npm run build
  ```

4. Start the demo server:

  ```
  npm run start
  ```

5. Open the demo at http://localhost:4000/demos in your browser.

## Contribute

For API I have used a dummy online api at https://next.json-generator.com/api/json/get/41MRoCJ7H

The filters used in this projects are picked dynamically based on brand and ratings

The main components is 'shopping layout'(parent component) that renders other child components 

  ► SearchBox component - the emits the entered search keyword to the parent
  ► The parent component does the api call and sends data to the ShoppingList that lists out the items available.
  ► Filters pick up the distinct brands and ratings; extracted by the parent
  ► Selecting either of these filters changes the items display on the page in no matter what combination.
  
  
