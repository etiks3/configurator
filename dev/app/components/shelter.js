/**
* @Author: Sylvain Rojas <rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: shelter.js
* @Last modified by:   rojas
* @Last modified time: 17-02-2017
* @Copyright: S.Rojas
*/



import { colorMenuSkeleton } from './color-menu-ui';
import { fabricMenuSkeleton } from './menu-fabric-ui';

export class Shelter{
    constructor(){
      this.userSelection = {
        color: '',
        fabric: ''
      };
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
         this.displayItem(event.target.src);
      });
    }
    dataFabricEvent(){
     document.getElementById('dataFabric').addEventListener('click', event=>{
      this.displayItem(event.target.src);
      });
    }
//Method to display the item in the centre of the HomePage
    displayItem(element){
      document.getElementById('afficher').innerHTML = `<img src="${element}" style="width:100% margin:0px auto">`;
      let choice = document.getElementById('cardColor1');
       if(choice.hasAttributes()){
         console.log(choice.attributes);
       }
    }
}
