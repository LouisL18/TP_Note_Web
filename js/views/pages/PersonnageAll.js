import PersonnagesProvider from "../../services/PersonnagesProvider.js";
export default class PersonnageAll {
    constructor() {
        // Initialisez les favoris à partir du local storage ou utilisez un tableau vide si aucun favori n'est enregistré
        this.favoris = JSON.parse(localStorage.getItem('favoris')) || [];
        console.log(localStorage);
    }

    async addToFavorites(personnageId) {
        // Vérifiez d'abord si le personnage n'est pas déjà dans les favoris
        console.log(this.favoris)
        if (!this.favoris.includes(personnageId)) {
            this.favoris.push(personnageId);
            localStorage.setItem('favoris', JSON.stringify(this.favoris));
            console.log("Personnage ajouté aux favoris :", personnageId);
        } else {
            console.log("Ce personnage est déjà dans les favoris :", personnageId);
        }
    }

    async removeFromFavorites(personnageId) {
        console.log(this.favoris)
        const index = this.favoris.indexOf(personnageId);
        if (index !== -1) {
            this.favoris.splice(index, 1);
            localStorage.setItem('favoris', JSON.stringify(this.favoris));
            console.log("Personnage retiré des favoris :", personnageId);
        }
    }

    async render() {
        // Récupérer la liste de tous les personnages
        let personnages = await PersonnagesProvider.fetchPersonnages(50);
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

                            <div class="image-container">
                                <img src="${personnage.image}" alt="${personnage.nom}">
                            </div>
                            <div class="lignefavoris">
                                <h3>${personnage.nom ? personnage.nom.slice(0, 100) : ''}</h3>
                                
                                <span class="addToFavoritesBtn" style="cursor: pointer;" data-personnage-id="${personnage.id}">${this.favoris.includes(personnage.id) ? '<img src="../../icon/heart2.png" alt="favori">' : '<img src="../../icon/heart.png" alt="non-favori">'}</span>
                            </div>
                            <a href="#/Personnages/${personnage.nom}" class="btn btn-sm btn-outline-secondary">Voir ${personnage.nom}</a>
                        </div>
                    </li>
                `).join('\n')}
            </ul>
            <div id="favoris-section">
                <!-- Cette section affichera les favoris -->
            </div>
        `;
        setTimeout(async () => {
            await this.afterRender();
        });
        return view;
    }
    async afterRender() {
        const addToFavoritesBtns = document.querySelectorAll('.addToFavoritesBtn');

        addToFavoritesBtns.forEach(btn => {
            btn.addEventListener('click', async () => {
                const personnageId = btn.getAttribute('data-personnage-id');
                if (!this.favoris.includes(personnageId)) {
                    await this.addToFavorites(personnageId);
                    btn.innerHTML = '<img src="../../icon/heart2.png" alt="favori">';
                } else {
                    await this.removeFromFavorites(personnageId);
                    btn.innerHTML = '<img src="../../icon/heart.png" alt="non-favori">';
                }
            });
        });
    }
}

