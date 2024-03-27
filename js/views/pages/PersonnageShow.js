import Utils from '../../services/Utils.js';
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render() {
        let request = Utils.parseRequestURL();
        let personnage = await PersonnagesProvider.getPersonnage(request.nom);
        
        let view = /*html*/ `
            <section class="section">
                <h2>${personnage.nom}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img class="ak-entitylook" alt="" width="250" height="250" src="${personnage.image}">
                    </div>
                    <div class="col-md-6">
                        <p><strong>Classe:</strong> ${personnage.classe}</p>
                        <p><strong>Description:</strong> ${personnage.description}</p>
                        <p><strong>Niveau:</strong> ${personnage.niveau}</p>
                        <p><strong>Points de vie:</strong> ${personnage.points_de_vie}</p>
                        <p><strong>Force:</strong> ${personnage.force}</p>
                        <p><strong>Agilité:</strong> ${personnage.agilite}</p>
                        <p><strong>Intelligence:</strong> ${personnage.intelligence}</p>
                        <p><strong>Équipement:</strong></p>
                        <ul>
                            <li class="item"><strong>Arme:</strong> ${personnage.equipement.arme}</li>
                            <li class="item"><strong>Armure:</strong> ${personnage.equipement.armure}</li>
                            <li class="item"><strong>Accessoires:</strong> ${personnage.equipement.accessoires.join(", ")}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <p><a href="/">Retour à l'accueil</a></p>
        `;

        return view;
    }
}
