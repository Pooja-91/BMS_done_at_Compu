var express = require('express');
var router  =  express.Router();


//For get routers files call
var sportD = require('./sport.js');
var eventD = require('./event.js');
var futureeventD = require('./futureEvent.js');
var standD= require('./stand.js');
var SingleSportD = require('./SingleSport.js');
var SeatCountD = require('./SeatCount.js');
var auth = require('./auth.js');

//for post routers file call
var BuyNowD = require('./BuyNowPost.js');
var customerDetailsD = require('./customerDetailsPost.js');
var orderBeforeD = require('./orderBeforePost.js');
var orderAfterD = require('./orderAfterPost.js');
var sendMailD =require('./sendMailPost.js');



/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);




/*Access get routes from here*/
router.get('/api/sport', sportD.getSprot);
router.get('/api/event', eventD.getEvent);
router.get('/api/futureEvent', futureeventD.getfutureEvent);
router.get('/api/stand/:eventId', standD.getStand);
router.get('/api/SingleSport/:sportId',SingleSportD.getOneSport);
router.get('/api/SeatQuantity/:eventId',SeatCountD.getCount);






/*Access post routes from here*/
router.post('/api/BuyNow',BuyNowD.postBuyNow);
router.post('/api/customerDetails',customerDetailsD.postCustomerD);
router.post('/api/orderBefore',orderBeforeD.postOrderB);
router.post('/api/orderAfter',orderAfterD.postOrderA);
router.post('/api/SendMailPost',sendMailD.postsendMail);

module.exports = router;
