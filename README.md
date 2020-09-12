# DevelopersConnector
MERN Stack Application Project which connects different developers around the world

Link to live demo of the App https://fast-inlet-77718.herokuapp.com/

# Prerequisites 
  1) Node
  2) Npm
  3) MongoDB account

# Running Project

## Setting up Server Side
1) install server side dependencies by running following command in root directory

```
npm install
```
2) update your production.json file in config directory with following info and make sure to add it in .gitignore. I have uploaded it for learning purposes

```
mongoURI = your_mongoDB_uri
jwtSecret = your_jwt_secret
githubClientId = your_githubclient_id
githubSecret = your_github_secret
```

## Setting up Client Side
1) install client side dependencies by running following commands in root directory

```
cd client
npm install
```

## To run both Server and Client concurrently 
To run both server and client go back to root directory and run following command

 ```
 npm run dev
 ```
 
 
