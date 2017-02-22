/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: menu-fabric-ui.js
* @Last modified by:   rojas
* @Last modified time: 22-02-2017
* @Copyright: S.Rojas
*/

// Choices to be displayed in the popup menu

export function fabricMenuSkeleton(){
  return`
  <div id="Isolation" class="menu">
    <div class="card">
      <div class="card-image" id="cardFabric1" data-id="OSB avec porte à gauche">
          <img id="fabric1" data-id="OSB" class="valign-wrapper" src="./img/mat/osb.png" style="width:100%">
          <p>Materiaux 1</p>
      </div>
      <div class="card-image" id="cardFabric1" data-id="OSB avec porte à droite" >
          <img id="fabric2" data-id="OSB" class="valign-wrapper" src="./img/mat/osb-right.png" style="width:100%">
          <p>Materiaux 1</p>
      </div>
    </div>
  </div>
  `
}
