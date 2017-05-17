/**
 * @Author: Sylvain Rojas <Rojas>
 * @Date:   16-02-2017
 * @Project: Configurator
 * @Filename: app.js
* @Last modified by:   sylvain
* @Last modified time: 2017-03-26T16:37:02+02:00
 * @Copyright: S.Rojas
 */


import * as firebase from "firebase";
import { config } from './providers/firebase/config';
import { HomePage } from './pages/home/home';

export class MyApp {

    constructor() {
        //Initialize Firebase
        firebase.initializeApp(config);
        this.appBody = document.getElementsByTagName("app")[0];
    }
    
    // Check if user is logged on and prepare to launch the app
    start() {
        let homePage = new HomePage(this.appBody);
    }
}

//Launch the app
let myApp = new MyApp();
myApp.start();
