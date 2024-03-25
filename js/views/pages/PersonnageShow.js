import Utils        from '../../services/Utils.js'
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render () {
        let request = Utils.parseRequestURL()
        let personnage = await PersonnagesProvider.getPersonnage(request.nom)        
        return /*html*/`
            <section class="section">
                <h2> ${ request.nom }</h2>
            </section>
            <p><a href="/">back to home</a></p>
        `
    }
}

