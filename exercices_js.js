
//Exercice 2

const produits = [
  { nom: 'Clavier', prix: 45 },
  { nom: 'Écran', prix: 320 },
  { nom: 'Souris', prix: 25 }
];

// 1. Déstructuration
const { nom, prix } = produits[0];

console.log(nom, prix);


// 2. find
const produitSouris = produits.find(p => p.nom === 'Souris');

console.log(produitSouris.prix);


// 3. filter
const produitsMoins100 = produits.filter(p => p.prix < 100);

console.log(produitsMoins100);


// 4. Fonction fléchée
const avecRemise = prix => prix * 0.9;

console.log(avecRemise(320));

