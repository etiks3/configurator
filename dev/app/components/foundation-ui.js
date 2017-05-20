/**
 * @Author: Sylvain Rojas <rojas>
 * @Date:   2017-02-18T16:31:44+01:00
 * @Email:  sylvain.rojas@gmail.com
 * @Project: Configurator
 * @Filename: foundation-ui.js
 * @Last modified by:   rojas
 * @Last modified time: 24-02-2017
 * @Copyright: sylvain rojas
 */



export function foundationMenuSkeleton() {
    return `
<div id="Fondations" class="menu">
  <div id="dalle" data-id="Dalle en béton" class="card">
  <div class="card-image" id="cardFoundation1" data-id="Dalle en béton">
    <img id="foundation1" class="valign-wrapper" src="./img/mat/dalle.png" >
    <p>Dalle Béton</p>
  </div>
  </div>
  <div id="pieds" data-id="Pieds en Inox" class="card">
  <div class="card-image" id="cardFoundation2" data-id="Pilliers en béton">
    <img id="foundation2" class="valign-wrapper" src="./img/mat/pillar.png">
    <p>Pilliers béton</p>
  </div>
  </div>
</div>
  `
}