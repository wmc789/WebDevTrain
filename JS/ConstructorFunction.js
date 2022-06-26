/*function Animal (name, lebensraum, fleischfresser, entdeckung) {
    this.name = name;
    this.lebensraum = lebensraum;
    this.fleischfresser = fleischfresser;
    this.entdeckung = new Date(entdeckung);
    /*this.getOnlyYear = function() {
        return this.entdeckung.getFullYear();
    }*//*
    this.getNameAndLebensraum = function() {
        return `${this.name} ${this.lebensraum}`;
    }
}

Animal.prototype.getOnlyYear = function() {
    return this.entdeckung.getFullYear();
}

const animal1 = new Animal('Pinguin', 'Suedpol', true, '2-3-1775');
const animal2 = new Animal('Hai', 'Meer', true);

console.log(animal2);
*/


class Animal {
    constructor(name, lebensraum, fleischfresser, entdeckungsJahr) {
        this.name = name;
        this.lebensraum = lebensraum;
        this.fleischfresser = fleischfresser;
        this.entdeckungsJahr = new Date(entdeckungsJahr);
    }
    getNameAndFleischfresser(){
        return `${this.name} ${this.fleischfresser}`;
    }
    getOnlyYear(){
        return this.entdeckungsJahr.getFullYear();
    }
}

const animal3 = new Animal('Tiger', 'Dschungel', true, '4-2-1803');

console.log(animal3.getNameAndFleischfresser());