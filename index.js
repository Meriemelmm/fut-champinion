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

console.log(rating);
let kicking=document.getElementById('kicking');
console.log(kicking);
let  speed=document.getElementById('speed');
console.log(speed);
let  handling=document.getElementById('handling');
let positioning=document.getElementById('positioning');
console.log(positioning);
let reflexes=document.getElementById('reflexes');
console.log(reflexes);

















let forma=document.getElementById('forma');
console.log(forma);
 
 let create=document.getElementById('create');
  let nom=document.getElementById('nom');
 console.log(nom);
  let position=document.getElementById('position');
  let container=document.getElementById('container');
  console.log(container);
  let formation_select=document.getElementById('formation-select');
  console.log(formation_select);
 formation_select.addEventListener('change',()=>{
  let formulevalue=formation_select.value;

  if(formulevalue==="433"){
    alert("cool");
  }
  else if(formulevalue==="432"){
    alert("niceeeee");
  }
 })

 console.log(position);
 let positionvalue=position.value;
 console.log( positionvalue);
 position.addEventListener('change',(event)=>{
  let  positionvalue = position.value;
  if(positionvalue=="GK"){
  
    container.innerHTML=`
    
    <label for=""> diving</label>
        <input type="number" id=""diving"required>
        <div class="text"></div>
        <label for=""> handling</label>
        <input type="number" id="handling" required>
        <div class="text"></div>
        <label for=""></label>

        <input type="number" id="passing"required> 
        <div class="text"></div>
        
        <label for="">dribbling</label>
        <input type="number" id="dribbling" required>
        <div class="text"></div>
        <label for="">defending</label>
        <input type="nomber" id="defending"  required>
        <div class="text"></div>
        <label for="">physical</label>
        <input type="number" id="physical"  required>
        <div class="text"></div>
    
    
    `

  }
 
else{ 
  container.innerHTML=`<label for=""> pace</label>
  <input type="number" id="pace"required>
  <div class="text"></div>
  <label for=""> shootting</label>
  <input type="number" id="shooting" required>
  <div class="text"></div>
  <label for="">passing</label>

  <input type="number" id="passing"required> 
  <div class="text"></div>
  
  <label for="">dribbling</label>
  <input type="number" id="dribbling" required>
  <div class="text"></div>
  <label for="">defending</label>
  <input type="nomber" id="defending"  required>
  <div class="text"></div>
  <label for="">physical</label>
  <input type="number" id="physical"  required>
  <div class="text"></div>`

  

}})





nom.addEventListener("input", validation);



// event pour create 
 create.addEventListener('click',add_players);
// function de add players
function add_players(){
     




}
nom.addEventListener("input", validation)

function validation() {
 
  if (typeof(nom.value)  === "string" && nom.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nom.value)) {
   
console.log("correct")

result[0].innerHTML="coorrect";
  } else {
    // Si la valeur est vide, retourner false
    console.log("Le champ est vide !");

    result[0].innerHTML="incorrect";

    
  }}
  const validPositions = ["ST", "GK", "CB", "LB", "RB", "CM", "LM", "RM", "LW", "RW"];
  position.addEventListener('input',valide_positon)
  
  console.log()
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
name_playeer=document.getElementsByClassName('name_player');
console.log(name_playeer)

 


  






























// nationality.addEventListener('input',valide_nationality);
// function valide_nationality(){
//   if(typeof(nationality.value)  === "string" && nationality.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nationality.value)){
//     result[2].innerHTML="correct"
//   }
//   else(result[2].innerHTML="invalid")
// }
//  pace.addEventListener('input',valide_pace);
// function valide_pace() {
//   if(pace.value != "" && !isNaN(pace.value) && rating.value >= 0 && pace.value <= 100){
//     result[5].innerHTML="valide";
//     console.log("correct")

//   }
//   else{
//     result[5].innerHTML="invalid";
   
//   }
//  }

//  pace.addEventListener('input',valide_pace);
//  function valide_pace() {
//   if (pace.value != "" && !isNaN(pace.value) && pace.value >= 0 && pace.value <= 100) {
//     result[5].innerHTML = "valide";
//     console.log("correct");
//   } else {
//     result[5].innerHTML = "invalid";
//     console.log("incorrect");
//   }
// }
//  shooting.addEventListener('input',valide_shooting);
//  function valide_shooting() {
//    if(shooting.value != "" && !isNaN(shooting.value) && shooting.value >= 0 && shooting.value <= 100){
//      result[6].innerHTML="valide";
//      console.log("correct")
 
