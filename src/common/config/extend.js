const view = require('think-view');
const model = require('think-model');
const cache = require('think-cache');
const session = require('think-session');
const fetch = require('think-fetch');

module.exports = [
    view, // make application support view
    fetch, // HTTP request client.
    model(think.app), // make application support model
    cache,
    session,
];
