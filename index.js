
 let forma=document.getElementById('forma');
console.log(forma);
 
 let create=document.getElementById('create');
  let nom=document.getElementById('nom');
 console.log(nom);
  let position=document.getElementById('position');
 console.log(position);
  let nationality=document.getElementById('nationality');
 console.log(nationality);
  let club=document.getElementById('club');
 console.log(club);
  let rating=document.getElementById('rating');
 console.log(rating);
  let pace=document.getElementById('pace');
 console.log(pace);
  let shooting=document.getElementById('shooting');
 console.log(shooting)
  let passing=document.getElementById('passing')
console.log(passing);
 let dribbling=document.getElementById('dribbling');
console.log(dribbling);
 let defending=document.getElementById('defending');
console.log(defending);
 let physical=document.getElementById('physical');
console.log(physical);
let result=document.getElementsByClassName('text');
console.log(result);

  // Initialiser isvalid à false, car on vérifie si le champ est rempli




nom.addEventListener("input", validation);



// event pour create 
 create.addEventListener('click',add_players);
// function de add players
function add_players(){
     




}
nom.addEventListener("input", validation)
// input.addEventListener("input", logKey);
function validation() {
  
  // Vérifier si le champ 'nom' n'est pas vide
  if (typeof(nom.value)  === "string" && nom.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nom.value)) {
    // Si la valeur n'est pas vide, retourner true (ou effectuer une action comme afficher un message)
console.log("correct")

result[0].innerHTML="coorrect";
  } else {
    // Si la valeur est vide, retourner false
    console.log("Le champ est vide !");

    result[0].innerHTML="incorrect";

    
  }}
  const validPositions = ["GK", "CB", "RW", "CF", "CM", "LW"];
  position.addEventListener('input',valide_positon)
  function valide_positon(){
    let positionne=position.value.trim();
     if(validPositions.includes(positionne)){
console.log("correct");
result[1].innerHTML="coorrect";

     }
    else{
       console.log("ncorrect");
       result[1].innerHTML="incorrect"
      
     }


  }
  rating.addEventListener('click',valide_rating);
  function  valide_rating(){ if (rating.value != "" && !isNaN(rating.value) && rating.value >= 1 && rating.value <= 100) {
    console.log("correct");
    result[4].innerHTML = "valide";
} else {
    console.log("incorrect");
    result[4].innerHTML = "invalide";
}}

 


  




























// const validPositions = ["GK", "CB", "RW", "CF", "CM", "LW"];
// if (!validPositions.includes(value)) {
//   document.getElementById('positionError').innerText = "Position invalide.";
//   isValid = false;('h1)
// } else {
//   document.getElementById('positionError').innerText = "Correct!";
// }

// /valider_message.js

// nom.addEventListener('', function() {
//     var nomas= nom.value.trim(); // Supprime les espaces avant/après
   
//     var length = nomas.length;
  
//     if (length === 0) {
//     //   text.innerHTML = "votre message est invalide (vide ou uniquement des espaces)";
//       text.style.color = "red";
//       text.style.fontSize = "12px" ;
  
//     } else {
//       if (length < 10) {
//         // text.innerHTML = "votre message est invalide (message < 10)";
//         text.style.color = "orange";
//         text.style.fontSize = "12px" ;
  
//       } else {
//         // text.innerHTML = "votre message est valide";
//         text.style.color = "green";
//         text.style.fontSize = "12px" ;
  
//       }
//     }
//   });

// tableau des players
players=[];

// Pour valider un champ input correspondant à un objet tel que celui que vous avez mentionné (contenant des informations sur un joueur de football), vous pouvez définir certaines conditions de validation basées sur les types de données et les valeurs attendues dans l'objet. L'objectif de validation sera de vérifier que les valeurs entrées par l'utilisateur correspondent aux critères définis pour chaque champ, comme suit :

