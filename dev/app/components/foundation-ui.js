/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T16:31:44+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: foundation-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-19T08:12:32+01:00
* @Copyright: sylvain rojas
*/



export function foundationMenuSkeleton(){
  return `
<div id="dataFoundation" class="menu">
  <div class="card">
  <div class="card-image" id="cardFoundation1">
    <img id="foundation1" class="valign-wrapper" src="./img/mat/dalle.png">
    <p>Fondations 1</p>
  </div>
  </div>
  <div class="card">
  <div class="card-image" id="cardFoundation2">
    <img id="foundation2" class="valign-wrapper" src="./img/mat/pieds.png">
    <p>Fondations 2</p>
  </div>
  </div>
</div>
  `
}
