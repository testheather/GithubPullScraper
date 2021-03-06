/**
 * Created by: HeatherWenslerNolis
 * 08/23/2017
 */

"use strict";

//npm packages
let bodyParser = require('body-parser');
let request = require('request');
let express = require('express');
let app = express();

//set ports - environment variable OR localhost 5000
app.set('port', (process.env.PORT || 5000));

//use json parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * when webhook posts to /pull, log it
 */
app.post('/pull', function(req, res){
    let data = req.body;

    //iterate over each entry
    data.entry.forEach(function(event){
        try{
            pullEventReceived(event);
        }
        catch (e) {
            console.log("Webhook received unknown event: ", e);
        }
    })
});

/**
 * Processes each received pull event
 * @param event
 */
function pullEventReceived(event) {

    //store information about this event
    let thisEvent = JSON.stringify(event);

    console.log("Pull event received. ");
    console.log(thisEvent);
}