//    }
//    else{
//      result[6].innerHTML="invalid";
     
//    }
//   }
  
//   defending.addEventListener('input',valide_defending);
//   function valide_defending() {
//     if(defending.value != "" && !isNaN(defending.value) && defending.value >= 0 && defending.value <= 100){
//       result[9].innerHTML="valide";
//       console.log("correct")
   
//      }
//      else{
//       // result[9].innerHTML="invalid";
     
//        console.log("incorrect");
//      }
//    }
//    physical.addEventListener('input',valide_physical);
//   function valide_physical() {
//     if(physical.value != "" && !isNaN(physical.value) && defending.value >= 0 && physical.value <= 100){
//       result[10].innerHTML="valide";
//       console.log("correct")
   
//      }
//      else{
//       result[10].innerHTML="invalid";
     
//        console.log("incorrect");
//      }
//    }
//    dribbling.addEventListener('input',valide_dribbling);
//    function valide_dribbling() {
//      if(dribbling.value != "" && !isNaN(dribbling.value) && dribbling.value >= 0 && dribbling.value <= 100){
//        result[8].innerHTML="valide";
//        console.log("correct")
    
//       }
//       else{
//        result[8].innerHTML="invalid";
      
//         console.log("incorrect");
//       }
//     }
//     passing.addEventListener('input',valide_passing);
//  function valide_passing() {
//    if(passing.value != "" && !isNaN(passing.value) && passing.value >= 0 && passing.value <= 100){
//     result[7].innerHTML="valide";
//     console.log("correct")
 
//    }
//    else{
//     result[7].innerHTML="invalid";
   
//      // console.log("incorrect");
//    }
//   }
//   club.addEventListener('input',valide_club);
//   function valide_club() {
//     if(typeof(nationality.value)  === "string" && nationality.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nationality.value))
//    {
//      result[3].innerHTML="valide";
//      console.log("correct")
  
//     }
//     else{
//      result[3].innerHTML="invalid";
    
//       // console.log("incorrect");
//     }
//    }
  
  //  ajoutation player :
 
  let players=[];

    // Créer un nouvel objet joueur
function addPlayer() {

  const newPlayer = {
      nom: nom.value.trim(),
      position: position.value.trim(),
      nationality: nationality.value.trim(),
      club: club.value.trim(),
      rating: parseInt(rating.value),
      pace: parseInt(pace.value),
      shooting: parseInt(shooting.value),
      passing: parseInt(passing.value),
      dribbling: parseInt(dribbling.value),
      defending: parseInt(defending.value),
      physical: parseInt(physical.value)
  }
  players.push(newPlayer);
    console.log(players);};




  

  
  // Vérifier si toutes les informations nécessaires sont remplies
//   if (!position || !nom || !nationality || !club || !rating || !pace || !shooting || !passing || !dribbling || !defending || !physical) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   const playerCard = document.createElement('div');
//   playerCard.classList.add('player-card');

//   // Ajouter les informations au joueur
//   playerCard.innerHTML = `
//     <div class="player-rating">${rating}</div>
//     <div class="player-position">${position}</div>
//     <div class="player-photo">
//       <img src="${photo}" alt="${nom}">
//     </div>
//     <div class="player-name">${name}</div>
//     <div class="statistique">
//       <div class="stat"><span>${pace}</span> PAC</div>
//       <div class="stat"><span>${shooting}</span> SHO</div>
//       <div class="stat"><span>${passing}</span> PAS</div>
//       <div class="stat"><span>${dribbling}</span> DRI</div>
//       <div class="stat"><span>${defending}</span> DEF</div>
//       <div class="stat"><span>${physical}</span> PHY</div>
//     </div>
//   `;

//   // Ajouter la card du joueur dans la position correspondante sur le terrain
//   const stadium = document.querySelector('.stadium');
//   let positionClass = '';

