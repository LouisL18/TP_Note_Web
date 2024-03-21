import Utils        from '../../services/Utils.js'
import PersonnagesProvider from "../../services/PersonnagesProvider.js";

export default class PersonnageShow {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await PersonnagesProvider.getPersonnage(request.nom)
        
        return /*html*/`
            <section class="section">
                <h1> Article index : ${post.nom}</h1>
                <p> Post Title : ${post.nom} </p>
                <p> Post Content : ${post.nom} </p>
            </section>
            <p><a href="/">back to home</a></p>
            <p><a href="#/articles">back to all articles</a></p>
        `
    }
}

