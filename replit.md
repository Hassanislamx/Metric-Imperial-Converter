# Metric/Imperial Converter - FreeCodeCamp Project

## Overview
This is a Node.js/Express web application that serves as a metric/imperial unit converter. It's part of the FreeCodeCamp Quality Assurance curriculum. The application provides both a frontend interface and API endpoints for converting between different units of measurement.

## Project Structure
- **server.js** - Main Express server file
- **views/index.html** - Frontend HTML interface
- **public/style.css** - CSS styling
- **routes/api.js** - API route handlers  
- **controllers/convertHandler.js** - Core conversion logic (boilerplate)
- **tests/** - Unit and functional tests

## Current Setup
- **Framework**: Express.js with Node.js
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Dependencies**: Express, body-parser, CORS, dotenv, Chai, Mocha

## Recent Changes
- Configured server to bind to 0.0.0.0:5000 for Replit environment
- Set up workflow to run the application
- Configured deployment as autoscale service

## Development Status
This appears to be a boilerplate project where the core conversion logic in `controllers/convertHandler.js` needs to be implemented. The frontend and basic server structure are complete and functional.

## API Endpoints
- `GET /api/convert?input={value+unit}` - Convert units (implementation needed)

## Running the Project
The project runs automatically via the configured workflow using `npm start`.