//   // Associer les positions à des classes CSS
//   switch (position) {
//     case 'GK':
//       positionClass = 'goalkeeper';
//       break;
//     case 'LB':
//       positionClass = 'left-back';
//       break;
//     case 'RB':
//       positionClass = 'right-back';
//       break;
//     case 'CM':
//       positionClass = 'enter-mid1'; // Pour l'exemple, peut être modifié selon la formation
//       break;
//     case 'CB':
//       positionClass = 'center-back1'; // Ou 'center-back2' selon la formation
//       break;
//     case 'LW':
//       positionClass = 'left-wing';
//       break;
//     case 'RW':
//       positionClass = 'right-wing';
//       break;
//     case 'ST':
//       positionClass = 'striker';
//       break;
//     default:
//       alert('Invalid position');
//       return;
//   }

//   // Ajouter la classe de position au joueur
//   playerCard.classList.add(positionClass);

//   // Ajouter le joueur au terrain
//   stadium.appendChild(playerCard);
// });
/* <div class="player-position" data-position="GK">GK</div> */

  
// Afficher la valeur dans la console


























// positionvalue;


// create.addEventListener('click',function (event) {let  carte = document.createElement('div');
//   carte.classList.add('player-card'); 
//   alert("hello")
//   event.preventDefault(); 
//   if( positionvalue=="GK"){
//     carte.innerHTML = `
//     <div class="player">
//       <div class="player-rating">${rating}</div>
//       <div class="player-position">${position}</div>
//       <div class="player-photo">
//         <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${nom}">
//       </div>
//       <div class="player-name">${nom}</div>
//       <div class="statistique">
//         <div class="stat"><span>${handling}</span> SHO</div>
       
//         // <div class="stat"><span>${diving}</span> DRI</div>
//         <div class="stat"><span>${dribbling}</span> DEF</div>
//         <div class="stat"><span>${defending}</span> PHY</div>
//       </div>
//     </div>
//   `;

//   }
//   else{
//     carte.innerHTML = `
//     <div class="player">
//       <div class="player-rating">${rating}</div>
//       <div class="player-position">${position}</div>
//       <div class="player-photo">
//         <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${nom}">
//       </div>
//       <div class="player-name">${nom}</div>
//       <div class="statistique">
//         <div class="stat"><span>${shooting}</span> SHO</div>
//         <div class="stat"><span>${passing}</span> PAS</div>
//         <div class="stat"><span>${dribbling}</span> DRI</div>
//         <div class="stat"><span>${defending}</span> DEF</div>
//         <div class="stat"><span>${physical}</span> PHY</div>
//       </div>
//     </div>
//   `;

//   }

 
// document.querySelector('.main-container').appendChild(carte);

//   }
  




 










//   )
 // Assurez-vous que le bouton existe


    // Assurez-vous que le bouton a cet ID

