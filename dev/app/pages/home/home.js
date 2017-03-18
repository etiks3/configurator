/**
 * @Author: Sylvain Rojas <Rojas>
 * @Date:   16-02-2017
 * @Project: Configurator
 * @Filename: home.js
 * @Last modified by:   rojas
 * @Last modified time: 25-02-2017
 * @Copyright: S.Rojas
 */

import { FirebaseService } from '../../providers/firebase/firebase-service';
import { homeSkeleton } from './home-ui'
import { Shelter } from '../../components/shelter';

export class HomePage {

    constructor(appBody) {
        this.appBody = appBody
        this.shelter = new Shelter();
        this.initUI();
        this.loadEventUI();
        this.fbService = new FirebaseService();
        this.database = new FirebaseService();
    }

    //HomePage Initialization
    initUI() {
        // remove all section before display UI
        if (document.getElementsByTagName("section")[0]) {
            document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
        }
        // create page skeleton
        let pageSkeleton = homeSkeleton();
        // add page skeleton in body
        this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton)
    }

    //Event Method Group
    loadEventUI() {
            let foundation_marker = document.getElementById("foundation-marker")
            if (foundation_marker) {
                foundation_marker.addEventListener('click', (e) => {
                    document.getElementById('start').style.visibility = "hidden";
                    let menu_foundation = this.shelter.foundationDisplay()
                    let foundation = document.getElementById("foundations")
                    foundation.innerHTML = menu_foundation;
                    this.shelter.dataFoundEvent()
                });
            }
            //A Function to display an item menu on click
            let structure_marker = document.getElementById("structure-marker");
            if (structure_marker) {
                structure_marker.addEventListener('click', (e) => {
                    let menu_structure = this.shelter.structureDisplay()
                    let structure = document.getElementById("structure")
                    structure.innerHTML = menu_structure;
                    //toggle pour l'affichage du menu
                    if (structure.style.visibility === 'visible') {
                        structure.style.visibility = 'hidden';
                    } else {
                        structure.style.visibility = 'visible';
                    }
                    this.shelter.dataStructureEvent()
                });
            }
            //A Function to display an item menu on click
            let fabric_marker = document.getElementById("fabric-marker");
            if (fabric_marker) {
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

            //A Function to display an item menu on click
            let color_marker = document.getElementById("color-marker");
            if (color_marker) {
                color_marker.addEventListener('click', (e) => {
                    let menu_color = this.shelter.colorDisplay()
                    let color = document.getElementById("color")
                    color.innerHTML = menu_color;
                    //toggle pour l'affichage du menu
                    if (color.style.visibility === 'visible') {
                        color.style.visibility = 'hidden';
                    } else {
                        color.style.visibility = 'visible';
                    }
                    this.shelter.dataColorEvent()
                });
            }

            let door_marker = document.getElementById("door-marker");
            if (door_marker) {
                door_marker.addEventListener('click', (e) => {
                    let menu_door = this.shelter.doorDisplay()
                    let door = document.getElementById("door")
                    door.innerHTML = menu_door;
                    //toggle pour l'affichage du menu
                    if (door.style.visibility === 'visible') {
                        door.style.visibility = 'hidden';
                    } else {
                        door.style.visibility = 'visible';
                    }
                    this.shelter.dataDoorEvent()
                });
            }
            let frontface_marker = document.getElementById("frontface-marker");
            if (frontface_marker) {
                frontface_marker.addEventListener('click', (e) => {
                    let menu_frontface = this.shelter.frontfaceDisplay()
                    let frontface = document.getElementById("frontface")
                    frontface.innerHTML = menu_frontface;
                    //toggle pour l'affichage du menu
                    if (frontface.style.visibility === 'visible') {
                        frontface.style.visibility = 'hidden';
                    } else {
                        frontface.style.visibility = 'visible';
                    }
                    this.shelter.datafrontfaceEvent()
                });
            }
            let roof_marker = document.getElementById("roof-marker");
            if (roof_marker) {
                roof_marker.addEventListener('click', (e) => {
                    let menu_roof = this.shelter.roofDisplay()
                    let roof = document.getElementById("roof")
                    roof.innerHTML = menu_roof;
                    //toggle pour l'affichage du menu
                    if (roof.style.visibility === 'visible') {
                        roof.style.visibility = 'hidden';
                    } else {
                        roof.style.visibility = 'visible';
                    }
                    this.shelter.dataRoofEvent()
                });
            }
            document.getElementById('save-btn').addEventListener('click', (event) => {
                this.saveData(event);
                this.googleAuth(event), false;
            });
        }
        //Method to save all projects data in Firebase and link user to database
    saveData(event) {
            this.googleAuth()
                .then(res => {
                    this.fbService.create(`projet/${res.userID}`, this.shelter.userSelection)
                        .then((response) => {
                            // console.log(response);
                        }).catch(
                            err => console.log(err)
                        )
                      })
                    }
        //Method to authenticate through Google
    googleAuth(event) {
        event.preventDefault();
        return this.fbService.googleAuth()
            .then((result) => {
                return {
                    token: result.credential.accessToken,
                    userId: result.user.uid,
                    userName: result.user.displayName,
                    userEmail: result.user.email
                }
            });
          }
        }
