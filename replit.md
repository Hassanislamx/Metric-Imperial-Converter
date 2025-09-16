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

## Recent Changes (September 16, 2025)
- Configured server to bind to 0.0.0.0:5000 for Replit environment
- Set up workflow to run the application
- Fixed syntax error in unit tests file
- Implemented complete conversion logic in ConvertHandler class
- Added full API endpoint implementation with proper error handling
- Configured deployment as autoscale service using npm start

## Development Status
**COMPLETED**: This is now a fully functional FreeCodeCamp Metric/Imperial Converter with all core functionality implemented:
- ✅ Unit conversion logic for gallons/liters, miles/kilometers, pounds/kilograms
- ✅ Input parsing for whole numbers, decimals, fractions, and mixed fractions
- ✅ API endpoint `/api/convert?input={value+unit}` returns proper JSON responses
- ✅ Error handling for invalid numbers and units (returns plain text responses)
- ✅ Frontend interface working with AJAX form submission
- ✅ All unit tests passing
- ✅ Server running correctly in Replit environment

## API Endpoints
- `GET /api/convert?input={value+unit}` - Convert units (implementation needed)

## Running the Project
The project runs automatically via the configured workflow using `npm start`.