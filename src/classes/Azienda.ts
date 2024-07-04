import { IAzienda } from "../interfaces/IAzienda";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Azienda implements IAzienda {
  constructor(
    public nomeAzienda: string,
    public settoreAttivita: string,
    public descrizione: string,
    public posizioni: string[]
  ) {}

  offriPosizione(partecipante: IPartecipante): void {}
}
