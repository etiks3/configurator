/**
* @Author: Sylvain Rojas <rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: shelter.js
* @Last modified by:   rojas
* @Last modified time: 20-02-2017
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
            dataColorEvent(){
             document.getElementById('dataColor').addEventListener('click', event=>{
                 if (event.target.nodeName === "IMG") {
                   document.getElementById('door-marker').style.visibility = "visible";
                    this.displayItem(event);
                 }
              });
            }
            dataFabricEvent(){
             document.getElementById('dataFabric').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                 document.getElementById('frontface-marker').style.visibility = "visible";
                  this.displayItem(event);
                }
              });
            }
            dataRoofEvent(){
             document.getElementById('dataRoof').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                  this.displayItem(event);
               }
              });
            }
            dataStructureEvent(){
             document.getElementById('dataStructure').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                 document.getElementById('fabric-marker').style.visibility = "visible";
                  this.displayItem(event);
               }
              });
            }
            datafrontfaceEvent(){
             document.getElementById('dataFrontface').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                 document.getElementById('color-marker').style.visibility = "visible";
                  this.displayItem(event);
               }
              });
            }
            dataFoundEvent(){
              document.getElementById('dataFoundation').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                 document.getElementById('structure-marker').style.visibility = "visible";
                 $("#structure-marker").fadeIn(1000);
                  this.displayItem(event);
                }
              });
            }
            dataDoorEvent(){
             document.getElementById('dataDoor').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                 document.getElementById('save-btn').style.visibility = "visible";
                 $("#save-btn").fadeIn(2000)
                  this.displayItem(event);
               }
              });
            }
        //Method to display the item in the centre of the HomePage
            displayItem(element){
              // document.getElementById('display').innerHTML = `<img src="${element.target.src}">`;
              let choice = event.target.id;
              let key = event.target.parentNode.parentNode.parentNode.id;
               if(choice){
                 this.userSelection[key] = choice;
                 console.log(this.userSelection);
                 $('.menu').fadeOut("slow")
                 this.displayItemB();

               }
            }
            reset(){
              let reset = document.getElementById('reset').addEventListener('click', _=>{
                  document.getElementById('display').innerHTML = "";
              })
            }


            displayItemB() {
              this.reset();
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
