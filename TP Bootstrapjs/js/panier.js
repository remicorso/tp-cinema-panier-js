// Création d'un module de Panier et de validation de compte


function ajouterAuPanier() {

    let maListe = document.querySelector("#modalSubscriptionForm ul");
    let monButton = document.querySelector(".addPanier");
    let monTotalPanier = document.querySelector("#modalSubscriptionForm .panier h4");
    let totalPanier = 0;
    let countReservations = localStorage.length;


    monButton.onclick = function () {

        let nbUsers = document.querySelector("#modalSubscriptionForm #nb_places").value;
        let tarif = document.querySelector("#modalSubscriptionForm .tarifselect").value;
        let filmTitle = document.querySelector("#modalSubscriptionForm .filmTitle").value;
        let day = document.querySelector("#modalSubscriptionForm .day").value;
        let time = document.querySelector("#modalSubscriptionForm .time").value;
        let monElement = document.createElement("li");
        let maReservation = document.createElement("span");
        let monNewButton = document.createElement("button");
        monNewButton.setAttribute("class", "btn btn-danger text-white rounded-0");
        let finalTarif;
        let participant;



        switch (time) {
            case 'journee':

                finalTime = "Journée";

                break;

            case 'soiree':

                finalTime = "Soirée";

                break;
        }

        switch (tarif) {
            case 'adulte':

                if (nbUsers > 1) {
                    participant = "Adultes";
                } else {
                    participant = "Adulte";
                }
                break;

            case 'enfant':

                if (nbUsers > 1) {
                    participant = "Enfants";
                } else {
                    participant = "Enfant";
                }
                break;
        }


        switch (day) {
            case 'Lundi':

                if (tarif == "adulte") {
                    if (time == "journee") {
                        actualPrice = 10;
                    } else if (time == "soiree") {
                        actualPrice = 12;
                    }

                } else if (tarif == "enfant") {
                    if (time == "journee") {
                        actualPrice = 5;
                    } else if (time == "soiree") {
                        actualPrice = 6;
                    }
                }

                break;

            case 'Mardi':

                if (tarif == "adulte") {
                    if (time == "journee") {
                        actualPrice = 10;
                    } else if (time == "soiree") {
                        actualPrice = 12;
                    }
                } else if (tarif == "enfant") {
                    if (time == "journee") {
                        actualPrice = 5;
                    } else if (time == "soiree") {
                        actualPrice = 6;
                    }
                }

                break;

            case 'Mercredi':

                if (tarif == "adulte") {
                    if (time == "journee") {
                        actualPrice = 10;
                    } else if (time == "soiree") {
                        actualPrice = 12;
                    }
                } else if (tarif == "enfant") {
                    if (time == "journee") {
                        actualPrice = 5;
                    } else if (time == "soiree") {
                        actualPrice = 6;
                    }
                }

                break;

            case 'Jeudi':

                if (tarif == "adulte") {
                    if (time == "journee") {
                        actualPrice = 10;
                    } else if (time == "soiree") {
                        actualPrice = 12;
                    }
                } else if (tarif == "enfant") {
                    if (time == "journee") {
                        actualPrice = 5;
                    } else if (time == "soiree") {
                        actualPrice = 6;
                    }
                }

                break;

            case 'Vendredi':

                if (tarif == "adulte") {
                    if (time == "journee") {
                        actualPrice = 10;
                    } else if (time == "soiree") {
                        actualPrice = 12;
                    }
                } else if (tarif == "enfant") {
                    if (time == "journee") {
                        actualPrice = 5;
                    } else if (time == "soiree") {
                        actualPrice = 6;
                    }
                }

                break;

            case 'Samedi':

                if (tarif == "adulte") {
                    actualPrice = 12.50;
                } else if (tarif == "enfant") {
                    actualPrice = 6;

                }

                break;

            case 'Dimanche':

                if (tarif == "adulte") {
                    actualPrice = 12.50;
                } else if (tarif == "enfant") {
                    actualPrice = 6;

                }

                break;
        }


        finalTarif = actualPrice * nbUsers;
        totalPanier += finalTarif;


        monElement.appendChild(maReservation);
        maReservation.innerHTML = '<i class="fa fa-ticket-alt"></i> ' + filmTitle + ' / Séance de ' + day + ' (' + finalTime + ') / ' + nbUsers + ' ' + participant + ' - ' + finalTarif + '€';
        monElement.appendChild(monNewButton);
        monNewButton.innerHTML = '<i class="fa fa-trash text-white"></i>';
        maListe.appendChild(monElement);


        countReservations += 1;


        monStorageSeul = '<i class="fa fa-ticket-alt"></i> ' + filmTitle + ' / Séance de ' + day + ' (' + finalTime + ') / ' + nbUsers + ' ' + participant + ' - ' + finalTarif + '€';

        console.log(countReservations);
        localStorage.setItem(countReservations, monStorageSeul);






        monNewButton.onclick = function () {

            maListe.removeChild(monElement);

            totalPanier -= finalTarif;
            monTotalPanier.textContent = totalPanier + '€';
            localStorage.removeItem(countReservations);
            countReservations -= 1;
            afficherNumberPanier();

        }

        afficherNumberPanier();

        monTotalPanier.textContent = totalPanier + '€';

    }





}




