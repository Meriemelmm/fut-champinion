//  les champs de input
let nationality = document.getElementById("nationality");
console.log(nationality);
let club = document.getElementById("club");
console.log(club);
let rating = document.getElementById("rating");
console.log(rating);
let pace = document.getElementById("pace");
console.log(pace);
let shooting = document.getElementById("shooting");
console.log(shooting);
let passing = document.getElementById("passing");
console.log(passing);
let dribbling = document.getElementById("dribbling");
console.log(dribbling);
let defending = document.getElementById("defending");
console.log(defending);
let physical = document.getElementById("physical");
console.log(physical);
let supprimer=document.querySelectorAll('.supprimer');
console.log(supprimer)
// let result = document.getElementsByClassName("text");

flag=document.getElementById('flag');
console.log(flag);
photo=document.getElementById('photo');
console.log(photo);
logo=document.getElementById('logo')

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
let diving=document.getElementById('diving');
console.log(diving)

// formation switch

let forma = document.getElementById("forma");
console.log(forma);

let create = document.getElementById("create");
let nom = document.getElementById("nom");
console.log(nom);
let position = document.getElementById("position");
let container = document.getElementById("container");
console.log(container);
let formation_select = document.getElementById("formation-select");
console.log(formation_select);
formation_select.addEventListener("change", () => {
  let formulevalue = formation_select.value;

  if (formulevalue === "433") {
    alert("cool");
  } else if (formulevalue === "432") {
    alert("niceeeee");
  }
});
//
let positionvalue = position.value;
console.log(positionvalue);
// switch  position et gk
position.addEventListener("change", (event) => {
  container.style.display="block";
  let positionvalue = position.value;
  if (positionvalue == "GK") {
    console.log("Gardien de but sélectionné");
   
    container.innerHTML = ` <label for="">diving</label>
          <input type="number" id="diving"  required>
          <div class="text"></div></div>
          <label for="">handling</label>
          <input type="number" id="handling"  required>
          <div class="text"></div></div>
          <label for="">kicking</label>
          <input type="number" id="kicking"  required>
          <div class="text"></div></div>
          <label for="">speed</label>
          <input type="number" id="speed"  required>
          <div class="text"></div></div>
          <label for="">reflexes</label>
          <input type="number" id="reflexes"  required>
          <div class="text"></div></div>
           <label for="">positioning</label>
           <input type="number" id="positioning"  required>
          <div class="text"></div>
      
      
      
      
      
      `;
  } else {
    console.log("Autre position sélectionnée");
    container.innerHTML = ` <label for=""> pace</label>
          <input type="number" id="pace" required>
          <div class="text"></div>
          <label for=""> shootting</label>
          <input type="number" id="shooting" required>
          <div class="text"></div>
          <label for="">passing</label>
  
          <input type="number" id="passing" required> 
          <div class="text"></div>
          
          <label for="">dribbling</label>
          <input type="number" id="dribbling" required>
          <div class="text"></div>
          <label for="">defending</label>
          <input type="nomber" id="defending"  required>
          <label for="physical">Physical</label>
          <input type="number" id="physical" name="physical" required>
          <div class="text"></div>`;
  }
});
//   validation les champs


nationality.addEventListener("input", valide_nationality);
function valide_nationality() {
  if (
    typeof( nationality).value === "string" &&
    nationality.value.trim() !== "" &&
    /^[A-Za-z\s]+$/.test(nationality.value)
  ) {
  //  result[2].textContent="correct"
    console.log("correct")
  } else {
    // result[2].textContent = "invalid";

    console.log("incorrect");
  }
}
pace.addEventListener("input", valide_pace);
function valide_pace() {
  if (
    pace.value != "" &&
    !isNaN(pace.value) &&
    rating.value >= 0 &&
    pace.value <= 100
  ) {
    // result[5].innerHTML = "valide";
    console.log("correct");
  } else {
    // result[5].innerHTML = "invalid";
  }
}

nom.addEventListener("input", name_validation);

