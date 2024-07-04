"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Azienda = void 0;
var Azienda = /** @class */ (function () {
    function Azienda(nomeAzienda, settoreAttivita, descrizione, posizioni) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioni = posizioni;
    }
    Azienda.prototype.offriPosizione = function (partecipante, posizione) {
        this.posizioni.push(posizione);
        console.log("Offerta posizione \"".concat(posizione, "\" proposta da ").concat(this.nomeAzienda, " a ").concat(partecipante.nome, " ").concat(partecipante.cognome));
    };
    return Azienda;
}());
exports.Azienda = Azienda;
