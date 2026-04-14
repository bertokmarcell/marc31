import { KEPEK_LISTA } from "./Adat.js";
import Kepek from "./kepek.js";
import Kep from "./kep.js";
const kepekTaroloELEM = document.querySelector(".kepek-tarolo");
const nagyKep= document.querySelector(".nagy-kep");
const viszgomb=document.querySelector(".gomb0");
const elogomb=document.querySelector(".gomb1");
let currentindex=0;
new Kepek(KEPEK_LISTA, kepekTaroloELEM);
let nagyKepPeldany = new Kep(KEPEK_LISTA[0], nagyKep);
window.addEventListener("kiválasztott", function (event) {
    nagyKepPeldany.megjelenit(event.detail);
});
viszgomb.addEventListener("click",function(){
    console.log(currentindex)
    if(currentindex==0){currentindex+=4}
    currentindex=(currentindex-1)
    nagyKepPeldany.megjelenit(KEPEK_LISTA[currentindex])
    
});
elogomb.addEventListener("click",function(){
    console.log(currentindex)
    currentindex=(currentindex+1)
    if(currentindex==4){currentindex=0}
    nagyKepPeldany.megjelenit(KEPEK_LISTA[currentindex])
});