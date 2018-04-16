var rateLimiter = function (req, res, next) {
  // TODO
};

module.exports = rateLimiter;

/*
//////////////////
What To do here ?
//////////////////
1- using params ? make a route('/:user') (router.param(name, callback))
2- make post request use that format (/:user)
3- how to make it not conflect with ('/:number') ?
4- maybe as ('/number') does not have post request inside it , so i can use it without any conflect ( for post request only)
5- after that need to start save a variable (object type ? ) take a key as user name and value of how many requests
6- how to make server delete user usage after 1 hr ?
7- maybe a function to check different between date of request and first request when save user data inside object
8- need to call this middleware on server.js file and attach it for '/pokemon' route

to update fron-end to have user as header 
make input and take input value as a user
OR
make a promet when open page asking for user and use it to be in link route

send the user with its request

*/
