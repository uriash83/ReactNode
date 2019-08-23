//const mysql = require('mysql');
//const Sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const config = require("../config/config.js")
const climbRouter = require('./routers/routerClimb')
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());// nasze zapytanie będzie zwracane jako json
app.use(climbRouter);




mongoose.connect('mongodb://mo7807_auth:Shinseikai2002@136.243.156.104:27017/mo7807_auth', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));




/*

SEQULISE

const sequelize = new Sequelize('m7807_mysql', 'm7807_uriash', 'Shinseikai2002',{
  host: "mysql.ct8.pl",
  user: "m7807_uriash",
  password: "Shinseikai2002",
  database: "m7807_mysql",
  dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

MYSQL


  
const con = mysql.createConnection({
  host: "mysql.ct8.pl",
  user: "m7807_uriash",
  password: "Shinseikai2002",
  database: "m7807_mysql"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const sequelize = new Sequelize('m7807_mysql', 'm7807_uriash', 'Shinseikai2002',{
  dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


MONGODB

MongoClient.connect('mongodb://mo7807_auth:Shinseikai2002@136.243.156.104:27017/mo7807_auth',{ useNewUrlParser: true },(err,client) => {

	if(err){
		return console.log(err)
  }
  const db = client.db('mo7807_auth');
	console.log('Connected ' + db)
  
  db.collection('Todos').insertOne({
       text: 'Something to do',
       completed: false
   }, (err,result)=> {
       if(err){
           console.log('Unable instr todo',err)
       }
       console.log(JSON.stringify(result.ops,undefined,2));
  });

	client.close();
});

*/
app.listen(config.PORT_SERVER, () => console.log("Listening on port" + config.PORT_SERVER));
//const router = express.Router();





/*
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// this is our MongoDB database
const dbRoute = "mongodb://uriash:Shinseikai2002@ds135786.mlab.com:35786/reactdb";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  console.log(data);
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });

});



// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
*/