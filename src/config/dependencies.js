// dependecies se sastoje od useCasova i repozitorijuma

const useCases = require('../useCases');
// const repositories = require('../frameworks/repositories/mongo'); 
const repositories = require('../frameworks/repositories/inMemory');
module.exports = { // ceo objekat se prosledjuje kao dependecies kontrolerima
    useCases, // ovaj objekat se sastoji od users, products i orders
    ...repositories
}

// Ovaj kod se importuje u app.js

// Controlleri koriste useCases, a useCases koriste repositories. (I zbog toga se i useCases i repositories moraju ubaciti kao dependecies)

// Kljucno je da ovaj dependecies objekat bude struktuiran na nacin da ga mogu koristiti i Controllers (iz useCases izvlace potrebno) i UseCases (iz repositories izvlace potrebno)

// Framwork-express koristi Controllers. Bolje reci framework-express poziva odgovarajuci kontroler na odgovarajucoj ruti.

// U rutama za user, product i order se importuje odgovarajuci restruktuirani segment iz celokupnog controlora. Taj importovani segment vraca funkcije kojima su vec prosledjene dependecies