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
//Method to select the item and display it in the centre of the HomePage
    dataColorEvent(){
      document.getElementById('dataColor').addEventListener('click', event=>{
         let choice = this.displayItem(event.target.src);
         return choice;
         console.log(choice);
      })
    }
    dataFabricEvent(){
      document.getElementById('dataFabric').addEventListener('click', event=>{
         this.displayItem(event.target.src);

      })
    }
    displayItem(element){
        document.getElementById('afficher').innerHTML = `<img src="${element}" style="width:100%">`;
    }
}
