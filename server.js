const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

var url = "mongodb://localhost:27017/";

var data={};

MongoClient.connect(url, function(err,db) {
        if(err) throw err;
        var dbo = db.db("exploration4");

	require('./app/routes')(app, dbo);

	app.listen(port, () => {
  		console.log('We are live on ' + port);
	});
	
	

	/*
        if(data!=null){
                dbo.collection("notes").insertOne(data, function(err, res) {
                        if (err) throw err;
                        console.log("Note Inserted");
                        db.close();
                });
        }
	*/

});
