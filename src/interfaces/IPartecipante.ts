import { ICorso } from "./ICorso";

export interface IPartecipante {
  nome: string;
  cognome: string;
  paeseOrigine: string;
  livelloIstruzione: string;
  competenzeLinguistiche: string;
  ambitoFormazione: string;

  iscrivitiCorso(corso: ICorso): void;
}
