# MILA

### Deployed Link

https://mila-captions.herokuapp.com/

## What is MILA?

MILA is a social app providing a curated database of Instagram captions. In addition to the general caption search, users are provided an interactive dashboard to collaboratively upload, share, and suggest clever photo captions with each other. Test your creativity with MILA. Offer caption suggestions on user photos and watch as the community ranks your wit. MILA is a relevant, millennial focused application.

Welcome to the HUB!

## Why MILA?

Nearly two out of every three adults aged 18-29 use Instagram. With nearly 1 BILLION monthly users, Instagram has become the third most popular social media network in the world.
One might ask, how is there not already a curated database of witty instagram captions, relevant to pop-culture and the millennial lifestyle?
We weren’t sure either. So we made one!

## Community

Upload a photo from your device and submit it to the Mila community for caption suggestions.

Uploading a photo credits you one Gold Star that can be given to the user who gives you the best caption idea.

## Built With

- React
- MongoDB
- Node.js
- Express
- JavaScript ES6
- Google Fonts
- Font Awesome
- HTML 5
- CSS 6
- Firebase
- Babel
- CogoToast
- Heroku
- AOS

## Team Contributions

### Evan Cleary

Lead Back-end, MongoDB/React integration, Built Model-View-Controller. Created the caption database, caption search engine, created admin tools, led firebase integration for auth and cloud storage, created ‘like’ and ‘goldstar’ capabilities, created Request Cards, integrated request cards into side scroller, and integrated user data into the request cards on front/back.

### Nicole LaSusa

Front-end, Landing Page Design and Set-up, Login & Quick Search Design, React-Typing for Captions, AOS animation implementation for various components, Dashboard Design & Set-up, Team/Contact Page, FlipCard Design, React-Avatar, Database - Captions

### Caroline Cranch

Front-end, Dashboard Design & Set-up, Slide out Left-Nav (React burger-menu), Left-Nav Icons, React Infinite-Scroll for Community User Cards, Search Results display styling, Upload photo card styling, My Requests Cards/Gallery styling, Database - Captions

### Mike Balin

Login Authentication, Assisted with back-end routing, Admin tools UI/UX, Bug testing

### Christopher Hedlund

API Developer, Cloud Storage assistance, Image Reader API(Google Cloud Vision) build-out, and populated data(captions) into MongoDB(mLab) on Heroku, Bug testing

## Issues We Faced

- Infinite Scroll Solution: Adjusted padding
- Like button Solution: made user table for “like”s
- Goldstar option Solution: Had to route to three different tables
- Cloud Vision API parsing Solution: Made loop to grab all “Descriptions(Labels)” and pushed them into an array
- Login Authentication Solution: Changed to Firebase

## Features We Would Like to Add in the Future

- Link up Google Cloud Vision code
- Exploring a ‘Comment’ on caption feature
- UI Media and Mobile Responsiveness
- Emoji integration
- React Native
- Keyboard extension download

## Starting the app locally

Run git clone to download app.

Start by installing front and backend dependencies. While in the root directory of downloaded app, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
