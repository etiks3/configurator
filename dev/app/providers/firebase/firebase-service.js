/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T09:32:17+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: firebase-service.js
* @Last modified by:   rojas
* @Last modified time: 20-02-2017
* @Copyright: sylvain rojas
*/



import * as firebase from "firebase";
// import { userSelection } from "../components/shelter"

export class FirebaseService{

  constructor(){
    this.database = firebase.database();
    this.auth = firebase.auth();
    console.log('firebase ready-> ', this.database);
  }

  create(collection, userSelection) {
    // define firebase collection with correct style
    collection = `${collection}/`;

    return new Promise((resolve, reject) => {
        let created = this.database.ref(collection).push(userSelction);
        if(created) {
            resolve(created);
        }
        else {
            reject("The write operation failed");
        }
    });
  }


}
