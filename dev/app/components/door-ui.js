/**
* @Author: sylvain
* @Date:   2017-02-18T16:30:20+01:00
* @Last modified by:   rojas
* @Last modified time: 2017-02-19T08:12:30+01:00
*/


export function doorMenuSkeleton(){
  return `
<div id="Porte" class="menu">
  <div class="card">
    <div class="card-image" id="cardLeftDoor" data-id="Porte coulissante gauche">
      <img id="leftDoor" class="valign-wrapper" src="./img/mat/porte.png" style="width:100%">
      <p>Porte gauche</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image" id="cardRightDoor" data-id="Porte coulissante droite">
      <img id="rightDoor" class="valign-wrapper"src="./img/mat/porte.png" style="width:100%">
      <p>Porte droite</p>
    </div>
  </div>

</div>
  `
}
