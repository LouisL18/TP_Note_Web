import Utils        from '../../services/Utils.js'
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render () {
        let request = Utils.parseRequestURL()
        let personnage = await PersonnagesProvider.getPersonnage(request.nom)     
        return /*html*/`
            <section class="section">
                <h2> ${ personnage }</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img class="ak-entitylook" alt="" width="250" height="250" src="${personnage.image}">
                    </div>
                    <div class="col-md-6">
                        <p>${ personnage.description }</p>
                    </div>
            </section>
            <p><a href="/">back to home</a></p>
        `
    }
}