function name_validation() {
  if (
    typeof nom.value === "string" &&
    nom.value.trim() !== "" &&
    /^[A-Za-z\s]+$/.test(nom.value)
  ) {
    console.log("correct");

    // result[0].innerHTML = "coorrect";
  } else {
    // Si la valeur est vide, retourner false
    console.log("Le champ est vide !");

    // result[0].innerHTML = "incorrect";
  }
}
function valide_club() {
  // Vérifier si la valeur du champ "club" est une chaîne valide
  if (
    typeof club.value === "string" &&
    club.value.trim() !== "" &&  // S'assurer que le champ n'est pas vide
    /^[A-Za-z\s]+$/.test(club.value)  // Expression régulière pour valider les lettres et les espaces
  ) {
  //  result[3].innerHTML = "Valide";  
   console.log("corect")// Afficher "Valide" dans la zone de résultat
    // Mettre le texte en vert
  } else {
    // result[3].innerHTML = "Invalide";  // Afficher "Invalide" dans la zone de résultat
     // Mettre le texte en rouge
  }
}
const validPositions = [
  "ST",
  "GK",
  "CB",
  "LB",
  "RB",
  "CM",
  "LM",
  "RM",
  "LW",
  "RW",
  "CLM",
  "CCM",
  "RCM",
  "RCB",
  "LCB",
];
position.addEventListener("input", valide_positon);

console.log();
function valide_positon() {
  let positionne = position.value.trim();
  if (validPositions.includes(positionne)) {
    console.log("correct");
    // result[1].innerHTML = "coorrect";
  } else {
    console.log("ncorrect");
    // result[1].innerHTML = "incorrect";
  }
}

name_playeer = document.getElementsByClassName("name_player");
// localStorage.setItem()
console.log(name_playeer);
//  tableau pour stocker
let players = [];
console.log(position.value);

card = document.getElementsByClassName("player-card ");
//   let stadium=document.querySelector(".stadium")
// console.log(stadium);
console.log(card[0]);

