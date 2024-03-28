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
