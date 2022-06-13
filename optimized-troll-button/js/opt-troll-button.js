
const largeur = window.innerWidth - 200,
hauteur = window.innerHeight - 200,
button = document.getElementById("troll-button");

button.onmouseenter = () => {
const newCardX = Math.floor(Math.random() * largeur),
    newCardY = Math.floor(Math.random() * hauteur);

    button.style.left = `${newCardX}px`;
    button.style.top = `${newCardY}px`;
};

button.onclick = () => {
alert("Bien joué t'as gagné");
};
