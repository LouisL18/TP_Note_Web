import Utils from '../../services/Utils.js';
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render() {
        let request = Utils.parseRequestURL();
        let personnage = await PersonnagesProvider.getPersonnagebis(request.id);
        let perso = personnage[0];
        
        let view = /*html*/ `
            <section class="section">
                <h2>${perso.nom}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img class="ak-entitylook" alt="" width="250" height="250" src="${perso.image}">
                    </div>
                    <div class="col-md-6">
                        <p><strong>Classe:</strong> ${perso.classe}</p>
                        <p><strong>Description:</strong> ${perso.description}</p>
                        <p><strong>Niveau:</strong> ${perso.niveau}</p>
                        <p><strong>Points de vie:</strong> ${perso.points_de_vie}</p>
                        <p><strong>Force:</strong> ${perso.force}</p>
                        <p><strong>Agilité:</strong> ${perso.agilite}</p>
                        <p><strong>Intelligence:</strong> ${perso.intelligence}</p>
                        <p><strong>Équipement:</strong></p>
                        <ul>
                            <li class="item"><strong>Arme:</strong> ${perso.equipement.arme}</li>
                            <li class="item"><strong>Armure:</strong> ${perso.equipement.armure}</li>
                            <li class="item"><strong>Accessoires:</strong> ${perso.equipement.accessoires.join(", ")}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <p><a href="/">Retour à l'accueil</a></p>
        `;

        return view;
    }
}