function afficherPanier() {




    let countReservations = 1;
    let monTotalPanier = document.querySelector(".panier-show h4");
    let totalPanier = 0;




    while (countReservations <= localStorage.length) {

        if (localStorage.getItem(countReservations) !== null) {



            let monPanier = document.querySelector(".panier-show ul");
            let monArticle = document.createElement("li");
            let monArticleReserve = document.createElement("span");
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "btn btn-danger rounded-0");

            let actualKey = countReservations;


            monArticle.appendChild(monArticleReserve);
            monArticleReserve.innerHTML = localStorage.getItem(countReservations);

            monArticle.appendChild(deleteButton);
            deleteButton.innerHTML = '<i class="fa fa-trash text-white"></i>';
            monPanier.appendChild(monArticle);



            let finalResult = monArticle.innerText.split(' ');
            let selectPrice = finalResult[13];
            let parsedResult = parseFloat(selectPrice);

            totalPanier += parsedResult;
            monTotalPanier.textContent = totalPanier + "€";


            deleteButton.onclick = function (e) {

                monPanier.removeChild(monArticle);
                localStorage.removeItem(actualKey);
                countReservations -= 1;
                totalPanier -= parsedResult;
                monTotalPanier.textContent = totalPanier + "€";


                afficherNumberPanier();
                checkPanier();


            }

            countReservations += 1;

        } else {

            countReservations += 1;

        }

    }



}

function afficherStep2() {

    let step1 = document.querySelector("#panier-step-1");
    step1.setAttribute("class", "d-none");
    let step2 = document.querySelector("#panier-step-2");
    step2.setAttribute("class", "d-flex flex-column panier-show text-center white-text mx-5 wow fadeIn");


}



function afficherStep3() {

    var nom = document.forms["form-step-2"]["nom"];
    var prenom = document.forms["form-step-2"]["prenom"];
    var email = document.forms["form-step-2"]["email"];

    if (nom.value == "") {

        nom.focus();
        return false;
    }

    if (prenom.value == "") {
        prenom.focus();
        return false;
    }

    if (email.value == "") {
        email.focus();
        return false;
    }



    let step2 = document.querySelector("#panier-step-2");
    step2.setAttribute("class", "d-none");
    let step3 = document.querySelector("#panier-step-3");
    step3.setAttribute("class", "d-flex flex-column panier-show text-center white-text mx-5 wow fadeIn");

    event.preventDefault();


}

function afficherStepEnd() {

    let step3 = document.querySelector("#panier-step-3");
    step3.setAttribute("class", "d-none");
    let stepEnd = document.querySelector("#panier-step-end");
    stepEnd.setAttribute("class", "d-flex flex-column panier-show text-center white-text mx-5 wow fadeIn");

    event.preventDefault();
}

function confirmerPaiement() {

    localStorage.clear();

    afficherNumberPanier();


}

function checkPanier() {
    if (localStorage.length === 0) {

        let buttonPanier = document.querySelector("#panier-button");
        buttonPanier.setAttribute("class", "btn btn-success btn-lg rounded-0 disabled");


    }
}