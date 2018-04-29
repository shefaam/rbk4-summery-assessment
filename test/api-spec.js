var chai = require('chai');
var mongoose = require('mongoose');
var expect = chai.expect;
var request = require('supertest');
var app = require('../server/server.js');
var Pokemon = require('../server/resources/pokemon/Pokemon');

chai.use(require('chai-things'));

var dbURI = 'mongodb://localhost/pokemontest';

var getBody = function (res) {
  return JSON.parse(res.text);
};

var clearDB = function (done) {
  // Mongoose doesn't know how to pluralize 'pokemon'
  mongoose.connection.collections['pokemons'].remove(done);
};

var starterPokemon = [
  {
    number: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Bulbasaur.png'
  },
  {
    number: 4,
    name: 'Charmander',
    types: ['Fire'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Charmander.png'
  },
  {
    number: 7,
    name: 'Squirtle',
    types: ['Water'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Squirtle.png'
  },
];

describe('Pokemon API', function () {
  var server;

  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    server = app.listen(3000, function() {
      clearDB(function () {
        Pokemon.create(starterPokemon, done);
      });
    });
  });

  afterEach(function () {
    server.close();
  });

  describe('/api/pokemon', function () {
    // Write your tests here!
    /* START SOLUTION */

    describe('GET', function () {

      it('responds with a 200 (OK)', function (done) {
        request(app)
          .get('/api/pokemon')
          .expect(200, done);

      });

      it('responds with JSON of all pokemon', function (done) {
        request(app)
          .get('/api/pokemon')
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            var retrieved = getBody(res);
            expect(retrieved.length).to.equal(3);
            expect(retrieved[0].name).to.equal('Bulbasaur');
            expect(retrieved[1].name).to.equal('Charmander');
            expect(retrieved[2].name).to.equal('Squirtle');
            done();
          });

      });
    });

    describe('POST', function () {

      var pikachu = {
        number: 25,
        name: 'Pikachu',
        types: ['Electric'],
        imageUrl: 'http://nintendo.wikia.com/wiki/File:Pikachu.png'
      };

      it('responds with a 201 (Created) when a valid pokemon is sent', function (done) {
        request(app)
          .post('/api/pokemon')
          .send(pikachu)
          .expect(201, done);
      });

      it('responds with JSON of the created pokemon', function (done) {
        request(app)
          .post('/api/pokemon')
          .send(pikachu)
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            var created = getBody(res);
            expect(created.name).to.equal('Pikachu');
            expect(created.number).to.equal(25);
            expect(created.types).to.deep.equal(['Electric']);
            expect(created.imageUrl).to.equal('http://nintendo.wikia.com/wiki/File:Pikachu.png');
            done();
          });
      });

      it('includes the created pokemon in a subsequent GET request to `/api/pokemon', function (done) {
        request(app)
          .post('/api/pokemon')
          .send(pikachu)
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            request(app)
              .get('/api/pokemon')
              .end(function (err, res) {
                if (err) {
                  return done(err);
                }
                var retrieved = getBody(res);
                expect(retrieved.length).to.equal(4);
                done();
              });
          });
      });
    });
  });

  describe('/api/pokemon/:number', function () {

    describe('GET', function () {

      it('responds with a 200 (OK) when a pokemon with a matching `number` exists', function (done) {
        request(app)
          .get('/api/pokemon/1')
          .expect(200, done);
      });

      it('responds with a 404 (Not Found) when there is no pokemon with a matching `number`', function (done) {
        request(app)
          .get('/api/pokemon/9001')
          .expect(404, done);
      });

      it('responds with JSON of the pokemon with a matching `number`', function (done) {
        request(app)
          .get('/api/pokemon/1')
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            var retrieved = getBody(res);
            expect(retrieved.name).to.equal('Bulbasaur');
            expect(retrieved.number).to.equal(1);
            expect(retrieved.types).to.deep.equal(['Grass', 'Poison']);
            expect(retrieved.imageUrl).to.equal('http://nintendo.wikia.com/wiki/File:Bulbasaur.png');
            done();
          });
      });

    });

    describe('PUT', function () {

      it('responds with a 200 (OK) when a pokemon with the matching `number` is updated', function (done) {
        request(app)
          .put('/api/pokemon/1')
          .send({ name: 'Grass-poison-thingamabob' })
          .expect(200, done);
      });

      it('responds with JSON of the updated pokemon', function (done) {
        request(app)
          .put('/api/pokemon/1')
          .send({ name: 'Grass-poison-thingamabob' })
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            var updated = getBody(res);
            expect(updated.name).to.equal('Grass-poison-thingamabob');
            expect(updated.number).to.equal(1);
            expect(updated.types).to.deep.equal(['Grass', 'Poison']);
            expect(updated.imageUrl).to.equal('http://nintendo.wikia.com/wiki/File:Bulbasaur.png');
            done();
          });
      });

      it('responds with the updated pokemon in a subsequent GET request to the same `number`', function (done) {

        request(app)
          .put('/api/pokemon/1')
          .send({ name: 'Grass-poison-thingamabob' })
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            request(app)
              .get('/api/pokemon/1')
              .end(function (err, res) {
                if (err) {
                  return done(err);
                }
                var retrieved = getBody(res);
                expect(retrieved.name).to.equal('Grass-poison-thingamabob');
                expect(retrieved.number).to.equal(1);
                expect(retrieved.types).to.deep.equal(['Grass', 'Poison']);
                expect(retrieved.imageUrl).to.equal('http://nintendo.wikia.com/wiki/File:Bulbasaur.png');
                done();
              });
          });
      });

      it('includes the updated pokemon in a subsequent GET request to `/api/pokemon`', function (done) {
        request(app)
          .put('/api/pokemon/1')
          .send({ name: 'Grass-poison-thingamabob' })
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            request(app)
              .get('/api/pokemon')
              .end(function (err, res) {
                if (err) {
                  return done(err);
                }
                var retrieved = getBody(res);
                expect(retrieved[0].name).to.equal('Grass-poison-thingamabob');
                done();
              });
          });
      });
    });

    describe('DELETE', function () {

      it('responds with a 200 (OK) when a pokemon with the matching `number` is deleted', function (done) {
        request(app)
          .delete('/api/pokemon/1')
          .expect(200, done);
      });

      it('responds with JSON of the deleted pokemon', function (done) {
        request(app)
          .delete('/api/pokemon/4')
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            var deleted = getBody(res);
            expect(deleted.name).to.equal('Charmander');
            expect(deleted.number).to.equal(4);
            expect(deleted.types).to.deep.equal(['Fire']);
            expect(deleted.imageUrl).to.equal('http://nintendo.wikia.com/wiki/File:Charmander.png');
            done();
          });
      });

      it('responds with a 404 (Not Found) in a subsequent GET request to the same `number`', function (done) {
        request(app)
          .delete('/api/pokemon/7')
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            request(app)
              .get('/api/pokemon/7')
              .expect(404, done);
          });
      });

      it('should not include the deleted pokemon in a subsequent GET request to `api/pokemon`', function (done) {
        request(app)
          .delete('/api/pokemon/7')
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            request(app)
              .get('/api/pokemon')
              .end(function (err, res) {
                if (err) {
                  return done(err);
                }
                var retrieved = getBody(res);
                expect(retrieved).to.not.include.something.that.deep.equals({
                  number: 7,
                  name: 'Squirtle',
                  types: ['Water'],
                  imageUrl: 'http://nintendo.wikia.com/wiki/File:Squirtle.png'
                });
                done();
              });
          });
      });

    });

    /* END SOLUTION */
  });
});