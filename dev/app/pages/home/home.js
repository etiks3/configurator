
// import { FirebaseService } from '../../providers/firebase/firebase-service';
import { homeSkeleton } from './home-ui.js'
import { Shelter } from '../../components/shelter';
export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Welcome';
    this.shelter = new Shelter();
    // this.fbService = new FirebaseService();
    this.initUI();
    this.loadEventUI();

  }

  loadEventUI() {
    let color_marker = document.getElementById("color_marker");
    if(color_marker) {
      color_marker.addEventListener('click', (e) => {
          let menu_color = this.shelter.colorDisplay()
          let color = document.getElementById("couleur")
          //toggle pour l'affichage du menu
          if (color.style.visibility === 'hidden') {
            color.style.visibility = 'visible';
          } else {
            color.style.visibility = 'hidden';
          }
          color.innerHTML = menu_color;
          this.shelter.dataColorEvent()
      });
    }
    let fabric_marker = document.getElementById("fabric_marker");
    if(fabric_marker) {
        fabric_marker.addEventListener('click', (e) => {
            let menu_fabric = this.shelter.fabricDisplay()
            let fabric = document.getElementById("fabric")
            //toggle pour l'affichage du menu
            if (fabric.style.visibility === 'hidden') {
              fabric.style.visibility = 'visible';
            } else {
              fabric.style.visibility = 'hidden';
            }
            fabric.innerHTML = menu_fabric;
            this.shelter.dataFabricEvent();
          });
        }
    }

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
}
