# OPEN-TAB

A customized, space-themed "New Tab". This project replaces the default browser new tab page with a functional, aesthetic glassmorphism interface.

## Features
* Real-Time Clock & Calendar: Displays the current local time and a full calendar grid of the current month.
* Web Search: Built-in search bar that directly queries Google.
* Dynamic NASA Feed: Automatically fetches and displays the NASA Astronomy Picture of the Day (APOD) via the official API.
* Quick Shortcuts: Direct links to GitHub, YouTube, NASA, and Reddit.
* Responsive UI: Features custom glassmorphism panels, hover glow scaling, and spinning logo animations.

## Tech Stack
* HTML5
* CSS3
* JavaScript
* Vite

## Local Setup
1. Clone this repository to your local machine.
2. Open the project folder in your terminal.
3. Run `npm install` to install all required dependencies.
4. Run `npm run dev` to start the local development server.
5. Open the provided localhost link in your browser to view the dashboard.
* Or go to the following link to run this website in your browser
* `https://kaithegreat-123.github.io/open-tab/`

## Environment Variables
To ensure the NASA widget works perfectly, you can add your own NASA API key. If no key is provided, the application will fall back to a demo key. 
1. Create a `.env` file in the root directory.
2. Add the following line: `VITE_NASA_API_KEY=your_api_key_here`
3. Replace `your api key here` with your own API key.

## Deployment
This project is configured to be deployed automatically to GitHub Pages using a custom GitHub Actions workflow.

## Author
Kai
