# Simple Credit Calculation Web App

Simple React/Node.js based credit calculation web app that has integrasted auth0 sign-in feature and able to exchange user data between backend and frontend.

## Built With:

* Backend
    * body-parser - Node.js body parsing middleware.
    * cors - Node.js CORS middleware.
    * express - Fast, unopinionated, minimalist web framework for node.
    * helmet - Help secure Express/Connect apps with various HTTP headers
    * ~~morgan - HTTP request logger middleware for node.js~~

* Frontend
    * auth0-lock - Auth0 is an authentication broker that supports both social and enterprise identity providers
    * axios - Promise based HTTP client for the browser and node.js
    * react - React is a JavaScript library for building user interfaces
    * react-dom - React package for working with the DOM
    * react-router-dom - DOM bindings for React Router
    * react-scripts - Configuration and scripts for Create React App

## Running    

**Backend server**
```bash 
cd backend
node src
``` 


**Frontend server** - from root folder
```bash
npm start
```