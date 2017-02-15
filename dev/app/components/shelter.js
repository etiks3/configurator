import { colorSkeleton } from './color-menu-ui';
import { fabricSkeleton } from './menu-fabric-ui';
export class Shelter{
    constructor(){
      this.userSelection = {
        color: '',
        fabric: ''
      };
    }

    colorDisplay(){
        return colorSkeleton();
    }
    fabricDisplay(){
      return fabricSkeleton();
    }

    dataColorEvent(){
      document.getElementById('dataColor').addEventListener('click', event=>{
        console.log(event.target.parentNode.id)
        this.afficherElement(`./img/mat/${event.target.parentNode.id}.png`);
        this.userSelection.color = event.target.parentNode.id
      })
    }
    dataFabricEvent(){
      document.getElementById('dataFabric').addEventListener('click', event=>{
        console.log(event.target.parentNode.id)
        this.afficherElement(`<img src="./img/mat/${event.target.parentNode.id}.png">`)
        this.userSelection.fabric = event.target.parentNode.id;
      })
    }
    afficherElement(element){
      if(element){
        document.getElementById('afficher').insertAdjacentHTML("beforeend",`
          <img src="./img/mat/pillar.png">
          `)
      }
    }
    ///
}
