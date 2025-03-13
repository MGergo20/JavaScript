import { KEPEKLISTA } from "./adatok.js";
import Galeria from "./Galeria.js";
import Kep from "./kep.js";
import KiemeltKep from "./KiemeltKep.js";
import  NagyKep  from "./NagyKep.js";

/* Példányosítjuk a két osztályt */
let galeriaElem = document.getElementsByClassName("galeria")[0];

new Galeria(KEPEKLISTA, galeriaElem);
new NagyKep(KEPEKLISTA)

