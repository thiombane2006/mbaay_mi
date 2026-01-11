const annonces = [
  {
    titre: "Vente de semences de riz",
    categorie: "semences",
    description: "Semences certifiées adaptées aux zones irriguées."
  },
  {
    titre: "Engrais biologiques disponibles",
    categorie: "engrais",
    description: "Engrais naturels pour améliorer le rendement agricole."
  },
  {
    titre: "Achat de maïs en gros",
    categorie: "achat",
    description: "Recherche de producteurs pour achat de maïs en grande quantité."
  }
];

let abonnements = Number(localStorage.getItem("abonnements")) || 0;

const container = document.getElementById("annoncesContainer");
const search = document.getElementById("search");
const categorieSelect = document.getElementById("categorie");

function afficherAnnonces(liste) {
  container.innerHTML = "";
  liste.forEach(a => {
    const div = document.createElement("div");
    div.className = "annonce";
    div.innerHTML = `
      <h3>${a.titre}</h3>
      <div class="categorie">${a.categorie}</div>
      <p>${a.description}</p>
      <button>S'abonner</button>
    `;
    div.querySelector("button").onclick = () => {
      abonnements++;
      localStorage.setItem("abonnements", abonnements);
      alert("Vous êtes abonné à cette annonce !");
    };
    container.appendChild(div);
  });
}

function filtrer() {
  const texte = search.value.toLowerCase();
  const cat = categorieSelect.value;

  const resultat = annonces.filter(a =>
    (cat === "all" || a.categorie === cat) &&
    a.titre.toLowerCase().includes(texte)
  );

  afficherAnnonces(resultat);
}

search.addEventListener("input", filtrer);
categorieSelect.addEventListener("change", filtrer);

afficherAnnonces(annonces);