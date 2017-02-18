/**
* @Author: Sylvain Rojas <rojas>
* @Date:   2017-02-18T16:31:44+01:00
* @Email:  sylvain.rojas@gmail.com
* @Project: Configurator
* @Filename: foundation-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T17:00:11+01:00
* @Copyright: sylvain rojas
*/



export function foundationMenuSkeleton(){
  return `
<div id="dataFoundation" class="menu">
  <div class="btn-floating red" id="cardFoundation1">
    <img id="foundation1" src="./img/mat/dalle.png" style="width:100%">
    <p>Fondations 1</p>
  </div>
  <div class="btn-floating red" id="cardFoundation2">
    <img id="foundation2" src="./img/mat/pieds.png" style="width:100%">
    <p>Fondations 2</p>
  </div>
</div>
  `
}
