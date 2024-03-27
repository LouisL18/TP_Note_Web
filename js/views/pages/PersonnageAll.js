import PersonnagesProvider from "../../services/PersonnagesProvider.js";



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

            <h2>Tous les personnages</h2>
            <div class="search">
                <input type="text" id="searchBar" placeholder="Recherche par nom" oninput="searchByName()">
            </div>
            <ul class="liste">
                ${personnages.map(personnage => `
                    <li>
                        <div class="card">
                            ${
                                this.favoris && this.favoris.includes(personnage.id) ?
                                `<img src="../../../icon/heart2.png" width="30" height="30" class="favoris" id="${personnage.id}" alt="favoris">` :
                                `<img src="../../../icon/heart.png" width="30" height="30" class="favoris" id="${personnage.id}" alt="favoris">`
                            }
                            <div class="image-container">
                                <img src="${personnage.image}" alt="${personnage.nom}">
                            </div>
                            <h3>${personnage.nom ? personnage.nom.slice(0, 100) : ''}</h3>
                            <a href="#/personnages/${personnage.id}" class="btn btn-sm btn-outline-secondary">Voir ${personnage.nom}</a>
                        </div>
                    </li>
                `).join('\n')}
            </ul>
            <div id="favoris-section">
                <!-- Cette section affichera les favoris -->
            </div>
        `;

        return view;
    }
}
