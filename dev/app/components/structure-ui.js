/**
* @Author: sylvain
* @Date:   2017-02-18T16:30:58+01:00
* @Last modified by:   rojas
* @Last modified time: 22-02-2017
*/


export function structureMenuSkeleton(){
  return `
<div id="Structure" class="menu">
  <div class="card">  
    <div class="card-image" id="cardStructure1" data-id="Charpente en bois">
      <img id="structure" class="valign-wrapper" src="./img/mat/charpente.png" style="width:100%">
      <p>Structure 1</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image" id="cardStructure2" data-id="Charpente en métal">
      <img id="structure2" class="valign-wrapper" src="./img/mat/charpente.png" style="width:100%">
      <p>structure2</p>
    </div>
  </div>

</div>
  `
}
