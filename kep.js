import NagyKep from "./NagyKep.js";

export default class Kep {
  #eUt;
  #cim; /* privát adattag */
  constructor(eUt, cim, szuloElem) {
    /* beállítja az adattagot */
    this.#eUt = eUt;
    this.#cim = cim;
    this.szuloElem = szuloElem; /* publikus adattag */
    this.megjelenit();
  }
  /* kell-e gettes és setter valójában?
    Mivel galériában a képek elérési útját nem akarom változtatni, ezért nem kell! */

  megjelenit() {
    let html = `<div class="kep">
                    <h3>${this.#cim}</h3>
                    <img src="${this.#eUt}" alt="${this.#cim}">
                </div>`;

    this.szuloElem.innerHTML += html;
  }
}
