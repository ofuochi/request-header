var app = require("express")();
// var requestIp = require('request-ip');
var os = require("os");

app.get('/api/whoami', (req, res) => {
   var json = {
      ipaddress:req.headers['x-forwarded-for'],
      language:req.headers['accept-language'].split(',')[0],
      software:req.headers['user-agent'].split('(')[1].split(')')[0]
   }
   res.end(JSON.stringify(json,null,1));
});
app.listen(8080);
