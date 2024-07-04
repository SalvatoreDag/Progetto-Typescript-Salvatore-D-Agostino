import { IPartecipante } from "./IPartecipante";

export interface ICorso {
  titolo: string;
  descizione: string;
  settore: string;
  durata: number;
  iscritti: IPartecipante[];

  aggiungiPartecipante(partecipante: IPartecipante): void;
}
