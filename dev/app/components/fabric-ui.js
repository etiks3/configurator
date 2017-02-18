/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: menu-fabric-ui.js
* @Last modified by:   Rojas
* @Last modified time: 17-02-2017
* @Copyright: S.Rojas
*/

// Choices to be displayed in the popup menu

export function fabricMenuSkeleton(){
  return`
  <div id="dataFabric" class="menu">
    <div class="btn-floating red" id="cardFabric1">
        <img id="Pilliers" data-id="pilliersenBeton" src="./img/mat/pillar.png" style="width:100%">
        <p>Materiaux 1</p>
    </div>

  </div>
  `
}
