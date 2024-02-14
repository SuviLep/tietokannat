//Tehtava 16 
// a) Tee Javascriptilla ohjelma, joka kysyy käyttäjältä kaksi lukua ja ilmoittaa niistä suuremman.

const prompt = require('prompt-sync')();

function vertaa(luku1, luku2){
    if (luku1> luku2){
    return luku1+ " on suurempi.";
    }

    if (luku2>luku1){
    return luku2 + " on suurempi.";
    }

    if (luku1==luku2){
    return 'luvut ovat samat';
    }
}
    //Pyydetään lukuja
    const aluku= prompt('Anna ensimmainen luku');
    const bluku= prompt('Anna toinen luku');

    const tulos= vertaa(aluku, bluku);
    console.log(tulos);
    