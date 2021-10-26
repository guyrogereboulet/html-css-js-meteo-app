const jourSemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

let adj = new Date();
//Ci per mette di avere il giorno attuale in Francese non abbreviato
let options = { weekday: "long" };
let jourActuel = adj.toLocaleDateString("fr-FR", options);
