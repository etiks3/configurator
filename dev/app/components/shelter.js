import { colorSkeleton } from './shelter-color-ui';
import { fabricSkeleton } from './shelter-fabric-ui';
export class Shelter{
    constructor(){
      this.userSelection = {
        color: '',
        fabric: ''
      };
    }

    itemDisplay(){
        return colorSkeleton();
    }
    dataColorEvent(){
      document.getElementById('dataColor').addEventListener('click', event=>{
        console.log(event.target.parentNode.id)
        this.afficherElement('./img/mat/pillar.png')
        this.userSelection.color = event.target.parentNode.id
      })
    }
    dataFabricEvent(){
      document.getElementById('dataFabric').addEventListener('click', event=>{
        console.log(event.target.parentNode.id)
        this.afficherElement('./img/mat/pillar.png')
        this.userSelection.fabric = event.target.parentNode.id
      })
    }



    afficherElement(element){
      /// mon code
    }
}
