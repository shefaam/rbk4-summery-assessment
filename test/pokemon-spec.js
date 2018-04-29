var expect = require('chai').expect;
var mongoose = require('mongoose');
var Pokemon = require('../server/resources/pokemon/Pokemon');

describe('Pokemon Model', function () {
  // Write tests here!
  /* START SOLUTION */
  it('should be a Mongoose model', function () {
    expect(new Pokemon()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Pokemon.schema).to.exist;
  });

  it('should have a `name` property', function () {
    expect(Pokemon.schema.paths.name).to.exist;
  });

  it('should have a `name` property that is a string', function () {
    expect(Pokemon.schema.paths.name.options.type.name).to.equal('String');
  });

  it('should have a `name` property that is unique', function () {
    expect(Pokemon.schema.paths.name.options.unique).to.be.true;
  });

  it('should have a `number` property', function () {
    expect(Pokemon.schema.paths.number).to.exist;
  });

  it('should have a `number` property that is a number', function () {
    expect(Pokemon.schema.paths.number.options.type.name).to.equal('Number');
  });

  it('should have a `number` property that is unique', function () {
    expect(Pokemon.schema.paths.number.options.unique).to.be.true;
  });

  it('should have a `imageUrl` property', function () {
    expect(Pokemon.schema.paths.imageUrl).to.exist;
  });

  it('should have a `imageUrl` property that is a string', function () {
    if (typeof Pokemon.schema.paths.imageUrl === 'string') {
      expect(Pokemon.schema.paths.imageUrl).to.equal(String);
    } else {
      expect(Pokemon.schema.paths.imageUrl.options.type.name).to.equal('String');
    }
  });

  it('should have a `types` property', function () {
    expect(Pokemon.schema.paths.types).to.exist;
  });

  it('should have a `types` property that is an array', function () {
    expect(Pokemon.schema.paths.types.instance).to.equal('Array');
  });
  /* END SOLUTION */
});