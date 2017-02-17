/**
* @Author: Sylvain Rojas <Rojas>
* @Date:   16-02-2017
* @Project: Configurator
* @Filename: menu-fabric-ui.js
* @Last modified by:   Rojas
* @Last modified time: 17-02-2017
* @Copyright: S.Rojas
*/



export function fabricMenuSkeleton(){
  return `
  <div id="dataFabric" class="menu">
    <div class="card" id="cardFabric1">
        <img src="./img/mat/pillar.png" style="width:100%">
        <p>Materiaux 1</p>
    </div>
    <div class="card" id="cardFabric2">
        <img  src="./img/mat/pillar.png" style="width:100%">
        <p>Materiaux 2</p>
    </div>
  </div>
  `
}
