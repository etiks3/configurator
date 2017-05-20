/** * @Author: Sylvain Rojas
<Rojas>
    * @Date: 16-02-2017 * @Project: Configurator * @Filename: home-ui.js * @Last modified by: sylvain * @Last modified time: 2017-03-26T18:20:18+02:00 * @Copyright: S.Rojas */ export function homeSkeleton() { return `

    <!-- SIDEBAR-->
    <div class="wrapper">
        <div class="row">
            <ul id="slide-out" class="side-nav">
                <li>
                    <div class="userView">
                        <p id="welcome" style="color:white">Welcome: <span id="user"></span></p>
                    </div>
                </li>
                <li>
                    <a id="modal-btn-save" data-target="modal1" class="btn modal-trigger">Sauvegarder</a>
                </li>
                <li><a id="logout-btn" class="waves-effect waves-light btn">Logout</a></li>
                <li>
                    <a id="reset" class="waves-effect waves-light btn">Effacer</a>
                </li>
                <li>
                    <div id="selectionUser"></div>
                </li>

            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons md-48" style="position: absolute;
    right: 14px;">menu</i></a>
        </div>


        <!-- MAIN  -->

        <!-- <section id="shelter">
            <div id="start"></div>
            <div class="choice1">
                <button id="foundation-marker" class="marker1 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="foundations"></div>
            </div>
            <div class="choice2">
                <button id="structure-marker" class="marker2 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="structure"></div>
            </div>
            <div class="choice3">
                <button id="fabric-marker" class="marker3 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="fabric"></div>
            </div>
            <div class="choice4">
                <button id="frontface-marker" class="marker4 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="frontface"></div>
            </div>
            <div class="choice5">
                <button id="door-marker" class="marker5 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="door"></div>
            </div>
            <div class="choice6 ">
                <button id="color-marker" class="marker6 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="color"></div>
            </div>

            <div class="clear"></div>
            <div id="display" class="valign-wrapper"></div>
        </section>-->


        <section id="slider">
            <!--<div id="start"></div>-->
            <div class="choice1">
                <button id="foundation-marker" class="marker1 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="foundations"></div>
            </div>
            <div class="choice2">
                <button id="structure-marker" class="marker2 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="structure"></div>
            </div>
            <div class="choice3">
                <button id="fabric-marker" class="marker3 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="fabric"></div>
            </div>
            <div class="choice4">
                <button id="frontface-marker" class="marker4 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="frontface"></div>
            </div>
            <div class="choice5">
                <button id="door-marker" class="marker5 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="door"></div>
            </div>
            <div class="choice6 ">
                <button id="color-marker" class="marker6 btn-floating btn-large markers "><i class="material-icons">add</i></button>
                <div id="color"></div>
            </div>

            <div class="clear"></div>
            <div id="display" class="valign-wrapper"></div>

        </section>
    </div>

    <!-- MODAL -->

    <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>Sauvegarder Votre projet</h4>
            <p>Pour pouvoir sauvgarder votre projet, merci de bien vouloir vous authentifier</p>
        </div>
        <div class="modal-footer">
            <a href="#!" id="save-btn" class="modal-action modal-close waves-effect waves-green btn-flat">Google Login</a>
        </div>

        ` }