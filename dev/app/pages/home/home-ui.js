/**
 * @Author: Sylvain Rojas <Rojas>
 * @Date:   16-02-2017
 * @Project: Configurator
 * @Filename: home-ui.js
 * @Last modified by:   sylvain
 * @Last modified time: 2017-03-26T18:20:18+02:00
 * @Copyright: S.Rojas
 */



export function homeSkeleton () {
  return `
<!-- HEADER -->

  <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
        <svg id="logo_footer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="257px" height="76px" viewBox="0 0 257 76" style="enable-background:new 0 0 257 76;" xml:space="preserve"
          >
            <g>
              <path d="M240.785,21.096h8.424v27.903l-3.933,3.663l-4.347,3.933l-0.432-5.185c-2.017,4.177-7.562,6.192-11.521,6.265
              c-10.513,0.072-18.289-6.408-18.289-18.865c0-12.241,8.137-18.65,18.505-18.578c4.753,0,9.289,2.232,11.306,5.761L240.785,21.096z
               M219.47,38.81c0,6.769,4.681,10.801,10.513,10.801c13.825,0,13.825-21.53,0-21.53C224.151,28.081,219.47,32.042,219.47,38.81z" />
            </g>
            <g>
              <path d="M16.168,6.263v29.091l13.706-14.257h12.055V21.6L25.333,37.802l18.908,18.146v0.648H32.104L16.168,40.538v16.058H6.095
              V6.263H16.168z" />
            </g>
            <g>
              <path d="M68.908,21.096h8.424v35.499h-8.28l-0.432-5.185c-2.017,4.176-7.562,6.193-11.521,6.265
              c-10.513,0.072-18.289-6.409-18.289-18.866c0-12.241,8.137-18.649,18.505-18.578c4.753,0,9.289,2.232,11.306,5.761L68.908,21.096z
               M47.593,38.81c0,6.769,4.681,10.801,10.513,10.801c13.825,0,13.825-21.53,0-21.53C52.274,28.081,47.593,32.041,47.593,38.81z" />
            </g>
            <g>
              <path d="M89.368,6.263v50.333h-8.713V6.263H89.368z" />
            </g>
            <g>
              <path d="M93.477,71.429V21.096h8.209l0.576,4.896c2.736-3.96,7.488-5.688,11.521-5.688c10.945,0,18.218,8.137,18.218,18.578
              c0,10.369-6.553,18.578-17.93,18.578c-3.744,0-9.288-1.152-11.809-5.041v19.01H93.477z M123.216,38.882
              c0-5.544-3.745-10.081-10.081-10.081c-6.337,0-10.081,4.537-10.081,10.081s4.104,10.081,10.081,10.081
              S123.216,44.426,123.216,38.882z" />
            </g>
            <g>
              <path d="M163.982,21.096h8.424v35.499h-8.28l-0.432-5.185c-2.017,4.177-7.562,6.192-11.521,6.265
              c-10.513,0.072-18.289-6.408-18.289-18.865c0-12.241,8.137-18.65,18.505-18.578c4.753,0,9.289,2.232,11.306,5.761L163.982,21.096z
               M142.667,38.81c0,6.769,4.681,10.801,10.513,10.801c13.825,0,13.825-21.53,0-21.53C147.348,28.081,142.667,32.042,142.667,38.81z"
              />
            </g>
            <g>
              <path d="M200.882,56.595V38.018c0-5.401-2.952-9.505-8.568-9.505c-5.401,0-9.073,4.536-9.073,9.937v18.146h-8.713V21.024h7.849
              l0.576,4.824c3.601-3.528,7.201-5.328,11.665-5.328c8.353,0,15.05,6.265,15.05,17.426v18.649H200.882z" />
            </g>
      </svg>
      </a>
      </nav>
      <a href="#!" id="save-btn" class="modal-action modal-close waves-effect waves-green btn-flat">Google Login</a>
      <a id="logout-btn" class="waves-effect waves-light btn">Logout</a>
    
<-- MODAL -->
<div class="row center">
        <button id="modal-btn-save" data-target="modal1" class="btn modal-trigger">Sauvegarder</button>
      </div>
<div id="modal1" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Sauvegarder Votre projet</h4>
      <p>Pour pouvoir sauvgarder votre projet, merci de bien vouloir vous authentifier</p>
    </div>
    <div class="modal-footer">
    <a href="#!" id="save-btn" class="modal-action modal-close waves-effect waves-green btn-flat">Google Login</a>
    </div>
  </div>
  
<!-- MAIN  -->
  <section id="shelter">
          <div id="userInfo"></div>
          <div id="start">
          <p>Pour configurer votre abris,
          <br/>
          veuillez appuyer sur le marqueur vert en bas à gauche de l'écran<p>
          </div>
            <div class="choice1 ">
                  <button id="foundation-marker" class="marker1 btn-floating btn-large red"><i class="material-icons">add</i></button>
                <div id="foundations"></div>
              </div>
              <div class="choice2 ">
                  <button id="structure-marker" class="marker2 btn-floating btn-large red"><i class="material-icons">add</i></button>
                <div id="structure"></div>
              </div>
              <div class="choice3 ">
                  <button id="fabric-marker" class="marker3 btn-floating btn-large red"><i class="material-icons">add</i></button>
                <div id="fabric"></div>
              </div>
              <div class="choice4 ">
                  <button id="frontface-marker" class="marker4 btn-floating btn-large red"><i class="material-icons">add</i></button>
                <div id="frontface"></div>
              </div>
              <div class="choice5 ">
                  <button id="door-marker" class="marker5 btn-floating btn-large red"><i class="material-icons">add</i></button>
                <div id="door"></div>
              </div>
              <div class="choice6 ">
                  <button id="color-marker" class="marker6 btn-floating btn-large red"><i class="material-icons">add</i></button>
                <div id="color"></div>
              </div>
              <div id="selectionUser"></div>
                <div class="clear"></div>
              <div id="selectionUser"></div>
                <div id="display" class="valign-wrapper"></div>
                <a id="reset" class="waves-effect waves-light btn">Effacer</a>
    </section>

<!-- FOOTER -->
    <footer class="page-footer">
            <div class="container">
            © 2014 Kalpana-Solutions
          </div>
        </footer>
        </div>

  `
}
