import Utils        from '../../services/Utils.js'
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await PersonnagesProvider.getPersonnage(request.nom)
        
        return /*html*/`
            <section class="section">
                <h2> ${ request }</h2>
                <h1> ${ post} </h1>
            </section>
            <p><a href="/">back to home</a></p>
        `
    }
}

