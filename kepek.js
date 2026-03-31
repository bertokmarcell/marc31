import Kep_Kartya from "./Kep_kartya.js";
export default class Kepek {
    #lista;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }
    megjelenit() {
        this.#lista.forEach((elem,index)=>{
            new Kep_Kartya(elem, index, this.szuloElem);
        });
    }
}