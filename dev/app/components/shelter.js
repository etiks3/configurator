/**
* @Author: Sylvain Rojas <rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: shelter.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T17:19:57+01:00
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
      this.indexMarker = 0;
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
        return roofMenuSkeleton();
    }
//Method to select the item
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
//Method to display the item in the centre of the HomePage
    displayItem(element){
      document.getElementById('display').innerHTML = `<img src="${element.target.src}" style="width:100% margin:0px auto">`;
      let choice = event.target.id;
      let key = event.target.parentNode.parentNode.parentNode.id;
       if(choice){
         this.userSelection[key] = choice;
         console.log(this.userSelection);
         $('.menu').fadeOut()
        //  var newMenu = document.createElement("button");
        //  newMenu.className = "btn-floating btn-large red";
        //  document.body.appendChild(newMenu, display);


        //this.createMenu();
       }
    }
    // createMenu(){
    //    let marker = document.createElement("div");
    //    marker.className = 'btn-floating btn-large red';
    //    document.body.appendChild(marker)
    //    let cross = document.createElement('i');
    //    cross.className = 'material-icons'
    //     marker.appendChild(cross);
    //     var t = document.createTextNode("add");
    //     let newMenu =  cross.appendChild(t);
    //     console.log(newMenu);
    //
    // }
}
