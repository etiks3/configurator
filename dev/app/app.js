/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: app.js
* @Last modified by:   sylvain
* @Last modified time: 2017-03-19T20:02:34+01:00
* @Copyright: S.Rojas
*/



import * as firebase from "firebase";
import { config } from './providers/firebase/config';
import { HomePage } from './pages/home/home';

 class MyApp {

  constructor(){

    //Initialize Firebase
    firebase.initializeApp(config);
    this.appBody = document.getElementsByTagName("app")[0];
  }
  // Check if user is logged on and prepare to launch the app
  start(){
    let homePage = new HomePage(this.appBody);
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
      }


//Launch the app
let myApp = new MyApp();
myApp.start();
