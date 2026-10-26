const produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

let nom = document.getElementById("nom");
let prix = document.getElementById("prix");
let btn = document.getElementById("btn");
let list = document.getElementById("liste-produits");

btn.addEventListener("submit", function () {
  
  for (let i = 0; i < produits.length; i++) {
    let list = document.createElement("li");
    list.className = "produit";
    let cart = document.createElement("div");
    nom.textContent = produits[i].nom;
    prix.textContent = produits[i].prix;
    let button = document.createElement("button");
    button.textContent = "supprimer"
    button.className = "supprimer";



    
    cart.appendChild(nom);
    cart.appendChild(prix);
    cart.appendChild(button);
    list.appendChild(cart);

    ajoutercart();

  }

  function ajoutercart(){
    let produit ={
      nom : nom.value ,
      prix : prix.value,
      id : produits.length
    };
    produits.push(produit);
  }
  console.log(produits)
});

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
