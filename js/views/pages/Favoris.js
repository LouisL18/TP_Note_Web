export default class Favoris {
    constructor(favorisList) {
        this.favorisList = favorisList;
    }

    async render() {
        let favorisHtml = "";

        if (this.favorisList && this.favorisList.length > 0) {
            this.favorisList.forEach(personnageId => {
                favorisHtml += `<p>Personnage favori avec ID: ${personnageId}</p>`;
            });
        } else {
            favorisHtml = "<p>Aucun personnage favori pour le moment.</p>";
        }

        return `
            <section class="section">
                <h2>Favoris</h2>
                ${favorisHtml}
            </section>
            <p><a href="/">Retour à l'accueil</a></p>
        `;
    }
}
