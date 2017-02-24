/**
* @Author: Sylvain Rojas <rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: shelter.js
* @Last modified by:   rojas
* @Last modified time: 24-02-2017
* @Copyright: S.Rojas
*/

import { colorMenuSkeleton } from './color-ui';
import { fabricMenuSkeleton } from './fabric-ui';
import { foundationMenuSkeleton } from './foundation-ui';
import { structureMenuSkeleton } from './structure-ui';
import { doorMenuSkeleton } from './door-ui';
import { frontfaceMenuSkeleton } from './frontface-ui';
import { roofMenuSkeleton } from './roof-ui';


export class Shelter{
    constructor(){
      this.userSelection = {};
    }
    //Methods to display the item menu in a div
        colorDisplay(){
            return colorMenuSkeleton();
        }
        fabricDisplay(){
            return fabricMenuSkeleton();
        }
        roofDisplay(){
            return roofMenuSkeleton();
        }
        structureDisplay(){
            return structureMenuSkeleton();
        }
        frontfaceDisplay(){
            return frontfaceMenuSkeleton();
        }
        doorDisplay(){
            return doorMenuSkeleton();
        }
        foundationDisplay(){
          return foundationMenuSkeleton();
        }

      //Method to select foundations items
        dataFoundEvent(){
          document.getElementById('Fondations').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('structure-marker').style.visibility = "visible";
            }
          });
        }
      //Method to select strcuture items
        dataStructureEvent(){
         document.getElementById('Structure').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('fabric-marker').style.visibility = "visible";
           }
          });
        }
      //Method to select fabric items
        dataFabricEvent(){
         document.getElementById('Isolation').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('frontface-marker').style.visibility = "visible";
            }
          });
        }
      //Method to select frontface items
        datafrontfaceEvent(){
         document.getElementById('Facade').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
            document.getElementById('door-marker').style.visibility = "visible";
            // test
            $("#save-btn").fadeIn(2000)
           }
          });
        }
      //Method to select door items
        dataDoorEvent(){
         if(document.getElementById('Porte')){
           document.getElementById('Porte').addEventListener('click', event=>{
             if (event.target.nodeName === "IMG") {
               this.selectedItem();
              }
            });
         }
       }
      //Method to select color items
        dataColorEvent(){
         document.getElementById('Couleur').addEventListener('click', event=>{
             if (event.target.nodeName === "IMG") {
               this.selectedItem();
             }
          });
        }

      //Method to display the item in the centre of the HomePage and elements on the side
            selectedItem(){
              let choice = event.target.id;
              let key = event.target.parentNode.parentNode.parentNode.id;
              let description = event.target.parentNode.getAttribute("data-id");
               if(choice){
                 this.userSelection[key] = {'select':choice,'descr':description};
                 let affichage = "";
                for (key in this.userSelection){
                  affichage += `<tr><td>${key}</td><td>${this.userSelection[key].descr}</td></tr>`;
                }
                 let keys = Object.values(this.userSelection);
                 document.getElementById('selectionUser').innerHTML =
                 `
                 <h1>Votre Selection</h1>
                 <table class="responsive-table">
                 <thead>
                     <tr>
                      <th data-field="id">Description</th>
                      <th data-field="name">Selection</th>
                      </tr>
                  </thead>
                  <tbody>
                    ${affichage}
                  </tbody>
                 </table>
                 `
                 $('.menu').fadeOut("slow")
                this.displayItemB();
                this.reset()
              }
            }

        //Method to display options selected
            displayItemB() {
              if (this.userSelection.Fondations) {
                switch(this.userSelection.Fondations.select){
                 case 'foundation1':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/dalle.png">`;
                   break;
                 case 'foundation2':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/pillar.png">`;
                   break;
                 }
              }
              if (this.userSelection.Structure) {
                switch(this.userSelection.Structure.select){
                 case 'structure1':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/charpente.png">`;
                   break;
                 case 'structure2':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/charpente.png">`;
                   break;
                 }
              }
              if(this.userSelection.Isolation){
                  switch(this.userSelection.Isolation.select){
                   case 'fabric1':
                     document.getElementById('display').innerHTML += `<img src="./img/mat/osb.png">`;
                     break;
                   case 'fabric2':
                     document.getElementById('display').innerHTML += `<img src="./img/mat/osb-right.png">`;
                     break;
                   }
              }
              if(this.userSelection.Facade){
                switch(this.userSelection.Facade.select){
                   case 'frontface1':
                     document.getElementById('display').innerHTML += `<img src="./img/mat/bardage-pregrise.png">`;
                     break;
                   case 'frontface2':
                     document.getElementById('display').innerHTML += `<img src="./img/mat/bardage.png">`;
                     break;
                   }
              }
              if(this.userSelection.Porte){
                switch(this.userSelection.Porte.select){
                 case 'leftDoor':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/porte.png">`;
                   break;
                 case 'rightDoor':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/porte.png">`;
                   break;
                 }
              }
               if(this.userSelection.Couleur){
                 switch(this.userSelection.Couleur.select){
                  case 'color1':
                    document.getElementById('display').innerHTML += `<img src="./img/mat/red.png">`;
                    break;
                  case 'color2':
                    document.getElementById('display').innerHTML += `<img src="./img/mat/blue.png">`;
                    break;
                  }
               }
            }

          //Method to empty the reset the app
            reset(){
              let reset = document.getElementById('reset').addEventListener('click', _=>{
                  document.getElementById('display').innerHTML = " ";
                  document.getElementById('selectionUser').innerHTML = " ";
                  this.userSelection={};
              })
            }
          }
