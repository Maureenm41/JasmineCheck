let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {

    let p1 = "Le javascript est "
    let p2 = "super"
    let str = p1 + p2

    return str

}
let afficherCar5 =  (texte) => {
    let afficherCar5 = "Ces exercices sont supers!";
    let car5 = afficherCar5.charAt(4);
    console.log(afficherCar5.charAt(4))
    return car5.charAt(4)

}
let afficher9Car =  (texte) => {
    let afficher9Car = "Je dirais même qu'ils sont excellents";
    let Car9 = afficher9Car.slice(0,9)
    console.log(afficher9Car.slice(0.9))
    return Car9 

}
let majusculeString =  (texte) => {
    let majusculeString = "Un autre excellent exercie";
    let maj = majusculeString.toUpperCase();
    console.log(maj)
    return maj

}
let minusculeString =  (texte) => {
    let minusculeString = "Celui ci aussi!"
    let minString = minusculeString.toLowerCase();
    console.log(minString)
    return minString

}
let SupprEspaceString =  (texte) => {
    let SupprEspaceString = "Rome ne s\'est pas construite en un jour";
    let delSpaceString = SupprEspaceString.split(" ").join("")
    console.log(delSpaceString)
    return delSpaceString

}
let IsString =  (texte) => {

}

let AfficherExtensionString =  (texte) => {

}
let NombreEspaceString =  (texte) => {

}
let InverseString =  (texte) => {

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {

}
let valeurAbsolue =  (nombre) => {

}
let valeurAbsolueArray =  (array) => {

}
let sufaceCercle =  (rayon) => {

}
let hypothenuse =  (ab, ac) => {

}
let calculIMC =  (poids, taille) => {

}