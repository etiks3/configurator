/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: home.js
* @Last modified by:   Rojas
* @Last modified time: 17-02-2017
* @Copyright: S.Rojas
*/



// import { FirebaseService } from '../../providers/firebase/firebase-service';
import { homeSkeleton } from './home-ui.js'
import { Shelter } from '../../components/shelter';

export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Welcome';
    this.shelter = new Shelter();
    this.initUI();
    this.loadEventUI();
    // this.fbService = new FirebaseService();
  }

//HomePage Initialization
  initUI(){
    // remove all section before display UI
    if(document.getElementsByTagName("section")[0]){
      document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
    }
    // create page skeleton
    let pageSkeleton = homeSkeleton();
    // add page skeleton in body
    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton)
  }
//Event Method Group
  loadEventUI() {
    //A Function to display an item menu on click
    let color_marker = document.getElementById("color-marker");
    if(color_marker) {
      color_marker.addEventListener('click', (e) => {
          let menu_color = this.shelter.colorDisplay()
          let color = document.getElementById("color")
          color.innerHTML = menu_color;
          //toggle pour l'affichage du menu
          if (color.style.visibility === 'visible') {
            color.style.visibility = 'hidden';
          }
          else {
            color.style.visibility = 'visible';
          }
          this.shelter.dataColorEvent()
      });
    }
    //A Function to display an item menu on click
    let fabric_marker = document.getElementById("fabric-marker");
    if(fabric_marker) {
        fabric_marker.addEventListener('click', (e) => {
            let menu_fabric = this.shelter.fabricDisplay()
            let fabric = document.getElementById("fabric")
            fabric.innerHTML = menu_fabric;
            //toggle pour l'affichage du menu
            if (fabric.style.visibility === 'visible') {
              fabric.style.visibility = 'hidden';
            } else {
              fabric.style.visibility = 'visible';
            }
            this.shelter.dataFabricEvent();
            
          });
        }
    }
}
