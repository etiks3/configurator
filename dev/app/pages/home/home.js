/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: home.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T17:17:38+01:00
* @Copyright: S.Rojas
*/



// import { FirebaseService } from '../../providers/firebase/firebase-service';
import { homeSkeleton } from './home-ui'
import { Shelter } from '../../components/shelter';

export class HomePage {

  constructor(appBody){
    this.appBody = appBody
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
    let roof_marker = document.getElementById("roof-marker");
    if(roof_marker) {
      roof_marker.addEventListener('click', (e) => {
          let menu_roof = this.shelter.roofDisplay()
          let roof = document.getElementById("roof")
          roof.innerHTML = menu_roof;
          //toggle pour l'affichage du menu
          if (roof.style.visibility === 'visible') {
            roof.style.visibility = 'hidden';
          }
          else {
            roof.style.visibility = 'visible';
          }
          this.shelter.dataRoofEvent()
      });
    }
    //A Function to display an item menu on click
    let structure_marker = document.getElementById("structure-marker");
    if(structure_marker) {
      structure_marker.addEventListener('click', (e) => {
          let menu_structure = this.shelter.structureDisplay()
          let structure = document.getElementById("structure")
          structure.innerHTML = menu_structure;
          //toggle pour l'affichage du menu
          if (structure.style.visibility === 'visible') {
            structure.style.visibility = 'hidden';
          }
          else {
            structure.style.visibility = 'visible';
          }
          this.shelter.dataStructureEvent()
      });
    }
    //A Function to display an item menu on click
    let fabric_marker = document.getElementById("fabric-marker");
    if(fabric_marker) {
        fabric_marker.addEventListener('click', (e) => {
            let menu_fabric = this.shelter.fabricDisplay()
            let fabric = document.getElementById("fabric")
            console.log(fabric);
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
