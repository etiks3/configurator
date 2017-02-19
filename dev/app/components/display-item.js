/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-19T07:22:59+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: display-item.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-19T07:29:14+01:00
* @Copyright: sylvain rojas
*/

export class DisplayItem(){

constructor{
  
}

//Method to select items
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
    dataRoofEvent(){
     document.getElementById('dataRoof').addEventListener('click', event=>{
       if (event.target.nodeName === "IMG") {
          this.displayItem(event);
       }
      });
    }
    dataStructureEvent(){
     document.getElementById('dataStructure').addEventListener('click', event=>{
       if (event.target.nodeName === "IMG") {
          this.displayItem(event);
       }
      });
    }
    datafrontfaceEvent(){
     document.getElementById('dataFrontface').addEventListener('click', event=>{
       if (event.target.nodeName === "IMG") {
          this.displayItem(event);
       }
      });
    }
    dataFoundEvent(){
     document.getElementById('dataFoundation').addEventListener('click', event=>{
       if (event.target.nodeName === "IMG") {
          this.displayItem(event);
       }
      });
    }
    dataDoorEvent(){
     document.getElementById('dataDoor').addEventListener('click', event=>{
       if (event.target.nodeName === "IMG") {
          this.displayItem(event);
       }
      });
    }
//Method to display the item in the centre of the HomePage
    displayItem(element){
      document.getElementById('display').innerHTML = `<img src="${element.target.src}">`;
      let choice = event.target.id;
      let key = event.target.parentNode.parentNode.parentNode.id;
       if(choice){
         this.userSelection[key] = choice;
         console.log(this.userSelection);
         $('.menu').fadeOut()
       }
    }
  }
