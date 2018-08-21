var webdriverio = require('webdriverio');
var request = require ('request');
var rp = require('request-promise');

describe ('Http request', () => { 
    it('should have code 200', async done => {
        request
            .get('https://jsonplaceholder.typicode.com/users')
            .on('response', response => {
                console.log('Http request status ' + response.statusCode) // 200
        })     
    });

    it('should have value of the content-type header is application/json; charset=utf-8', async done => {
        request
            .get('https://jsonplaceholder.typicode.com/users')
            .on('response', response => {
                console.log('Headers content-type is ' + response.headers['content-type']) // application/json; charset=utf-8
        })
    });

    it('should have body is an array of 10 users', async done => {
        request('https://jsonplaceholder.typicode.com/users', (err, response, body) => {
            var users = JSON.parse(body);
            console.log("Total count of users " + users.length);          // result Total count of users 10
        });
    });
});