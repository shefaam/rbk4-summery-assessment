
### Back-end

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section

Using the existing code provided in `server/`, follow the steps below to build out a Pokémon API:
   
|      URL             | HTTP Verb | Request Body |                               Result                                           |
|:--------------------:|:---------:|:------------:|:------------------------------------------------------------------------------:|
| /api/pokemon         |    GET    |    empty     |Respond with JSON of all Pokémon                                                |
| /api/pokemon         |    POST   |     JSON     |Create new Pokémon and respond with JSON of created Pokémon                     |
| /api/pokemon         |   DELETE  |    empty     |Delete all Pokémon in database and respond with JSON of deleted Pokémon         |
| /api/pokemon/:number |    GET    |    empty     |Respond with JSON of single Pokémon with matching `number`                      |
| /api/pokemon/:number |    PUT    |     JSON     |Update Pokémon with matching `number` and respond with JSON of updated Pokémon  |
| /api/pokemon/:number |   DELETE  |    empty     |Delete Pokémon with matching `number` and respond with JSON of deleted Pokémon  |


- [ ] Connect Mongoose to your local Mongo database in `db/index.js`
- [ ] Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
  - [ ] `number`, a unique number
  - [ ] `name`, a unique string
  - [ ] `types`, an array of strings
  - [ ] `imageUrl`, a string
- [ ] In `insertAllPokemon.js`, write a function that can populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json`, then run the script/invoke the function so that the database is populated.
- [ ] Complete the controller in `resources/pokemon/pokemonController.js` that interacts with your Pokémon model.
- [ ] Create a router in `resources/pokemon/pokemonRouter.js` that utilizes each of your controller's methods. Be sure to handle errors appropriately!
- [ ] Import `pokemonRouter` into `server.js` and assign it to the correct route
- [ ] Write at least two tests in `test/api-spec.js` that will help assure future developers that the API is working as intended.


1- after install npm ....
   install (npm install express --save) + (dev-ser somthing liek this)
   and there is some command to run react // it is two line in the learn 
2- open the server by connect server.js with main html in react
npm install webpack webpack-dev-server --save-dev
npm start
npm install -g nodemon

3- open two terminal alone for react (check the file for server)
   1- nodemon start (each save restart the server)
   2- dev somthing for wepback: we will try after try do somthing in server


4- lets start with server (it is work) now start refactor it and do the get/ post etc
lets commit now :)
again to start server after install npm (nodemon start)
lets conntinue now (i go to do some music :) )

5- now need to render all the data in root/data/pokemon.json lets do it
in get you must use async thing that mean wait after get the data do somthing so we 
use another function to do the console	

i go to eat now :p 

I come again :)
6- now i get the data now i want to show it in the screen

I search many cant know the problem I will use learn two command only ..
  npm install -g webpack

seperataed
  npm run react-dev
  npm run server-dev
oh my god same problem


7- oh my god i ask for help destk and tell me the start point not from the table it is from the square check
so the time now 1:38 PM 
Now I will start the assesment :(


* [MDN](https://developer.mozilla.org/en-US/)
* [Express docs](https://expressjs.com/)
* [Mongo docs](https://docs.mongodb.com/)
* [Mongoose docs](http://mongoosejs.com/docs/index.html)
* [React docs](https://facebook.github.io/react/docs/getting-started.html)
* [Angular docs](https://docs.angularjs.org/api)
* [Webpack docs](https://webpack.github.io/docs/)
* Official documentation for any npm package that you install
