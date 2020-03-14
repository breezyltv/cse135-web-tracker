const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

const cors = require('cors')({origin: true});

app.use(cors);

admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

console.log("Firestore initialized!!!!");

var mc = db.collection("mycollection");

app.get('/hello', (req, res) => {
	res.send('hello express !!!');
	console.log('Accessing the secret section ...')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
  console.log('Server is running with PORT: '+ PORT +':)');
});

module.exports = app;

exports.login = functions.https.onRequest((req, res) => {
    res.status(200).send('Hello World!');

});


exports.mycollection = functions.https.onRequest((req, res) => {

	cors(req, res, () => {

		//get data
		var data = JSON.parse(req.body);

		console.log(data);

		//if data have session id
		if (data['session_id']) {

			mc.doc(data['session_id']).get().then(function(docRef) {
				//response a document id to client
				res.status(200).send(docRef.id)
				res.body['id'] = docRef.id

				return res
			})
			.catch(function(error) {
				res.status(200).send("Could not to get ID: " + error)
			});

			//updating data
			mc.doc(data['session_id']).update({
				performance_data: data['performance_data'],
				click_count: data['click_count'],
				mouseover_count: data['mouseover_count'],
				keydown_count: data['keydown_count'],
				scroll_count: data['scroll_count'],
				beforeUnload_count: data['beforeUnload_count'],
				dynamic_data: data['dynamic_data']
			})
			// .then(function() {
			// 	console.log("Data successfully updated!");

			// })
			.catch(function(error) {
				// The document probably doesn't exist.
				console.error("Error updating data: ", error);
			});

		}else{
			//add data when session = null
			mc.add({
				static_data: data['static_data'],
				performance_data: data['performance_data']
			})
			.then(function(docRef) {
				console.log("Data saved!");
				res.status(200).send(docRef.id);
				console.log("Document written with ID: " + docRef.id);
				res.body['id'] = docRef.id;
				return res;
			})
			.catch(function(error) {
				res.status(200).send("Data saved unsuccessfully! ");
				console.error("Error saving data: ", error);
			})
		}
		return res
	});

});

exports.showdb = functions.https.onRequest((req, res) => {

	cors(req, res, () => {

		var data = JSON.parse(req.body);

		console.log("request is: " + data);

		mc.doc(data["session_id"])
			.get()
			.then(function(docRef) {
				return res.status(200).send(
					docRef.data()
				)
			})
			.catch(function(error) {
				res.status(200).send("Error getting data! ");
				console.error("Error getting data: ", error);
			})
	})
});
