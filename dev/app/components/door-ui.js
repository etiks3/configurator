/**
* @Author: sylvain
* @Date:   2017-02-18T16:30:20+01:00
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T17:05:50+01:00
*/


export function doorMenuSkeleton(){
  return `
<div id="dataDoor" class="menu">
  <div class="btn-floating red" id="cardLeftDoor">
    <img id="leftDoor" src="./img/mat/porte.png" style="width:100%">
    <p>Porte gauche</p>
  </div>
  <div class="btn-floating red" id="cardRightDoor">
    <img id="rightDoor" src="./img/mat/porte.png" style="width:100%">
    <p>Porte droite</p>
  </div>
</div>
  `
}
