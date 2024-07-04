import { ICorso } from "../interfaces/ICorso";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Partecipante implements IPartecipante {
  
  constructor(
    public nome: string,
    public cognome: string,
    public paeseOrigine: string,
    public livelloIstruzione: string,
    public competenzeLinguistiche: string,
    public ambitoFormazione: string
  ){}
  
  iscrivitiCorso(corso: ICorso): void {
      corso.aggiungiPartecipante(this);
      console.log(`${this.nome} ${this.cognome} è iscritto al corso ${corso.titolo}`)
  }
}
