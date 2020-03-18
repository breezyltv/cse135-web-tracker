const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

console.log("Firestore initialized!!!!");

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add admin custom claim
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    })
  }).then(() => {
    return {
      message: `Success! ${data.email} has been made an admin.`
    }
  }).catch(err => {
    return err;
  });
});

exports.deleteUser = functions.https.onCall((data, context) => {

  return admin.auth().getUser(data.email).then(user => {
    return admin.auth().deleteUser(user.uid)
    .then(() => {
      return {
        message: `Success! User ${user.email} has been deleted.`
      }
    }).catch(err => {
      console.log('Error deleting user:', error);
      return err;
    });
  }).catch(err => {
    return err;
  });
});
