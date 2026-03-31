export default class Kep_Kartya {
    #obj = {};
    #index = 0;
    constructor(obj={ srcUrl, cim, leiras },index,szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        this.esemenykezelo();
    }
    esemenykezelo() {
        const kepKartya = this.szuloElem.querySelector(".kep-kartya:last-child");
        const kepElem = kepKartya.querySelector("img");
        kepElem.addEventListener("click", () => {
        this.sajatEsemeny();
        });
    }
    sajatEsemeny() {
        const e = new CustomEvent("kiválasztott", { detail: this.#obj });
        window.dispatchEvent(e);
    }
    megjelenit() {
        let kod = `
            <div class="kep-kartya">
            <img src="${this.#obj.srcUrl}" alt="${this.#obj.cim}">
            <p>${this.#obj.cim}</p>
            </div>`;

        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
    getObj() {
        return this.#obj;
    }
}