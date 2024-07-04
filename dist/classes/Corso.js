"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corso = void 0;
var Corso = /** @class */ (function () {
    function Corso(titolo, descizione, settore, durata, iscritti) {
        this.titolo = titolo;
        this.descizione = descizione;
        this.settore = settore;
        this.durata = durata;
        this.iscritti = iscritti;
    }
    Corso.prototype.aggiungiPartecipante = function (partecipante) {
        this.iscritti.push(partecipante);
        console.log("".concat(partecipante.nome, " ").concat(partecipante.cognome, " aggiunto al corso ").concat(this.titolo));
    };
    return Corso;
}());
exports.Corso = Corso;
