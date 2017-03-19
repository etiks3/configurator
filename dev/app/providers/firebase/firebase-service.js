/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T09:32:17+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: firebase-service.js
* @Last modified by:   sylvain
* @Last modified time: 2017-03-19T20:17:17+01:00
* @Copyright: sylvain rojas
*/



import * as firebase from "firebase";


export class FirebaseService{

  constructor(){
    this.database = firebase.database();
    // this.storage = firebase.storage();
    // this.auth = firebase.auth();
    console.log('firebase ready->', this.database);
  }
//Firebase CRUD Process
  create(collection, userSelection) {
    // define firebase collection with correct style
    collection = `${collection}/`;
    return new Promise((resolve, reject) => {
        let created = this.database.ref(collection).push(userSelection);
        if(created) {
            resolve(created);
        }
        else {
            reject("The write operation failed");
        }
    });
  }
  read(collection){
    return this.database.ref(collection);
  }

  update(collection, key, userSelection){
    collection = `${collection}/`;
    return this.database.ref(collection).child(key).update(userSelection);
  }

  delete(collection, key){
    collection = `${collection}/`;
    return this.database.ref(collection).child(key).remove();
  }
  initApp() {
        // Listening for auth state changes.
        // [START authstatelistener]
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            document.getElementById('quickstart-sign-in').textContent = 'Sign out';
            document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            // [END_EXCLUDE]
          } else {
            // User is signed out.
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
            document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
            document.getElementById('quickstart-account-details').textContent = 'null';
            document.getElementById('quickstart-oauthtoken').textContent = 'null';
            // [END_EXCLUDE]
          }
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authstatelistener]
        document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      }
      // window.onload = function() {
      //   initApp();
      // };


}
