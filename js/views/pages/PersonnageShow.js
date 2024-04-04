import Utils from '../../services/Utils.js';
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render() {
        let request = Utils.parseRequestURL();
        let personnage = await PersonnagesProvider.getPersonnagebis(request.id);
        let perso = personnage[0];
        
        let view = `
            <section class="section">
                <h2>${perso.nom}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img class="ak-entitylook" alt="" width="250" height="250" src="${perso.image}">
                    </div>
                    <div class="col-md-6">
                        <p><strong>Classe:</strong> ${perso.classe}</p>
                        <p><strong>Description:</strong> ${perso.description}</p>
                        <p class="niveau-container"><strong>Niveau:</strong> ${perso.niveau} <button class="btn btn-primary add-niveau">+</button></p>
                        <p class="vie-container"><strong>Points de vie:</strong> ${perso.points_de_vie} <button class="btn btn-primary add-points_de_vie">+</button></p>
                        <p class="force-container"><strong>Force:</strong> ${perso.force} <button class="btn btn-primary add-force">+</button></p>
                        <p class="agilite-container"><strong>Agilité:</strong> ${perso.agilite} <button class="btn btn-primary add-agilitie">+</button></p>
                        <p class="intelligence-container"><strong>Intelligence:</strong> ${perso.intelligence} <button class="btn btn-primary add-intelligence">+</button></p>
                        <p><strong>Équipement:</strong></p>
                        <ul id="equipement-list">
                            <li class="item"><strong>Arme:</strong> ${perso.equipement.arme}</li>
                            <li class="item"><strong>Armure:</strong> ${perso.equipement.armure}</li>
                            <li class="item"><strong>Accessoires:</strong> ${perso.equipement.accessoires.join(", ")}</li>
                        </ul>
                        <div class="equipement-container">
                            <h4>Ajouter Équipement:</h4>
                            <input type="text" id="equipement-input" placeholder="Nom de l'équipement">
                            <button class="btn btn-primary add-equipement">Ajouter</button>
                        </div>
                    </div>
                </div>
            </section>
            <p><a href="/">Retour à l'accueil</a></p>
        `;
        setTimeout(async () => {
            await this.afterRender();
        });
        return view;
    }

    async afterRender() {
        const addEquipementBtn = document.querySelector('.add-equipement');
        const addNiveauBtn = document.querySelector('.add-niveau');
        const addPointsDeVieBtn = document.querySelector('.add-points_de_vie');
        const addForceBtn = document.querySelector('.add-force');
        const addAgilitieBtn = document.querySelector('.add-agilitie');
        const addIntelligenceBtn = document.querySelector('.add-intelligence');

        addEquipementBtn.addEventListener('click', () => this.addEquipement());
        addNiveauBtn.addEventListener('click', () => {
            console.log("Ajouter un niveau");
            let niveauContainer = document.querySelector('.niveau-container');
            let niveau = parseInt(niveauContainer.innerText.split(":")[1]);
            niveauContainer.innerHTML = `<strong>Niveau:</strong> ${niveau + 1} <button class="btn btn-primary add-niveau">+</button>`;
            this.afterRender();
        });
        addPointsDeVieBtn.addEventListener('click', () => {
            console.log("Ajouter de la Vie");
            let niveauContainer = document.querySelector('.vie-container');
            let vie = parseInt(niveauContainer.innerText.split(":")[1]);
            niveauContainer.innerHTML = `<strong>Points de vie:</strong> ${vie + 1} <button class="btn btn-primary add-points_de_vie">+</button>`;
            this.afterRender();
        });
        addForceBtn.addEventListener('click', () => {
            console.log("Ajouter de la Force");
            let niveauContainer2 = document.querySelector('.force-container');
            let force = parseInt(niveauContainer2.innerText.split(":")[1]);
            niveauContainer2.innerHTML = `<strong>Force:</strong> ${force + 1} <button class="btn btn-primary add-force">+</button>`;
            this.afterRender();
        });
        addAgilitieBtn.addEventListener('click', () => {
            console.log("Ajouter de l'Agilité");
            let niveauContainer3 = document.querySelector('.agilite-container');
            let agilite = parseInt(niveauContainer3.innerText.split(":")[1]);
            niveauContainer3.innerHTML = `<strong>Agilité:</strong> ${agilite + 1} <button class="btn btn-primary add-agilitie">+</button>`;
            this.afterRender();
        });
        addIntelligenceBtn.addEventListener('click', () => {
            console.log("Ajouter de l'Intelligence");
            let niveauContainer4 = document.querySelector('.intelligence-container');
            let intelligence = parseInt(niveauContainer4.innerText.split(":")[1]);
            niveauContainer4.innerHTML = `<strong>Intelligence:</strong> ${intelligence + 1} <button class="btn btn-primary add-intelligence">+</button>`;
            this.afterRender();
        });
    }


    async addEquipement() {
        const equipementInput = document.getElementById('equipement-input');
        const equipementName = equipementInput.value;
        const equipementList = document.getElementById('equipement-list');

        const newItem = `<li class="item">${equipementName}</li>`;
        equipementList.innerHTML += newItem;

        equipementInput.value = '';
    }
}
