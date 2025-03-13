import NagyKep from "./NagyKep.js";

export default class Kep {
  #eUt;
  #cim;
  #index;
  /* privát adattag */
  constructor(eUt, cim, index, szuloElem) {
    /* beállítja az adattagot */
    this.#eUt = eUt;
    this.#cim = cim;
    this.#index = index;
    this.szuloElem = szuloElem; /* publikus adattag */
    this.megjelenit();
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);

      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);    
  });
    
  }
  /* kell-e gettes és setter valójában?
    Mivel galériában a képek elérési útját nem akarom változtatni, ezért nem kell! */

  megjelenit() {
    let html = `<div class="kep">
                    <img src="${this.#eUt}" alt="${this.#cim}">
                </div>`;

    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}

