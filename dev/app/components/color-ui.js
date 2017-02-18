/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: color-menu-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T17:05:22+01:00
* @Copyright: S.Rojas
*/



export function colorMenuSkeleton(){
  return `
<div id="dataColor" class="menu">
  <div class="btn-floating red" id="cardColor1">
    <img id="color1" src="./img/mat/red.png" style="width:100%">
    <p>Couleur 1</p>
  </div>
  <div class="btn-floating red" id="cardColor2">
    <img id="Color2" src="./img/mat/blue.png" style="width:100%">
    <p>Couleur 2</p>
  </div>
</div>
  `
}
