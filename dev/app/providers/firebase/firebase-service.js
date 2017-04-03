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

export class FirebaseService {

    constructor() {
        this.database = firebase.database();
        this.storage = firebase.storage();
        this.user = firebase.auth();
        this.loginCallBack();
    }

    loginCallBack() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                document.getElementById('user').innerHTML = user.displayName;
                console.log('User IS logged-> ', user);
            } else {
                // No user is signed in.
                console.log('User NOT logged.')
            }
        });
    }

    loginWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then((result) => {
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
            });
    }

    isLogged() {
        return firebase.auth().currentUser;
    }

    logout() {
        firebase.auth().signOut().then(function() {
            console.log("logout successful");
            alert('Are you sure to quit?')
            document.getElementById('user').innerHTML = " ";
            // Sign-out successful.
        }, function(error) {
            // An error happened
            console.error("failed to logout");
        });

    }

    //Firebase CRUD Process
    create(userSelection) {
            // define firebase collection with correct style
            let userId = firebase.auth().currentUser;
            return new Promise((resolve, reject) => {
                //let created = this.database.ref(collection).push(userSelection);
                let created = firebase.database().ref(`users/${userId}/projects`).push(userSelection);
                console.log(created)
                if (created) {
                    resolve(created);
                }
            });
        }
        // Read from database
    read(collection) {
        return this.database.ref(collection);
    };
    // Update from database
    update(collection, key, userSelection) {
            collection = `${collection}/`;
            return this.database.ref(collection).child(key).update(userSelection);
        }
        // Delet from database
    delete(collection, key) {
        collection = `${collection}/`;
        return this.database.ref(collection).child(key).remove();
    }
}