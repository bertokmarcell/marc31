export default class Kep {
    #obj = {};
    constructor(obj = { srcUrl, cim, leiras }, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit(obj);
    }
    megjelenit(obj) {
        this.#obj = obj;
        let kod = `
            <div class="nagy-kep-tartalom">
            <img src="${this.#obj.srcUrl}" alt="${this.#obj.cim}">
            <h2>${this.#obj.cim}</h2>
            <p>${this.#obj.leiras}</p>
            </div>
            `;
        this.szuloElem.innerHTML = kod;
    }
    getObj() {
        return this.#obj;
    }
}