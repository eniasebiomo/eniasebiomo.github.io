var config = require('./config.js');

// Twilio Credentials
var twilioKey = config.TWILIO_KEY;
var accountSid = config.ACCOUNT_SID;
var authToken = config.AUTH_TOKEN;
var twilioNumber = config.TWILIO_NUM;
var myNumber = config.MY_NUM;

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
	to: myNumber,
	from: twilioNumber,
	body: "The people's champ must be everything the people can't be",
}, function(err, message) {
	console.log(message.sid);
});