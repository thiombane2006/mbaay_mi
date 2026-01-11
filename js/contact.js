const form = document.getElementById("contactForm");
const success = document.getElementById("successMessage");

function showError(input, message) {
  const group = input.parentElement;
  const small = group.querySelector("small");
  small.innerText = message;
  small.style.display = "block";
}

function clearError(input) {
  const group = input.parentElement;
  const small = group.querySelector("small");
  small.style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  if (prenom.value.trim() === "") {
    showError(prenom, "Prénom obligatoire");
    valid = false;
  } else clearError(prenom);

  if (nom.value.trim() === "") {
    showError(nom, "Nom obligatoire");
    valid = false;
  } else clearError(nom);

  if (!email.value.includes("@")) {
    showError(email, "Email invalide");
    valid = false;
  } else clearError(email);

  if (message.value.trim().length < 10) {
    showError(message, "Message trop court");
    valid = false;
  } else clearError(message);

  if (valid) {
    success.innerText =
      "✅ Message envoyé avec succès. Nous vous répondrons bientôt.";
    form.reset();
  }
});