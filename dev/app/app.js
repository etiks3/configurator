
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
