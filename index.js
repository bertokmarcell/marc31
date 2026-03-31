import { KEPEK_LISTA } from "./Adat.js";
import Kepek from "./kepek.js";
import Kep from "./kep.js";
const kepekTaroloELEM = document.querySelector(".kepek-tarolo");
const nagyKep= document.querySelector(".nagy-kep");
new Kepek(KEPEK_LISTA, kepekTaroloELEM);
let nagyKepPeldany = new Kep(KEPEK_LISTA[0], nagyKep);
window.addEventListener("kiválasztott", function (event) {
    nagyKepPeldany.megjelenit(event.detail);
});