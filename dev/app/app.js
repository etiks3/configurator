/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: app.js
* @Last modified by:   rojas
* @Last modified time: 17-02-2017
* @Copyright: S.Rojas
*/



// import * as firebase from "firebase";
// import { config } from './providers/firebase/config';

 import { HomePage } from './pages/home/home';

 class MyApp {

  constructor(){
    // Initialize Firebase
    // firebase.initializeApp(config);
    this.appBody = document.getElementsByTagName("app")[0];
  }

  start(){
     let homePage = new HomePage(this.appBody);
  }
}
  let myApp = new MyApp();
    myApp.start();
