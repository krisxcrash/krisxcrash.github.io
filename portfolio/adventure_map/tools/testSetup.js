// this file is written in ES5 since it is not transpiled by Babel
// this file does the following
// 1. sets node environment variable
// 2. registers babel for transpiling the code for testing
// 3. disables webpack-specific features that mocha doesn't understand
// 4. requires jsdom so we can test via an in-memory DOM in Node
// 5. sets up global vars that mimic a browser

/* eslint-disable no-var */

/* This setting assures the .babelrc dev config (which includes
 hot module reloading code) doesn't apply for tests.
 But also, we don't want to set it to production here for
 two reasons:
 1. You won't see any PropType validation warnings when
 code is running in prod mode.
 2. Tests will not display detailed error messages
 when running against production version code
 */

 process.env.NODE_ENV = 'test';

 // Register Babel so that it will transpile ES6 ti ES5 before the tests run

 require('babel-register')();

 // disable webpack-specific features for tests since Mocha doesn't know what to do with them

 require.extensions['.css'] = function () {return null;};
 require.extensions['.png'] = function () {return null;};
 require.extensions['.jpg'] = function () {return null;};

 // Configure JSDOM and set global variables to simulate a browser environment for tests

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom(' ');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document; // eslint-disable-line no-undef