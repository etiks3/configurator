/**
* @Author: Sylvain Rojas <rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: shelter.js
* @Last modified by:   rojas
* @Last modified time: 22-02-2017
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
      this.indexMarker = [0];
      this.userSelection = {};
    }
    //Method to display the item menu in a div
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

        //Method to select items
        dataFoundEvent(){
          document.getElementById('dataFoundation').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('structure-marker').style.visibility = "visible";
            }
          });
        }
        dataStructureEvent(){
         document.getElementById('dataStructure').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('fabric-marker').style.visibility = "visible";
           }
          });
        }
        dataFabricEvent(){
         document.getElementById('dataFabric').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('frontface-marker').style.visibility = "visible";
            }
          });
        }
        datafrontfaceEvent(){
         document.getElementById('dataFrontface').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('color-marker').style.visibility = "visible";
           }
          });
        }
        dataDoorEvent(){
         document.getElementById('dataDoor').addEventListener('click', event=>{
           if (event.target.nodeName === "IMG") {
             this.selectedItem();
             document.getElementById('save-btn').style.visibility = "visible";
             $("#save-btn").fadeIn(2000)
           }
          });
        }
        dataColorEvent(){
         document.getElementById('dataColor').addEventListener('click', event=>{
             if (event.target.nodeName === "IMG") {
               this.selectedItem();
               document.getElementById('door-marker').style.visibility = "visible";

             }
          });
        }

        //Method to display the item in the centre of the HomePage
            selectedItem(){
              let choice = event.target.id;
              let key = event.target.parentNode.parentNode.parentNode.id;
               if(choice){
                 this.userSelection[key] = choice;
                 $('.menu').fadeOut("slow")
                this.displayItemB();
                this.indexOfSelected(choice)
               }
            }
            indexOfSelected(choice){
              console.log(choice);
            }

            reset(){
              let reset = document.getElementById('reset').addEventListener('click', _=>{
                  document.getElementById('display').innerHTML = "";
              })
            }


            displayItemB() {
              switch(this.userSelection.dataFoundation){
               case 'foundation1':
                 document.getElementById('display').innerHTML += `<img src="./img/mat/dalle.png">`;
                 break;
               case 'foundation2':
                 document.getElementById('display').innerHTML += `<img src="./img/mat/pillar.png">`;
                 break;
               }
               switch(this.userSelection.dataStructure){
                case 'structure1':
                  document.getElementById('display').innerHTML += `<img src="./img/mat/charpente.png">`;
                  break;
                case 'structure2':
                  document.getElementById('display').innerHTML += `<img src="./img/mat/charpente.png">`;
                  break;
                }
               switch(this.userSelection.dataColor){
                case 'color1':
                  document.getElementById('display').innerHTML += `<img src="./img/mat/red.png">`;
                  break;
                case 'color2':
                  document.getElementById('display').innerHTML += `<img src="./img/mat/blue.png">`;
                  break;
                }
                switch(this.userSelection.dataDoor){
                 case 'leftDoor':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/porte.png">`;
                   break;
                 case 'rightDoor':
                   document.getElementById('display').innerHTML += `<img src="./img/mat/porte.png">`;
                   break;
                 }
                 switch(this.userSelection.dataRoof){
                  case 'roof2':
                    document.getElementById('display').innerHTML += `<img src="./img/mat/epdm.png">`;
                    break;
                  case 'roof2':
                    document.getElementById('display').innerHTML += `<img src="./img/mat/epdm.png">`;
                    break;
                  }
                  switch(this.userSelection.dataFrontface){
                   case 'frontface1':
                     document.getElementById('display').innerHTML += `<img src="./img/mat/bardage.png">`;
                     break;
                   case 'frontface2':
                     document.getElementById('display').innerHTML += `<img src="./img/mat/bardage.png">`;
                     break;
                   }
                   switch(this.userSelection.dataFabric){
                    case 'fabric1':
                      document.getElementById('display').innerHTML += `<img src="./img/mat/osb.png">`;
                      break;
                    case 'fabric2':
                      document.getElementById('display').innerHTML += `<img src="./img/mat/bordure.png">`;
                      break;
                    }
                    switch(this.userSelection.dataStructure){
                     case 'structure1':
                       document.getElementById('display').innerHTML += `<img src="./img/mat/charpente.png">`;
                       break;
                     case 'structure2':
                       document.getElementById('display').innerHTML += `<img src="./img/mat/charpente.png">`;
                       break;
                     }
            }

          }
