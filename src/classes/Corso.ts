import { ICorso } from "../interfaces/ICorso";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Corso implements ICorso {
  constructor(
    public titolo: string,
    public descizione: string,
    public settore: string,
    public durata: number,
    public iscritti: IPartecipante[]
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.iscritti.push(partecipante);
    console.log(`${partecipante.nome} ${partecipante.cognome} aggiunto al corso ${this.titolo}`)
  }
}
