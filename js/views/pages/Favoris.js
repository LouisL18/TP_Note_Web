import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class Favoris {
    async render() {
        const favorisIds = JSON.parse(localStorage.getItem('favoris')) || [];

        let favorisHtml = "";

        if (favorisIds.length > 0) {
            const favorisDetails = await this.getFavorisDetails(favorisIds);
            console.log(favorisDetails);
            favorisDetails.forEach(personnage => {
                console.log(personnage);
                favorisHtml += `
                    <div class="col">
                        <div class="card shadow-sm">
                        <img class="ak-entitylook" alt="" width="250" height="250" src="${personnage.image}">
                            <div class="card-body">
                                <p class="card-text">${personnage.nom}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a href="#/personnages/${personnage.id}" class="btn btn-sm btn-outline-secondary">Voir ${personnage.id}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else {
            favorisHtml = "<p>Aucun personnage favori pour le moment.</p>";
        }

        return `
            <section class="section">
                <h2>Favoris</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    ${favorisHtml}
                </div>
            </section>
            <p><a href="/">Retour à l'accueil</a></p>
        `;
    }

    async getFavorisDetails(favorisIds) {
        const favorisDetails = [];

        for (const personnageId of favorisIds) {
            const personnage = await PersonnagesProvider.fetchPersonnageById(personnageId);
            favorisDetails.push(personnage);
        }

        return favorisDetails;
    }
}
