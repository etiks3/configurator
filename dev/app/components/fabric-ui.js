/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: menu-fabric-ui.js
* @Last modified by:   rojas
* @Last modified time: 2017-02-18T17:01:23+01:00
* @Copyright: S.Rojas
*/

// Choices to be displayed in the popup menu

export function fabricMenuSkeleton(){
  return`
  <div id="dataFabric" class="menu">
    <div class="btn-floating red" id="cardFabric1">
        <img id="osb" data-id="OSB" src="./img/mat/osb.png" style="width:100%">
        <p>Materiaux 1</p>
    </div>

  </div>
  `
}
