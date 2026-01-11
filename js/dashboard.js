// Données simulées via localStorage
const abonnements = localStorage.getItem("abonnements") || 0;
const annoncesActives = 3;
const messages = localStorage.getItem("messages") || 0;

document.getElementById("abonnes").innerText = abonnements;
document.getElementById("annonces").innerText = annoncesActives;
document.getElementById("messages").innerText = messages;

// Activité récente
const activities = [
  "Nouvel abonnement à une annonce",
  "Nouvelle annonce publiée",
  "Message reçu via la page contact",
  "Mise à jour du dashboard"
];

const activityList = document.getElementById("activityList");

activities.forEach(act => {
  const li = document.createElement("li");
  li.innerText = "✔ " + act;
  activityList.appendChild(li);
});