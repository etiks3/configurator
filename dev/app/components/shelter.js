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
        // console.log(event.target.parentNode)
         this.afficherElement(event.target.src);
         $('.fixed-action-btn').openFAB();
        console.log(this.parentNode);
        // this.userSelection.color = event.target.parentNode.id
      })
    }
    // dataFabricEvent(){
    //   document.getElementById('dataFabric').addEventListener('click', event=>{
    //     // console.log(event.target.parentNode)
    //     this.afficherElement(`<img src="./img/mat/${event.target.parentNode}.png">`)
    //     // this.userSelection.fabric = event.target.parentNode;
    //   })
    // }

    afficherElement(element){
        document.getElementById('afficher').innerHTML = `<img src="${element}" style="width:100%">`;
         console.log(element);
         $('.fixed-action-btn').closeFAB()
    }

}
