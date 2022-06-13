let largeur = window.innerWidth;
let hauteur = window.innerHeight;

let currentX = 0;
let currentY = 0;

let cardX = 700;
let cardY = 250;

function rePlaceTrollButton() {
    newCardX = Math.floor(Math.random() * largeur);
    if ((newCardX < cardX && cardX - newCardX < 100) || (newCardX > cardX && newCardX - cardX < 100)) {
        rePlaceTrollButton();
    }

    newCardY = Math.floor(Math.random() * hauteur);
    if ((newCardY < cardY && cardY - newCardY < 100) || (newCardY > cardY && newCardY - cardY < 100)) {
        rePlaceTrollButton();
    }

    if (newCardX > largeur - 210 || newCardY > hauteur - 210) {
        rePlaceTrollButton();
    }

    document.getElementById("troll-button").style.left = newCardX + "px";
    cardX = newCardX;
    document.getElementById("troll-button").style.top = newCardY + "px";
    cardY = newCardY;
}

document.onmousemove = function(e) {
    currentX = e.clientX;
    currentY = e.clientY;

    if (currentX > cardX - 10 && currentX < cardX + 200 + 10) {
        if (currentY > cardY - 10 && currentY < cardY + 200 + 10) {
            rePlaceTrollButton();
        }
    }
};

document
    .getElementById("troll-button")
    .addEventListener("click", function() {
        alert("Bien joué t'as gagné");
});
