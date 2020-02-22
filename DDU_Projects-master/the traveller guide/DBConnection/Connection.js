//intialize pakages
var express = require("express");
var body_parser = require("body-parser");
const mongoose = require('mongoose');

//intialize connection
mongoose.connect("mongodb://localhost:27017/PlanetDB");
var db = mongoose.connection;

//Database connnection checking
db.on('error', console.log.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('connection done');
})

var app = express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
var m;
//Model intialize
var User_Login = new mongoose.Schema({
  name: String,
  password: String,
  email: String
}, { collection: 'User_Login' });
var ul = mongoose.model("ul", User_Login);

var Location = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  place: [{
    place_name: String,
    place_address: String,
    hotel: [{
      hotel_name: String,
      hotel_contact: Number,
      hotel_address: String,
      hotel_website: String,
      hotel_rating: Number
    }]
  }]
}, { collection: 'Location' });
var loc = mongoose.model("loc", Location);

function dbset1(name) {
  console.log("in dbset1" + "+" + name)
  if (name == "User_Login") {
    m = ul
  }
  else if (name == "Location") {
    m = loc
  }
}
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.get("/test", function (req, res) {
  console.log("in get");
  res.end();
})

app.post('/details/:dbn', function (req, res) {
  dbset1(req.params.dbn)
  console.log(m)
  console.log("in function");
  m.find({}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.send(docs);
  })
})
app.post('/login/:dbn', function (req, res) {
  dbset1(req.params.dbn)
  var o = JSON.parse(JSON.stringify(req.body))
  console.log(o.name + o.pass)
  var tem = { check: 'f' }
  ul.find({ name: o.name, password: o.pass }, function (err, docs) {
    console.log(docs[0]._id)
    if (docs[0]._id == '5da5be0aaabcd103b40be58d') {
      res.send(tem)
      res.end();
    }
    if (docs.length == 0) {
      res.send(tem)
      res.end();
    }
    else {
      tem.check = 't';
      res.send(tem)
      res.end();
    }
  })
})
app.post('/insert/:dbn', function (req, res) {
  dbset1(req.params.dbn)
  var o = JSON.parse(JSON.stringify(req.body))
  db.collection('User_Login').insertOne({ name: o.name, email: o.email, password: o.pass }, function (err) {
    if (err) throw err
  })
  res.send();
  res.end();
})

app.post('/location', function (req, res) {
  
  console.log("in function");
  loc.find({}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.send(docs);
  })
})


app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
