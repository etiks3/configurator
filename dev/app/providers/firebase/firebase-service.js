

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
