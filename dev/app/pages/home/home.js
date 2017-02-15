
// import { FirebaseService } from '../../providers/firebase/firebase-service';
import { homeSkeleton } from './home-ui.js'
import { Shelter } from '../../components/shelter';
export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Welcome';
    this.shelter = new Shelter();
    // this.fbService = new FirebaseService();
    this.initUI();
    this.loadEventUI();
  }

  loadEventUI() {
    let color_button = document.getElementById("color_button");
    if(color_button) {
      color_button.addEventListener('click', (e) => {
          console.log('event->', e)
          let test = this.shelter.dataCouleur()
          let color = document.getElementById("couleur")
          color.innerHTML = test;
          this.shelter.dataColorEvent()
      })
    }
    else{
      color.innerHTML='';
    }
  }

  initUI(){
    // remove all section before display UI
    if(document.getElementsByTagName("section")[0]){
      document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
    }
    // create page skeleton
    let pageSkeleton = homeSkeleton();
    // add page skeleton in body
    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton)
  }

}
