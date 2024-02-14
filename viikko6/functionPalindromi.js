// 16.b) Tee Javascriptilla ohjelma, joka tutkii, onko annettu sana palindromi. 
// Palindromi on sana, joka on sama etu- ja takaperin. 
// Esimerkiksi saippuakauppias. Välilyöntejä ei tarvitse käsitellä, eli syötteenä vain yksi sana.

const prompt = require('prompt-sync')();


function Palindromi(sana) {
    // Poista välilyönnit ja muuta kirjaimet pieniksi
    sana = sana.toLowerCase();

    // Käännä sana takaperin
    const kaannettySana = sana.split('').reverse().join('');

    // Vertaa alkuperäistä sanaa ja käännettyä sanaa
    return sana === kaannettySana;
}

// Testaa funktiota
const syote = prompt('Anna sana: ');

if (Palindromi(syote)) {
    console.log(syote + ' on palindromi.');
} else {
    console.log(syote + ' ei ole palindromi.');
}
