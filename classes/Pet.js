import prompt from '../helpers/prompt.js';

export default class Pet {

    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    static createFromPrompt() {
        console.log('');
        console.log('Skapa ett husdjur');
        console.log('-----------------');
        let name = prompt('Namn på husdjur: ');
        let species = prompt('Art (hund, katt etc): ');
        // create a new Person instance and return it
        return new Pet(name, species);
    }

    aboutMe() {
        return `\n- ${this.name} som är en ${this.species}.`;
    }

}