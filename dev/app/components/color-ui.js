/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: color-menu-ui.js
@Last modified by:   rojas
@Last modified time: 2017-02-19T07:45:48+01:00
* @Copyright: S.Rojas
*/



export function colorMenuSkeleton(){
  return `
<div id="dataColor" class="menu">
  <div class="card">
  <div class="card-image" id="cardColor1">
    <img id="color1" src="./img/mat/red.png" style="width:100%">
    <p>Couleur 1</p>
  </div>
</div>
<div class="card">
  <div class="card-image" id="cardColor2">
    <img id="Color2" src="./img/mat/blue.png" style="width:100%">
    <p>Couleur 2</p>
  </div>
</div>
</div>
  `
}
