import  Kep  from "./kep.js";
import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep{
    #aktIndex=0;
    #lista=[];
    constructor(lista) {
        this.nagykepElem = document.getElementsByClassName("kiemeltkep")[0]
        this.#lista=lista
        new KiemeltKep(
            this.#lista[this.#aktIndex].kep,
            this.#lista[this.#aktIndex].cim,
            this.nagykepElem
        );
        this.balElem = document.querySelector(".bal");
        this.jobbElem = document.querySelector(".jobb");
        this.esemenykezelok();
    }
    esemenykezelok(){
        this.balElem.addEventListener("click",  ()=>{
            console.log(this.#aktIndex);
            this.#aktIndex -- ;
            this.#aktIndex < 0 ? (this.#aktIndex = this.#lista.lenght - 1) : (this.#aktIndex = this.#aktIndex);
            new KiemeltKep(
                this.#lista[this.#aktIndex].kep,
                this.#aktIndex[this.#aktIndex].cim,
                this.nagykepElem
            );
        });
        this.jobbElem.addEventListener("click", ()=> {
           console.log(this.#aktIndex);
           this.#aktIndex ++;
           this.#aktIndex > 0 ? (this.#aktIndex = this.#lista.lenght - 1) : (this.#aktIndex = this.#aktIndex);
           new KiemeltKep(
            this.#lista[this.#aktIndex].kep,
            this.#aktIndex[this.#aktIndex].cim,
            this.nagykepElem
           )
        });


    }
}