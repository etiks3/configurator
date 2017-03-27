/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T09:32:17+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: firebase-service.js
* @Last modified by:   sylvain
* @Last modified time: 2017-03-26T18:22:40+02:00
* @Copyright: sylvain rojas
*/



import * as firebase from "firebase";

export class FirebaseService{

  constructor(){
    this.database = firebase.database();
    this.storage = firebase.storage();
    this.user = firebase.auth();
    this.loginCallBack();
  }

  loginCallBack(){
    console.log ('Login callback defintion...');
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            console.log('User IS log-> ', user)
            /*
            let userDataReady = {
                name: user.displayName,
                email: user.email,
                uid: user.uid
            }
            */
            //window.sessionLocal.storage
            window.sessionStorage.setItem("user",user);

        } else {
            // No user is signed in.
            console.log('User NOT log.')
            // init HomePage
            let homePage = new HomePage(this.appBody);
        }
    });
  }

  loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
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
  isLogged(){
    return firebase.auth().currentUser;
  }

  logout(){
    console.log("logout...");
    firebase.auth().signOut().then(function() {
      console.error ("logout successful");
  // Sign-out successful.
    }, function(error) {
      console.error ("failed to logout");
    });

  }

//Firebase CRUD Process
  create(userSelection) {
    // define firebase collection with correct style
    var userId = firebase.auth().currentUser.uid;
    console.log ("user id",userId);
    return new Promise((resolve, reject) => {
        //let created = this.database.ref(collection).push(userSelection);
        let created = firebase.database().ref(`users/${userId}/projects`).push(userSelection);
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


}
