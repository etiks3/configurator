/**
* @Author: sylvain
* @Date:   2017-02-18T16:30:58+01:00
* @Last modified by:   rojas
* @Last modified time: 24-02-2017
*/


export function structureMenuSkeleton(){
  return `
<div id="Structure" class="menu">
  <div class="card">
    <div class="card-image" id="cardStructure1" data-id="Charpente en bois">
      <img id="structure" class="valign-wrapper" src="./img/mat/charpente.png" style="width:100%">
      <p>Charpente bois</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image" id="cardStructure2" data-id="Charpente en métal">
      <img id="structure2" class="valign-wrapper" src="./img/mat/charpente.png" style="width:100%">
      <p>Charpente métal</p>
    </div>
  </div>

</div>
  `
}