//  ajoutaer players
create.addEventListener("click", function (event) {
  event.preventDefault();
  let  filteredGK_RW=filteredPlayers(players,"RW");
  let  filteredGK_GK= filteredPlayers(players,"GK");
  let  filteredGK_LW= filteredPlayers(players,"LW");


 



// shooting = document.getElementById("shooting").value;
 
//    passing = document.getElementById("passing").value;
//   console.log(passing);
//    dribbling = document.getElementById("dribbling").value;
// //   console.log(dribbling);
//   defending = document.getElementById("defending").value;
// //   console.log(defending);
//    physical = document.getElementById("physical").value;
//    pace=document.getElementById('pace').value;

  
  //  let obj = {
  //   rating: rating.value,
  //   nom: nom.value,
  //   dribbling: dribbling,
  //   defending: defending,
  //   shooting: shooting,
  //   passing: passing,
  //   physical: physical,
  //   position: position.value,
  //   nationality: nationality.value,
  //   club: club.value,
  //   pace: pace,
  //   photo: photo.value,
  //   flag: flag.value,
  //   // diving: diving,
  //   //  positioning:positioning,
  //   // kicking: kicking,
  //   // speed: speed,
  //   // reflexes: reflexes,
  //   // handling: handling
  // };


// }
console.log("shooo",shooting);

 

 
  
   


  
  console.log(position.value);
  let card = document.getElementsByClassName("player-card ");
  console.log(card);
   let cartat=document.createElement('div');
  let changements=document.getElementById('changements');
  console.log( changements);
  changements.appendChild(cartat);
 
  let stadiumplayers = [];
  let filteredGK_LB=filteredPlayers(players,"LB");
  let filteredGK_RB=filteredPlayers(players,"RB");
  let filteredGK_LCM=filteredPlayers(players,"LCM");
  let filteredGK_RCM=filteredPlayers(players,"RCM");
  let  filteredGK_LCB=filteredPlayers(players,"LCB");
  let filteredGK_RCB=filteredPlayers(players,"RCB");
  let filteredGK_CCM=filteredPlayers(players,"CCM");
  let filteredGK_ST=filteredPlayers(players,"ST");
  
  let obj = {
    rating: rating.value,
    nom: nom.value,
    // dribbling: dribbling,
    // defending: defending,
    // shooting: shooting,
    // passing: passing,
    // physical: physical,
    // pace: pace,
    position: position.value,
    nationality: nationality.value,
    club: club.value,
    photo: photo.value,
    flag: flag.value,
  };

  // Ajout des statistiques spécifiques si le joueur est un gardien de but
  if (position.value === "GK") {
   diving = document.getElementById("diving").value;
    kicking = document.getElementById("kicking").value;
     reflexes = document.getElementById("reflexes").value;
     handling = document.getElementById("handling").value;
     positioning = document.getElementById("positioning").value;
     speed=document.getElementById("speed").value;
    

    // Ajout des statistiques du gardien de but dans l'objet
    obj.diving = diving;
    obj.kicking = kicking;
    obj.reflexes = reflexes;
    obj.handling = handling;
    obj.positioning = positioning;
    obj.speed=speed;
  }
  else
  {
    shooting = document.getElementById("shooting").value;
 
   passing = document.getElementById("passing").value;
  console.log(passing);
   dribbling = document.getElementById("dribbling").value;
//   console.log(dribbling);
  defending = document.getElementById("defending").value;
//   console.log(defending);
   physical = document.getElementById("physical").value;
   pace=document.getElementById('pace').value;
  
     
 
     // Ajout des statistiques du gardien de but dans l'objet
     obj.shooting =shooting;
     obj.passing =passing ;
     obj.dribbling = dribbling;
     obj. defending =  defending;
     obj. physical =  physical;
     obj. pace= pace;
   }


  if (position.value === "GK") { 
    

   if (filteredGK_GK.length === 0){


     card[0].outerHTML = ` <div  class="player-card goalkeeper">
      <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
    <div class="player-rating">${obj.rating}</div>
    <div class="player-position" data-position="GK">${obj.position}</div>
    <div class="player-photo">
        <img src="${obj.photo}" alt="${obj.nom}">
    </div>
    <div class="player-name">${obj.nom}</div>

  <div class="statistique">
              <div class="stat"><span>${obj.diving}</span>DIV</div>
              <div class="stat"><span>${obj.kicking}</span> KI</div>
              <div class="stat"><span>${obj.speed}</span> SP</div>
              <div class="stat"><span>${obj.handling}</span> HAD</div>
              <div class="stat"><span>${obj.reflexes}</span> RF</div>
              <div class="stat"><span>${obj.positioning}</span> POS</div>
          </div>
          
    
</div>`;
}
 else {
 
  cartat.outerHTML = ` <div  class="player-card">
   <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
    <div class="player-rating">${obj.rating}</div>
    <div class="player-position" data-position="GK">${obj.position}</div>
    <div class="player-photo">
        <img src="${obj.photo}" alt="${obj.nom}">
    </div>
    <div class="player-name">${obj.nom}</div>
  <div class="statistique">
              <div class="stat"><span>${obj.diving}</span>DIV</div>
              <div class="stat"><span>${obj.kicking}</span> KI</div>
              <div class="stat"><span>${obj.speed}</span> SP</div>
              <div class="stat"><span>${obj.handling}</span> HAD</div>
              <div class="stat"><span>${obj.reflexes}</span> RF</div>
              <div class="stat"><span>${obj.positioning}</span> POS</div>
          </div>
</div>`;

  
 }}

 
     
   else
    if (position.value === "LW") {
    let  filteredGK_LW= filteredPlayers(players,"LW");
    console.log(filteredGK_LW);
    if(filteredGK_LW.length===0){card[8].outerHTML = `
       
        <div  id="leftyo"class="player-card left-wing">
        <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
         <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;
       

    }
     else {
     cartat.outerHTML = `
      
        <div  id="leftyo"class="player-card ">
        <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
         <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

      

     }
    
  } else if (position.value === "RW") {
    // let  filteredGK_RW=filteredPlayers(players,"RW");
    console.log( filteredGK_RW);

    if( filteredGK_RW.length===0){card[9].outerHTML = `
      <div  id="rwt" class="player-card right-wing">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
        <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
     </div>`;
}
     else{ cartat.outerHTML = `
         <div  id="rwt" class="player-card ">
          <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
           <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

     }
   
  } else if (position.value === "LB") {
    // let filteredGK_LB=filteredPlayers(players,"LB");
    console.log(filteredGK_LB);
    if(filteredGK_LB.length===0){
    card[3].outerHTML = `<div class="player-card left-back">
     <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;}
        else {
          cartat.outerHTML = `<div class="player-card ">
           <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
           <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

        }
  } else if (position.value === "RB") {
    // let filteredGK_RB=filteredPlayers(players,"RB");
    console.log(filteredGK_RB);
    if(filteredGK_RB===0){ card[4].outerHTML = `<div class="player-card right-back">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
           <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

    }
    else{
      cartat.outerHTML = `<div class="player-card ">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
       <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>>
    </div>`;
    }
   
  } else if (position.value === "LCM") {
    // let filteredGK_LCM=filteredPlayers(players,"LCM");
    console.log(filteredGK_LCM);
    console.log(card[6]);
    if(filteredGK_LCM.length===0){
      card[5].outerHTML = `<div class="player-card enter-mid1">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
       <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
    </div>`;

    }
    else{cartat.outerHTML = `<div class="player-card ">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;}
    
  } else if (position.value === "RCM") {
    // let filteredGK_RCM=filteredPlayers(players,"RCM");
    console.log(filteredGK_RCM);
    if(filteredGK_RCM.length===0){
        card[7].outerHTML = ` <div class="player-card enter-mid3">
         <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
       <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;
    }
    else {  cartat.outerHTML = ` <div class="player-card ">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
      <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
    </div>`;}
  
  } else if (position.value === "LCB") {
    // let  filteredGK_LCB=filteredPlayers(players,"LCB");
    console.log(filteredGK_LCB);
    if(filteredGK_LCB.length===0){
      card[1].outerHTML = `
        <div class="player-card center-back1">
         <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
           <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
         
        </div>  `;

    }
    else{ cartat.outerHTML = `
        <div class="player-card ">
         <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
         
        </div>  `;}
   
  } else if (position.value === "RCB") {
    // let filteredGK_RCB=filteredPlayers(players,"RCB");
    console.log(filteredGK_RCB);
    if(filteredGK_RCB.length===0){ 
    card[2].outerHTML = `<div class="player-card center-back2">
     <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
         <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
      </div>`;}
      else{
        cartat.outerHTML = `<div class="player-card ">
         <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
        <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
      </div>`;

      }
   
  } else if (position.value === "CCM") {
    // let filteredGK_CCM=filteredPlayers(players,"CCM");
    console.log(filteredGK_CCM);

    if(filteredGK_CCM.length===0){card[6].outerHTML =`<div class="player-card enter-mid2">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
         <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

      
    }
    else{
      cartat.outerHTML = `<div class="player-card ">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
       <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
          
        </div>`;

    }
    
  } else if (position.value === "ST") {
    // let filteredGK_ST=filteredPlayers(players,"ST");
    console.log(filteredGK_ST);

    if(filteredGK_ST.length===0){ card[10].outerHTML =`<div  id="STr" class="player-card striker">
       <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST"> ${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
         <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

    }
    else{
     cartat.innerHTML =`
     <div  id="STr" class="player-card ">
      <img src="https://cdn-icons-png.flaticon.com/128/51/51468.png" alt=""  class="supprimer"style=" position: absolute;width: 12px;top: 18px;left:43px
          
          ">
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="ST">${obj.position}</div>
          <div class="player-photo">
              <img src="${obj.photo}" alt="${obj.nom}">
          </div>
          <div  class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>${obj.pace}</span>PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>
        `;

    }
   
  }})
  function filteredPlayers(players,post){
    return players.filter(player => player.position === post);
  
  
    
  }