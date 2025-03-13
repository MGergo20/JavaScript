import  Kep  from "./kep.js";

export default class Galeria {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }
  megjelenit() {
    for (let i = 0; i < this.#lista.length; i++) {
      const element = this.#lista[i];
      const KEP = new Kep(element.kep,element.cim, this.szuloElem);
    }
  }
}
