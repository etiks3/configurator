/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T09:32:17+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: firebase-service.js
* @Last modified by:   rojas
* @Last modified time: 25-02-2017
* @Copyright: sylvain rojas
*/



import * as firebase from "firebase";


export class FirebaseService{

  constructor(){
    this.database = firebase.database();
    //this.storage = firebase.storage();
    console.log('firebase ready-> ', this.database);
    this.storage = firebase.storage();
  }
//Firebase CRUD Process
  create(collection, userSelection) {
    // define firebase collection with correct style
    collection = `${collection}/`;
    return new Promise((resolve, reject) => {
        let created = this.database.ref(collection).push(userSelection);
        if(created) {
            resolve(created);
            console.log(created);
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
//Method to display Google Pop-up
    googleAuth(){
      let googleProvider = new firebase.auth.GoogleAuthProvider();
      return this.auth.signInWithPopup(googleProvider)
    }
// Method to logout
    logOut(){
   let confirmBox = window.confirm("Realy want to logout??");
   if (confirmBox != true) {
     return;
   }
   this.auth.signOut().then(() => {
     // Sign-out successful.
     console.log('Sign-out successful')
   }, (error) => {
     // An error happened.
     console.log('Sign-out error happened')
   });
 }
}
