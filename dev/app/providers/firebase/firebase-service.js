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
    this.storage = firebase.storage();
    this.user = firebase.auth();

  }
//Firebase CRUD Process
  create(collection, userSelection, userId) {
    // define firebase collection with correct style
    collection = `${collection}/`;
    return new Promise((resolve, reject) => {
        let created = this.database.ref(collection).push(userSelection, userId);
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

    googleAuthProvider() {
    firebase.auth().signInWithPopup(provider).then((result)=> {
        console.log('hello')
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
})
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});
}
}

