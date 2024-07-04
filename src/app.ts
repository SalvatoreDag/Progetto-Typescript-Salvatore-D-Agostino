import { Partecipante } from "./classes/Partecipante";
import { Corso } from "./classes/Corso";
import { Azienda } from "./classes/Azienda";

const partecipante1 = new Partecipante(
  "Ahmed",
  "Khan",
  "Pakistan",
  "Laurea",
  "Inglese, Urdu",
  "Sviluppo Software"
);

const partecipante2 = new Partecipante(
  "Ali",
  "Mustafa",
  "Siria",
  "Dottorato",
  "Arabo, Inglese",
  "Sviluppo Software"
);

const corsoJavaScript = new Corso(
  "Corso di JavaScript",
  "Impara JavaScript da zero",
  "Informatica",
  30,
  [] // Inizialmente senza iscritti
);

const corsoReact = new Corso(
  "Corso di React",
  "Da zero ad hero in react",
  "Informatica",
  50,
  []
);

partecipante1.iscrivitiCorso(corsoJavaScript);
partecipante2.iscrivitiCorso(corsoJavaScript);

// Creazione di un'azienda
const aziendaX = new Azienda(
  "Azienda X",
  "Tecnologia",
  "Azienda specializzata in sviluppo software",
  []
);

const aziendaY = new Azienda(
  "Azienda Y",
  "Tecnologia",
  "Azienda specializzata sviluppo web e mobile",
  []
);

// Offerta di una posizione generica al partecipante
aziendaX.offriPosizione(partecipante1, "Sviluppatore web");
aziendaY.offriPosizione(partecipante2, "ingengere software");


console.log(corsoJavaScript.iscritti); //stampa l'array con tutti gli iscritti al corso JavaScript

