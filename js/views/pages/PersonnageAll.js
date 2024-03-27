import PersonnagesProvider from "../../services/PersonnagesProvider.js";

// Définissez la fonction changeImage en dehors de la classe
function changeImage(element) {
    element.src = "../../../icon/he.png";
}

export default class PersonnageAll {
    constructor() {
        // Initialisez un tableau vide pour stocker les favoris
        this.favoris = ["b4e7"];
    }

    async render() {
        // Récupérer la liste de tous les personnages
        let personnages = await PersonnagesProvider.fetchPersonnages(50);
        let favoris = this.favoris;
        // Construire la vue HTML avec les détails des personnages
        let view = `
            <h2>Tous les Personnages</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            ${personnages.map(personnage => `
                <div class="col">
                <div class="card shadow-sm">
                    <img class="ak-entitylook" alt="" width="250" height="250" src="${personnage.image}">
                    <div class="card-body">
                    <p class="card-text">${personnage.nom ? personnage.nom.slice(0,100) : ''}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <a href="#/personnages/${personnage.id}" class="btn btn-sm btn-outline-secondary">Voir ${personnage.nom}</a>
                        ${
                            this.favoris && this.favoris.includes(personnage.id) ?
                            `<img src="../../../icon/heart2.png" class="favoris" alt="favoris" width="30" height="30" data-id="${personnage.id}" onclick="console.log('${personnage.id}');">` :

                            `<img src="../../../icon/heart.png" class="favoris" alt="favoris" width="30" height="30" data-id="${personnage.id}" onclick="${this.favoris ? `this.favoris.push('${personnage.id}');` : `this.favoris = ['${personnage.id}'];`} console.log('${personnage.id}');">`
                        }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            `).join('\n')}
            </div>
            <div id="favoris-section">
            <!-- Cette section affichera les favoris -->
            </div>
        `;

        return view;
    }

}
