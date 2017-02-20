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
                    this.displayItem(event);
                 }
              });
            }
            dataFabricEvent(){
             document.getElementById('dataFabric').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
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
                  this.displayItem(event);
               }
              });
            }
            datafrontfaceEvent(){
             document.getElementById('dataFrontface').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                  this.displayItem(event);
               }
              });
            }
            dataFoundEvent(){
              document.getElementById('dataFoundation').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                  this.displayItem(event);
                }
              });
            }
            dataDoorEvent(){
             document.getElementById('dataDoor').addEventListener('click', event=>{
               if (event.target.nodeName === "IMG") {
                  this.displayItem(event);
               }
              });
            }
        //Method to display the item in the centre of the HomePage
            displayItem(element){
              document.getElementById('display').innerHTML = `<img src="${element.target.src}">`;
              let choice = event.target.id;
              let key = event.target.parentNode.parentNode.parentNode.id;
               if(choice){
                 this.userSelection[key] = choice;
                 console.log(this.userSelection);
                 $('.menu').fadeOut("slow")
                 let markersList = document.getElementsByClassName('markers')[1];
                 let markers = this.indexMarker.markersList ++;


               }
            }
          }
