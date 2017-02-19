/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T09:32:17+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: firebase-service.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-19T06:13:30+01:00
* @Copyright: sylvain rojas
*/



import * as firebase from "firebase";

export class FirebaseService{

  constructor(){
      this.database = firebase.database();
      console.log('firebase ready-> ', this.database);
  }

  create(collection, datasObject) {
    // define firebase collection with correct style
    collection = `${collection}/`;

    return new Promise((resolve, reject) => {
        let created = firebase.database().ref(collection).push(datasObject);
        if(created) {
            resolve(created);
        }
        else {
            reject("The write operation failed");
        }
    });
  }

}
