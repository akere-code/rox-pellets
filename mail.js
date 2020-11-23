var mailgun = require("mailgun-js");
var DOMAIN = 'sandbox1ccf16b6fd934a7e99c434371b777538.mailgun.org'
var api_key = 'fc35941930bc30e6bedcf12a267edb82-2af183ba-16b0f342'
var mg = mailgun({apiKey: api_key, domain:DOMAIN});


var sendMail = function(email, name, message){
    var data = {
        from: email,
        to: 'roxpelletsales@gmail.com',
        subject: name,
        text: message
    };

    mg.messages().send(data, (error, body) => {
        console.log(body);
    });

}
module.exports = sendMail;
