let express = require('express');
let app = express();
let jwt = require('jsonwebtoken');

app.get('/token',function(req,res){
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'foobar'
      }, 'secret');
      console.log(token);
      res.end(token);
})

app.get('/ver',function(req,res){
   const token = req.query.token;
    console.log('token: ' + token);
    let ss ;
    const x = jwt.verify(token, 'secret', function(err, decoded) {
        if (err) throw err;
        ss = decoded;
        console.log(decoded);
    });
    console.log(x);
    if (x != true) {
        res.json(ss);
    } else {
        res.json({ auth: true });
    }
})

var server = app.listen(8882, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  
  })