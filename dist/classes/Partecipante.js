"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partecipante = void 0;
var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }
    Partecipante.prototype.iscrivitiCorso = function (corso) {
        corso.aggiungiPartecipante(this);
        console.log("".concat(this.nome, " ").concat(this.cognome, " \u00E8 iscritto al corso ").concat(corso.titolo));
    };
    return Partecipante;
}());
exports.Partecipante = Partecipante;
