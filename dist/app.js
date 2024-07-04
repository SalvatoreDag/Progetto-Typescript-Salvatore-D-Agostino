"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Partecipante_1 = require("./classes/Partecipante");
var Corso_1 = require("./classes/Corso");
var Azienda_1 = require("./classes/Azienda");
var partecipante1 = new Partecipante_1.Partecipante("Ahmed", "Khan", "Pakistan", "Laurea", "Inglese, Urdu", "Sviluppo Software");
var partecipante2 = new Partecipante_1.Partecipante("Ali", "Mustafa", "Siria", "Dottorato", "Arabo, Inglese", "Sviluppo Software");
var corsoJavaScript = new Corso_1.Corso("Corso di JavaScript", "Impara JavaScript da zero", "Informatica", 30, [] // Inizialmente senza iscritti
);
var corsoReact = new Corso_1.Corso("Corso di React", "Da zero ad hero in react", "Informatica", 50, []);
partecipante1.iscrivitiCorso(corsoJavaScript);
partecipante2.iscrivitiCorso(corsoJavaScript);
// Creazione di un'azienda
var aziendaX = new Azienda_1.Azienda("Azienda X", "Tecnologia", "Azienda specializzata in sviluppo software", []);
var aziendaY = new Azienda_1.Azienda("Azienda Y", "Tecnologia", "Azienda specializzata sviluppo web e mobile", []);
// Offerta di una posizione generica al partecipante
aziendaX.offriPosizione(partecipante1, "Sviluppatore web");
aziendaY.offriPosizione(partecipante2, "ingengere software");
console.log(corsoJavaScript.iscritti);
