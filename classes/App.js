import prompt from '../helpers/prompt.js';
import Person from './Person.js';

export default class App {

    constructor() {
        // Create a person
        let aPerson = Person.createFromPrompt();

        // Add a pet to the person
        while (true) {
            console.log('');
            let wantsToAddPet = prompt('Vill du lägga till ett husdjur (ja/nej)? ');
            // leave the while loop (break) if the user don't want to add a pet
            if (wantsToAddPet !== 'ja') {
                break;
            }
            aPerson.addPetFromPrompt();
        }

        // Call the method sayHello and console.log 
        // the return value from the method
        console.log(aPerson.sayHello());
    }

}