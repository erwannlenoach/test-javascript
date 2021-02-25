const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//Est-ce que tous les livres ont été au moins empruntés une fois ? (non-fini)

var result;
for( var i = 0, len = books.length; i < len; i++ ) {
    if( books[i][3] > 1 ) {
        console.log("true")
    }
}

//Quel est livre le plus emprunté ? (non-fini)

//for( var i = 0, len = books.length; i < len; i++ ) {
//console.log(Math.max(...books[i][2]))


//Quel est le livre le moins emprunté ? (non-fini)

//console.log(Math.min(...books[2]))

//Trouve le livre avec l'ID: 873495 ;

function researchbyID(book) {
    return book.id === 873495;
  }
  
console.log(books.find(researchbyID));

//Supprime le livre avec l'ID: 133712 ;

books.shift()

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

books.sort(function(a, b){
    if(a.title< b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
  console.log(books)
