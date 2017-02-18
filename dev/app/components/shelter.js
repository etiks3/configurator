/**
* @Author: Sylvain Rojas <rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: shelter.js
* @Last modified by:   rojas
* @Last modified time: 17-02-2017
* @Copyright: S.Rojas
*/

import { colorMenuSkeleton } from './color-ui';
import { fabricMenuSkeleton } from './fabric-ui';

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
//Method to display the item in the centre of the HomePage
    displayItem(element){
      document.getElementById('display').innerHTML = `<img src="${element.target.src}" style="width:100% margin:0px auto">`;
      let choice = event.target.id;
      let key = event.target.parentNode.parentNode.parentNode.id;
       if(choice){
         this.userSelection[key] = choice;
         console.log(this.userSelection);
         $('.menu').fadeOut()
         var newMenu = document.createElement("button");
         newMenu.className = "btn-floating btn-large red";
         document.body.appendChild(newMenu, display);


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
