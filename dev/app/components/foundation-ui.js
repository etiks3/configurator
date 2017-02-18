/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T16:31:44+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: foundation-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T16:36:00+01:00
* @Copyright: sylvain rojas
*/



export function foundationMenuSkeleton(){
  return `
<div id="dataColor" class="menu">
  <div class="btn-floating red" id="cardColor1">
    <img id="Couleur 1" src="./img/mat/pillar.png" style="width:100%">
    <p>Couleur 1</p>
  </div>
  <div class="btn-floating red" id="cardColor2">
    <img id="Couleur 2" src="./img/mat/Hair.png" style="width:100%">
    <p>couleur 2</p>
  </div>
</div>
  `
}
