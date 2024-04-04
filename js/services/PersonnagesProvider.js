import { ENDPOINT } from '../config.js'

export default class PersonnagesProvider {

    static fetchPersonnages = async (limit = 10) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ENDPOINT}/?_limit=${limit}`, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting personnages', err)
       }
    }
        static async fetchPersonnagesPerPage(pageSize, page) {
            try {
                const response = await fetch(`${ENDPOINT}/?_limit=${pageSize}&_page=${page}`);
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} lors de la récupération des personnages.`);
                }
                const data = await response.json();
                return data; // Vous n'avez pas besoin d'accéder à data.personnages si votre backend renvoie directement un tableau de personnages
            } catch (error) {
                console.error("Erreur lors de la récupération des personnages :", error);
                throw error; // Lancez à nouveau l'erreur pour la gérer à un niveau supérieur si nécessaire
            }
        }
    

    static async fetchPersonnageById(personnageId) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/${personnageId}`, options)
            const json = await response.json();
            return json
        } catch (err) {
            console.log('Error getting personnage', err)
        }
    }
    static getPersonnage = async (id) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ENDPOINT}/` + id, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting personnage', err)
       }
    }

    static getPersonnagebis = async (name) => {
        try {
            const response = await this.fetchPersonnages(50);
            console.log(response);
            return response.filter(personnage => personnage.nom.toLowerCase() === name.toLowerCase());
        } catch (err) {
            console.log('Error getting personnage', err);
        }
    }
    
}
