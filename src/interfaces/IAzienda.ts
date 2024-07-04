import { IPartecipante } from "./IPartecipante";

export interface IAzienda {
  nomeAzienda: string;
  settoreAttivita: string;
  descrizione: string;
  posizioni: string[];

  offriPosizione(partecipante: IPartecipante): void;
}
