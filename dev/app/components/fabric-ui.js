/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: menu-fabric-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-19T08:11:12+01:00
* @Copyright: S.Rojas
*/

// Choices to be displayed in the popup menu

export function fabricMenuSkeleton(){
  return`
  <div id="dataFabric" class="menu">
    <div class="card">
      <div class="card-image" id="cardFabric1">
          <img id="osb" data-id="OSB" class="valign-wrapper" src="./img/mat/osb.png" style="width:100%">
          <p>Materiaux 1</p>
      </div>
    </div>
  </div>
  `
}
