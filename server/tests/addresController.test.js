// Set some environment variables
process.env.NODE_ENV = 'test';
process.env.PORT = 8888;

// Pull in mongoose and the model
const mongoose = require('mongoose');
const Address = require('../models/Address');

// Pull in other dependencies
const fs = require('fs');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Addresses', () => {
  // Get all addresses
  describe('/GET addresses', () => {
    
    // Empty database and add new records
    before((done) => {
      Address.remove({}, (err) => { 
        const addresses = [
          {
            'location': { 
              'type':'Point',
              'coordinates': [-94.7655029, 38.928542]
            },
            'formattedAddress': '15481 W 110th St, Lenexa, KS 66219, USA',
            'streetNumber': '15481',
            'street': 'West 110th Street',
            'city': 'Lenexa',
            'state': 'Kansas',
            'country': 'United States',
            'postalCode': '66219',
          },
          {
            'location':{
              'type': 'Point',
              'coordinates':[-95.76545109999999, 36.1653974]
            },
            'formattedAddress': '777 W Cherokee St, Catoosa, OK 74015, USA',
            'streetNumber': '777',
            'street': 'West Cherokee Street',
            'city': 'Catoosa',
            'state': 'Oklahoma',
            'country': 'United States',
            'postalCode': '74015'
          }
        ];
  
        Address.insertMany(addresses);

        done();         
      });
    });

    // Check basic GET
    it('it should GET all the addresses', (done) => {
      chai.request(server)
        .get('/api/v1/addresses')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done();
        });
    });

    // Check basic GET with filtering
    it('it should GET all the addresses when filtered', (done) => {
      chai.request(server)
        .get('/api/v1/addresses?q=Cat')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
        });
    });

    // Ensure seaching the state long name works
    it('it should GET all the addresses when filtered using state', (done) => {
      chai.request(server)
        .get('/api/v1/addresses?q=Kansas')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
        });
    });
  });

  // Post addresses
  describe('/POST addresses', () => {

    // Empty database and add new records
    before((done) => {
      Address.remove({}, (err) => { 
        done();
      });
    });

    it('it should POST addresses', (done) => {
      chai.request(server)
      .post('/api/v1/addresses')
      .attach('file', fs.readFileSync('./data/testAddresses.csv'), 'simple.csv')
      .type('form')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('numAddresses').eql(3);
        done();
      });
    });
  });

});