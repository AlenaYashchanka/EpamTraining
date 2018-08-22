var webdriverio = require('webdriverio');
var request = require ('request');
var rp = require('request-promise');
var expect = require('chai').expect;

const options = {
    uri: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        contentType: {
            'Content-Type': 'application/json; charset=utf-8',
          }
    },
    json: true // Automatically parses the JSON string in the response
};

describe ('Http request', () => { 
    it('should have code 200', async done => {
        request('https://jsonplaceholder.typicode.com/users', (err, response, body) => {
            responseSuccess(response);
            var users = JSON.parse(body);
            console.log("Total count of users " + users.length);      
        });
    });

    it('should have 10 users', async done => {
        rp(options)
        .then(function (users) {
            console.log('Object has %d users', users.length);
        })
    });

    
});

function responseSuccess (response) {
    expect(response.statusCode).to.equal(200); 
    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
}

