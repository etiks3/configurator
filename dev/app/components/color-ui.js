/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: color-menu-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-19T08:10:48+01:00
* @Copyright: S.Rojas
*/



export function colorMenuSkeleton(){
  return `
<div id="Couleur" class="menu">
  <div class="card">
  <div class="card-image" id="cardColor1" data-id="bois pré-grisé">
    <img id="color1" class="valign-wrapper" src="./img/mat/red.png" style="width:100%">
    <p>Couleur 1</p>
  </div>
</div>
<div class="card">
  <div class="card-image" id="cardColor2" data-id="bois naturel">
    <img id="color2" class="valign-wrapper" src="./img/mat/blue.png" style="width:100%">
    <p>Couleur 2</p>
  </div>
</div>
</div>
  `
}
