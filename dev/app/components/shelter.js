import { colorMenuSkeleton } from './color-menu-ui';
import { fabricMenuSkeleton } from './menu-fabric-ui';
export class Shelter{
    constructor(){
      this.userSelection = {
        color: '',
        fabric: ''
      };
    }

    colorDisplay(){
        return colorMenuSkeleton();
    }
    fabricDisplay(){
      return fabricMenuSkeleton();
    }

    dataColorEvent(){
      document.getElementById('dataColor').addEventListener('click', event=>{
         this.displayItem(event.target.src);
         this.userSelection = [];
         console.log(this.userSelection);
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
