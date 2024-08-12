import prompt from '../helpers/prompt.js';
import Pet from './Pet.js';

// export our class declaration for Person
export default class Person {

    constructor(name, age) {
        // create the properties name and age
        // from the input parameters
        this.name = name;
        this.age = age;
        // create an empty list/array for
        // pets that the person might get
        this.pets = [];
    }

    // this is a static method
    // you call it without creating an instance
    // like this: Person.createFromPropt()
    static createFromPrompt() {
        console.log('Skapa en person');
        console.log('---------------');
        let name = prompt('Namn: ');
        let age = prompt('Ålder: ');
        // create a new Person instance and return it
        return new Person(name, age);
    }

    // a method that says hello and let the person
    // tell some things about they
    sayHello() {
        let about = `\nHej! Mitt namn är ${this.name} och jag är ${this.age} år gammal!`;
        // if the person owns pets
        if (this.pets.length > 0) {
            about += '\nJag har följande husdjur:'
            for (let pet of this.pets) {
                about += pet.aboutMe();
            }
        }
        return about;
    }

    // a method that let us add a pet to the person
    addPet(name, species) {
        // add the pet to the list/array pets
        this.pets.push(new Pet(name, species));
    }

    // a method that prompts for a pet to add
    addPetFromPrompt() {
        this.pets.push(Pet.createFromPrompt());
    }

}
