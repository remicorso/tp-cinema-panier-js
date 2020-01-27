function afficherNumberPanier() {
    let totalReservations = localStorage.length;
    let monPanierLink = document.querySelector(".panier-link span");
    monPanierLink.textContent = totalReservations;
    
}