// 1. Nom du joueur ("name")
// Condition : Le champ name doit être une chaîne de caractères non vide.
// Validation : Vérifier que le nom ne soit pas vide et qu'il soit composé de caractères alphabétiques et éventuellement d'espaces.
// Exemple de validation :
// name ne doit pas être vide.
// name doit être une chaîne contenant des lettres et des espaces uniquement.
// 2. Photo du joueur ("photo")
// Condition : Le champ photo doit contenir une URL valide qui mène à une image.
// Validation : Vérifier que l'URL est bien formatée (commence par http ou https et se termine par .png, .jpg, etc.) et qu'elle pointe vers une ressource image.
// Exemple de validation :
// L'URL doit commencer par http:// ou https://.
// L'URL doit se terminer par une extension d'image valide (.png, .jpg, .jpeg, etc.).
// 3. Position du joueur ("position")
// Condition : Le champ position doit être une chaîne de caractères et correspondre à une position valide parmi une liste de positions connues (par exemple : GK, CB, RW, CF, etc.).
// Validation : Vérifier que la position appartient à une liste pré-défini de positions valides.
// Exemple de validation :
// La position doit être dans une liste des positions valides (ex. : ["GK", "CB", "RW", "CF", "CM", "LW"]).
// 4. Nationalité ("nationality")
// Condition : Le champ nationality doit être une chaîne de caractères et correspondre à un pays valide.
// Validation : Vérifier que la nationalité appartient à une liste pré-défini des pays.
// Exemple de validation :
// La nationality doit être dans une liste des pays valides (ex. : ["Argentina", "Brazil", "France", "Spain"]).
// 5. Drapeau ("flag")
// Condition : Le champ flag doit être une URL valide pointant vers une image de type .png.
// Validation : Vérifier que l'URL est bien formatée (commence par http ou https et se termine par .png).
// Exemple de validation :
// L'URL doit commencer par http:// ou https://.
// L'URL doit se terminer par .png.
// 6. Club ("club")
// Condition : Le champ club doit être une chaîne de caractères non vide.
// Validation : Vérifier que le champ club n'est pas vide.
// Exemple de validation :
// club ne doit pas être vide.
// 7. Logo du club ("logo")
// Condition : Le champ logo doit être une URL valide pointant vers une image.
// Validation : Vérifier que l'URL est bien formatée (commence par http ou https et se termine par .png).
// Exemple de validation :
// L'URL doit commencer par http:// ou https://.
// L'URL doit se terminer par .png.
// 8. Note du joueur ("rating")
// Condition : Le champ rating doit être un nombre entier entre 1 et 100.
// Validation : Vérifier que la valeur est un nombre entier et qu'elle est comprise dans l'intervalle de 1 à 100.
// Exemple de validation :
// rating doit être un entier compris entre 1 et 100.
// 9. Caractéristiques du joueur : pace, shooting, passing, dribbling, defending, physical
// Condition : Chaque caractéristique (pace, shooting, passing, dribbling, defending, physical) doit être un nombre entier compris entre 0 et 100.
// Validation : Vérifier que chaque caractéristique est un nombre entier dans l'intervalle de 0 à 100.
// Exemple de validation :
// Chaque caractéristique doit être un entier compris entre 0 et 100.
// Validation des champs
// Voici une liste de conditions générales pour la validation de l'entrée dans un formulaire ou de l'objet utilisateur en fonction de chaque champ :

// Nom : Non vide, uniquement alphabétiques et espaces.
// Photo : URL valide qui pointe vers une image.
// Position : Doit appartenir à une liste de positions valides (ex. RW, CF).
// Nationalité : Doit correspondre à un pays valide.
// Drapeau : URL valide qui pointe vers une image de type .png.
// Club : Non vide.
// Logo du club : URL valide qui pointe vers une image de type .png.
// Rating : Entier compris entre 1 et 100.
// Caractéristiques : Entiers compris entre 0 et 100 pour chaque caractéristique (pace, shooting, passing, dribbling, defending, physical).
// Exemple de validation pour le formulaire
// Si vous validez un formulaire avec des champs correspondant à cet objet, vous pourriez écrire un algorithme de validation comme suit (en utilisant les événements comme input, blur, ou submit dans le code JavaScript) :

// Validation pour le champ name :

// Vérifier que name n'est pas vide.
// Vérifier qu'il ne contient que des lettres et des espaces.
// Validation pour les champs URL (photo, flag, logo) :

// Vérifier que chaque URL commence par http:// ou https:// et se termine par .png, .jpg, etc.
// Validation pour le champ position :

// Vérifier que position appartient à une liste de positions valides.
// Validation pour rating et les caractéristiques :

// Vérifier que chaque valeur de caractéristique est un entier compris entre 0 et 100.
// Une fois que vous avez défini ces conditions de validation, vous pouvez appliquer ces règles à l'aide d'événements JavaScript pour assurer que l'utilisateur saisit des données valides avant de soumettre un formulaire ou de traiter l'objet.
nationality.addEventListener('input',valide_nationality);
function valide_nationality(){
  if(typeof(nationality.value)  === "string" && nationality.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nationality.value)){
    result[2].innerHTML="correct"
  }
  else(result[2].innerHTML="invalid")
}
 pace.addEventListener('click',valide_pace);
function valide_pace() {
  if(pace.value != "" && !isNaN(pace.value) && rating.value >= 0 && pace.value <= 100){
    result[5].innerHTML="valide";
    console.log("correct")

  }
  else{
    result[5].innerHTML="invalid";
    // console.log("incorrect")
  }
 }

 pace.addEventListener('click',valide_pace);
function valide_pace() {
  if(pace.value != "" && !isNaN(pace.value) && rating.value >= 0 && pace.value <= 100){
    result[5].innerHTML="valide";
    console.log("correct")

  }
  else{
    result[5].innerHTML="invalid";
    // console.log("incorrect")
  }
 }
 shooting.addEventListener('click',valide_shooting);
 function valide_shooting() {
   if(shooting.value != "" && !isNaN(shooting.value) && shooting.value >= 0 && shooting.value <= 100){
     result[6].innerHTML="valide";
     console.log("correct")
 
   }
   else{
     result[6].innerHTML="invalid";
     // console.log("incorrect")
   }
  }
  passing.addEventListener('click',valide_passing);
 function valide_passing() {
   if(passing.value != "" && !isNaN(passing.value) && r.value >= 0 && passing.value <= 100){
    // result[7].innerHTML="valide";
    console.log("correct")
 
   }
   else{
    result[7].innerHTML="invalid";
   
     // console.log("incorrect")
   }
  }
 








