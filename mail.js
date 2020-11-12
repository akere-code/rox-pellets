var mailgun = require("mailgun-js");
var DOMAIN = 'sandboxf38f3d026f7f468eba3455aa131a0e34.mailgun.org';
var api_key = '5d5ed100cdef2852ec5a3354476712ed-ea44b6dc-94bce0dc'
var mg = mailgun({apiKey: api_key, domain:DOMAIN});


var sendMail = function(email, name, message){
    var data = {
        from: email,
        to: 'roxpelletsales@gmail.com',
        subject: name,
        text: message
    };

    mg.messages().send(data, function (error, body) {
        console.log(body);
    });

}
module.exports = sendMail;
