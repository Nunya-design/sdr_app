const twilio = require('twilio');

module.exports = (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say("Hi there! This is Sarah from Plenty. Thanks for taking the call.");
  twiml.hangup();

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml.toString());
};

