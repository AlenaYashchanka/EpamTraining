var webdriverio = require('webdriverio');
var fetch = require ('node-fetch');

describe ('Http request', () => { 
    it('should have code 200', async done => {
        /* NOT WORKING
        browser.url('https://jsonplaceholder.typicode.com/users');
        console.log(browser.status());
        */
        fetch('https://jsonplaceholder.typicode.com/users').then( response => {
            console.log("========Http request has status " + response.status);    // result ========Http request has status 200
          });
    });

    it('should have value of the content-type header is application/json; charset=utf-8', async done => {
        fetch('https://jsonplaceholder.typicode.com/users').then( response => {
            console.log(response.headers);                                        // returns Headers object
            console.log('=================================================');
          });
    });

    it('should have body is an array of 10 users', async done => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.text())
        .then(body => {
            var users = JSON.parse(body);
            console.log("========Total count of users " + users.length);          // result ========Total count of users 10
        });
     
    });
});
