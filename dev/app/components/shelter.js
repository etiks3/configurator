import { colorSkeleton } from './shelter-color-ui';

export class Shelter{
    constructor(){
      this.userSelection = {
        color: '',
        size: ''
      };
    }

    dataCouleur(){
        return colorSkeleton();
    }
    dataColorEvent(){
      document.getElementById('dataColor').addEventListener('click', event=>{
        console.log(event.target.parentNode.id)
        this.afficherElement('./img/mat/pillar.png')
        this.userSelection.color = event.target.parentNode.id
      })
    }



    afficherElement(element){
      /// mon code
    }
}
