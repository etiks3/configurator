/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: app.js
* @Last modified by:   rojas
* @Last modified time: 25-02-2017
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
<<<<<<< HEAD

    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        //User is signed in.
        console.log('User IS logged-> ', user)
=======
      console.log('helo');
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // console.log(user);
        // User is signed in.
        // console.log('User IS log-> ', user)
>>>>>>> 9975f4d3c8a7dedc5928cf1e2d34edef7b096acc
        let userDataReady = {
          name: user.displayName,
          email: user.email,
          uid: user.uid
        }
      }
      else{
        alert('vous n etes pas connecte')
      }
    });
  }
}
//Launch the app
let myApp = new MyApp();
myApp.start();
