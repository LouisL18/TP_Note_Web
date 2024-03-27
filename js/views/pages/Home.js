// Instantiate API
import PersonnagesProvider from "./../../services/PersonnagesProvider.js";

export default class Home {

    async render() {
        // Obtenir des données de l'API
        let personnages = await PersonnagesProvider.fetchPersonnages(50);

        let view = `
            <div class="jumbotron">
                <h1>Bienvenue sur notre projet Dofus!</h1>
                <p class="home">Explorez l'univers passionnant de Dofus avec notre application.</p>
                <a href="/personnages" class="btn btn-primary">Voir les personnages</a>
            </div>
            <div class="container">
                <h2>Nos personnages preferés :</h2>
                <div class="row">
        `;

        // Ajouter des personnages à la page
        personnages.slice(0, 3).forEach(personnage => {
            view += `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${personnage.image}" class="card-img-top" alt="${personnage.nom}">
                        <div class="card-body">
                            <h5 class="card-title">${personnage.nom}</h5>
                            <p class="card-text">${personnage.description}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        view += `
                </div>
            </div>
        `;
        
        return view;
    }
}

