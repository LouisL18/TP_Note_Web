import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageAll {

    async render () {
        let personnages = await PersonnagesProvider.fetchPersonnages(50);
        let view =  /*html*/`
            <h2>Tous les Personnages</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                ${ personnages.map(personnage => 
                    /*html*/`
                    <div class="col">
                    <div class="card shadow-sm">
                    <img class="bd-placeholder-img card-img-top" loading="lazy" src="${personnage.image}" alt="${personnage.image}" width="100%" height="225">
                        <div class="card-body">
                            <p class="card-text">${personnage.nom ? personnage.nom.slice(0,100) : ''}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="#/personnages/${personnage.nom}" class="btn btn-sm btn-outline-secondary">Voir ${personnage.nom}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    `
                    ).join('\n ')
                }
            </div>
        `
        return view
    }

}