create.addEventListener('click', function(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    
    let obj = {
    rating : rating.value,
     nom : nom.value,
    //  handling :handling.value,
     dribbling : dribbling.value,
     defending : defending.value,
     shooting : shooting.value,
     passing : passing.value,
     physical : physical.value
    }

    console.log("hano" , obj  );     


    

    //Créer une carte de joueur
    let carte = document.createElement('div');
    let pos = document.getElementById('gk');
    let st=document.getElementById('STr');
    console.log(st);
    let rw=document.getElementById('rwt');
    let left =document.getElementById('leftyo');
    console.log(rw);

    // carte.classList.add('player-card');

    // console.log(positionvalue === position.value)
    console.log(position.value);
    // console.log(positionvalue)


    if ( position.value === "GK") {

        pos.outerHTML = `<div id="GK" class="player-card goalkeeper">
          <div class="player-rating">${obj.dribbling}</div>
          <div class="player-position" data-position="GK">GK</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
           <div class="stat"><span>86</span> PAC</div>
              <div class="stat"><span>82</span> SHO</div>
              <div class="stat"><span>75</span> PAS</div>
              <div class="stat"><span>84</span> DRI</div>
              <div class="stat"><span>34</span> DEF</div>
              <div class="stat"><span>76</span> PHY</div>
          </div>
      </div>`
        // pos.innerHTML = `
        // <div class="player">
        //     <div class="player-rating">${obj.rating}</div>
        //     <div class="player-position">${obj.positionvalue}</div>
        //     <div class="player-photo">
        //         <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
        //     </div>
        //     <div class="player-name">${obj.nom}</div>
        //     <div class="statistique">
        //         <div class="stat"><span>${obj.dribbling}</span> DRI</div>
        //         <div class="stat"><span>${obj.defending}</span> DEF</div>
        //         <div class="stat"><span>${obj.physical}</span> PHY</div>
        //     </div>
        // </div>
        // `;
    } 
    
//     else if(  position.value === "RB"){
//       pos.outerHTML =  `<div  class="player-card goalkeeper">
//       <div class="player-rating">${obj.dribbling}</div>
//       <div class="player-position" data-position="GK">GK</div>
//       <div class="player-photo">
//           <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
//       </div>
//       <div class="player-name">${obj.nom}</div>
//       <div class="statistique">
// 0              <div class="stat"><span>86</span> PAC</div>
//           <div class="stat"><span>82</span> SHO</div>
//           <div class="stat"><span>75</span> PAS</div>
//           <div class="stat"><span>84</span> DRI</div>
//           <div class="stat"><span>34</span> DEF</div>
//           <div class="stat"><span>76</span> PHY</div>
//       </div>
//   </div>`




    else if( position.value === "LW"){
      left.outerHTML = `<div id="GK" class="player-card goalkeeper">
      <div class="player-rating">${obj.dribbling}</div>
      <div class="player-position" data-position="GK">GK</div>
      <div class="player-photo">
          <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
      </div>
      <div class="player-name">${obj.nom}</div>
      <div class="statistique">
              <div class="stat"><span>86</span> PAC</div>
          <div class="stat"><span>82</span> SHO</div>
          <div class="stat"><span>75</span> PAS</div>
          <div class="stat"><span>84</span> DRI</div>
          <div class="stat"><span>34</span> DEF</div>
          <div class="stat"><span>76</span> PHY</div>
      </div>
  </div>`

    }
    else if( position.value === "RW"){
     
      rw.outerHTML = ` <div  id="rwt" class="player-card right-wing">
          <div class="player-rating">05</div>
          <div class="player-position" data-position="RW">RW</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
          </div>
          <div class="player-name">John Doe</div>
          <div class="statistique">
              <div class="stat"><span>86</span> PAC</div>
              <div class="stat"><span>82</span> SHO</div>
              <div class="stat"><span>75</span> PAS</div>
              <div class="stat"><span>84</span> DRI</div>
              <div class="stat"><span>34</span> DEF</div>
              <div class="stat"><span>76</span> PHY</div>
          </div>
        </div>`

}
    else if( position.value === "ST"){ 
       st.outerHTML = `<div  id="STr"class="player-card striker">
          <div class="player-rating">85</div>
          <div class="player-position" data-position="ST">ST</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>86</span> PAC</div>
              <div class="stat"><span>82</span> SHO</div>
              <div class="stat"><span>75</span> PAS</div>
              <div class="stat"><span>84</span> DRI</div>
              <div class="stat"><span>34</span> DEF</div>
              <div class="stat"><span>76</span> PHY</div>
          </div>
        </div>`

    }
    
    // else {
    //     carte.innerHTML = `
    //     <div class="player">
    //         <div class="player-rating">${rating}</div>
    //         <div class="player-position">${positionvalue}</div>
    //         <div class="player-photo">
    //             <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${nom}">
    //         </div>
    //         <div class="player-name">${nom}</div>
    //         <div class="statistique">
    //             <div class="stat"><span>${shooting}</span> SHO</div>
    //             <div class="stat"><span>${passing}</span> PAS</div>
    //             <div class="stat"><span>${dribbling}</span> DRI</div>
    //             <div class="stat"><span>${defending}</span> DEF</div>
    //             <div class="stat"><span>${physical}</span> PHY</div>
    //         </div>
    //     </div>
    //     `;
    // }

    // // Ajouter la carte dans le conteneur principal
    // let mainContainer = document.querySelector('.main-container');
    // if (mainContainer) {
    //     mainContainer.appendChild(carte);
    // } else {
    //     console.error("Le conteneur '.main-container' n'a pas été trouvé.");
    // }

    // alert("Carte de joueur ajoutée avec succès !");
    players.push(obj);
    console.log(players)
});
console.log(position);



   
   


  




  
   

  
  
  
 








