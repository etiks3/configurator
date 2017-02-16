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
         this.afficherElement(event.target.src);
      })
    }
    dataFabricEvent(){
      document.getElementById('dataColor').addEventListener('click', event=>{
         this.afficherElement(event.target.src);
      })
    }

    afficherElement(element){
        document.getElementById('afficher').innerHTML = `<img src="${element}" style="width:100%">`;
    }
}
