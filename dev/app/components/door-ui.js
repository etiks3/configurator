/**
* @Author: sylvain
* @Date:   2017-02-18T16:30:20+01:00
@Last modified by:   rojas
@Last modified time: 2017-02-19T07:47:10+01:00
*/


export function doorMenuSkeleton(){
  return `
<div id="dataDoor" class="menu">
  <div class="card">
    <div class="card-image" id="cardLeftDoor">
      <img id="leftDoor" src="./img/mat/porte.png" style="width:100%">
      <p>Porte gauche</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image" id="cardRightDoor">
      <img id="rightDoor" src="./img/mat/porte.png" style="width:100%">
      <p>Porte droite</p>
    </div>
  </div>

</div>
  `
}
