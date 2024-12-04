//  les champs de input
let nationality = document.getElementById("nationality");

let club = document.getElementById("club");

let rating = document.getElementById("rating");

let pace = document.getElementById("pace");

let shooting = document.getElementById("shooting");

let passing = document.getElementById("passing");

let dribbling = document.getElementById("dribbling");

let defending = document.getElementById("defending");

let physical = document.getElementById("physical");

let supprimer=document.querySelectorAll('.supprimer');

let forma = document.getElementById("forma")
function valider(text) {
  if (text.length === 0) {
    return false; 
  }
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!(char >= "A" && char <= "Z") && !(char >= "a" && char <= "z") && !(char === " ")) {
      return false; 
    }
  }
  return true;
}

function validateInput(input) {
  if (!valider(input.value.trim())) {
    input.style.border = '2px solid red'; 
     // Bordure rouge si invalide
    return false;
  } else {
    input.style.border = '2px solid green';  // Bordure verte si valide
    return true;
  }
}


document.querySelectorAll('.input').forEach(input => {

  input.addEventListener('input', () => {

    
      validateInput(input);  
  });

 
});
function valida_number(input) {
  // Vérifie si la valeur est vide, si ce n'est pas un nombre, ou si le nombre est en dehors de la plage [0, 99]
  const value = input.value.trim();
  
  // Validation de la valeur
  if (value === '' || isNaN(value) || value < 0 || value > 99) {
    console.log("incorrect");

    // Bordure rouge si la valeur est incorrecte
    input.style.border = '2px solid red';
    return false;
  } else {
    console.log("correct");  // Message de validation réussie

    // Bordure verte si la valeur est correcte
    input.style.border = '2px solid green';
    return true;
  }
}

rating.addEventListener('input', () => valida_number(rating));
function validatedNumberInput(input) {
  console.log("called!");
  
  const value= input.value;
  if (value === '' || value < 0 ||  value > 99) {
    console.log("--------------incorrect");
    input.style.border = '2px solid red'; 
    return false;
  } else {
    console.log("----------correct");
    input.style.border = '2px solid green';
    return true;
  }
}


flag=document.getElementById('flag');

photo=document.getElementById('photo');

logo=document.getElementById('logo')


let kicking=document.getElementById('kicking');

let  speed=document.getElementById('speed');

let  handling=document.getElementById('handling');
let positioning=document.getElementById('positioning');

let reflexes=document.getElementById('reflexes');

let diving=document.getElementById('diving');


let create = document.getElementById("create");
let nom = document.getElementById("nom");

let position = document.getElementById("position");
let container = document.getElementById("container");

let formation_select = document.getElementById("formation-select");

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

// switch  position et gk
position.addEventListener("change", (event) => {
  container.style.display="block";
  let positionvalue = position.value;
  if (positionvalue == "GK") {
   
   
    container.innerHTML = ` 
    <label for="">diving</label>
          <input type="number" id="diving" class="number" min="0" max="99"  required>
          <div class="text"></div></div>
          <label for="">handling</label>
          <input type="number" id="handling" class="number"  min="0" max="99" required>
          <div class="text"></div></div>
          <label for="">kicking</label>
          <input type="number" id="kicking"  class="number" min="0" max="99" required>
          <div class="text"></div></div>
          <label for="">speed</label>
          <input type="number" id="speed"   class="number"min="0" max="99" equired>
          <div class="text"></div></div>
          <label for="">reflexes</label>
          <input type="number" id="reflexes"   class="number"min="0" max="99" required>
          <div class="text"></div></div>
           <label for="">positioning</label>
           <input type="number" id="positioning"  class="number" min="0" max="99" required>
        <div class="text"></div>
      
      
      
      
      
      `;
  } else {
  
    container.innerHTML = ` <label for=""> pace</label>
          <input type="number" id="pace" class=  "number" min="0" max="99" required>
          <div class="text"></div>
          <label for=""> shootting</label>
          <input type="number" id="shooting" class"number" min="0" max="99"  required>
          <div class="text"></div>
          <label for="">passing</label>
  
          <input type="number" id="passing" class="number" min="0" max="99"  required> 
          <div class="text"></div>
          
          <label for="">dribbling</label>
          <input type="number" id="dribbling"   class="number" required>
          <div class="text"></div>
          <label for="">defending</label>
          <input type="nomber" id="defending"  class="number "min="0" max="99" required>
          <label for="physical">Physical</label>
          <input type="number" id="physical" name="physical"  class="number"required>
          <div class="text"></div>`;
  }
});
//   validation les champs






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
 
  } else {
    console.log("ncorrect");
   
  }
}

name_playeer = document.getElementsByClassName("name_player");


let players = [];


card = document.getElementsByClassName("player-card ");

console.log(card[0]);

//  ajoutaer players


let inputs = document.querySelectorAll('.number');
console.log(inputs)




create.addEventListener("click", function (event) {
  event.preventDefault();

  let  filteredGK_RW = filteredPlayers(players,"RW");
  let  filteredGK_GK = filteredPlayers(players,"GK");
  let  filteredGK_LW = filteredPlayers(players,"LW");
  let numberInputs = document.querySelectorAll('input.number');
  let allValid = true; 

  numberInputs.forEach(input => {
    if (!validatedNumberInput(input)) {
      allValid = false; 
    }
  });

 
  if (allValid ) {
    console.log("All inputs are valid!");

  }





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
DeletePlayer()
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
        DeletePlayer()
       

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
     DeletePlayer()
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
        </div>`;
        DeletePlayer()}
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
    if(filteredGK_RB.length===0){ card[4].outerHTML= `<div class="player-card right-back">
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
        DeletePlayer()

    }
    else{ 
      console.log("incorrect")
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
    DeletePlayer()

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
        DeletePlayer()
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
        DeletePlayer()

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
      </div>`;
      DeletePlayer()}
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
        DeletePlayer()

      
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
        DeletePlayer()
        
 

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
   
  }
 

players.push(obj);


let stadium = document.querySelector('.stadium');
// stadium.querySelectorAll(".player-card").forEach(element => {
//   element.addEventListener("click", () => {
//     // Réinitialiser le fond de toutes les cartes
//     stadium.querySelectorAll(".player-card").forEach(i => {
//       i.style.scale = 1; 
//     });   
//     element.style.scale=1.1;
//   });
// })

let status=[
 
]
 


// Créer un tableau de tableaux à vérifier
let arraysToCheck = [
  filteredGK_GK,
  filteredGK_LW,
  filteredGK_RW,
  filteredGK_CCM,
  filteredGK_RCM,
  filteredGK_LCM,
  filteredGK_RCB,
  filteredGK_ST,
  filteredGK_LCB,
  filteredGK_LB,
  filteredGK_RB
]; 
arraysToCheck.forEach(arr => {
  if (arr[0]) {
    status.push(arr[0]);
  }
});

console.log("status",status);  
let stadiums = [];
let chanagemenplayer = [];

stadium.querySelectorAll(".player-card").forEach(card => {
  stadiums.push(card);
});
changements.querySelectorAll(".player-card").forEach(card => {
  chanagemenplayer.push(card);
});
console.log("stadeplayer",stadiums);



const stadiumCards = stadium.querySelectorAll(".player-card");
const changementCards = changements.querySelectorAll(".player-card");

let selectedStadiumCard = null;
let selectedPosition = ""; 


stadiumCards.forEach(element => {
  element.addEventListener("click", () => {
   
    stadiumCards.forEach(card => {
      card.style.transform = "scale(1)";
    });

    
    element.style.transform = "scale(1.1)";

  
    selectedStadiumCard = element;

    let selectedposition=position.value;
  

  });
});

changementCards.forEach(element => {
  element.addEventListener("click", () => {
   
    if (selectedStadiumCard !== null) {
     
      changementCards.forEach(card => {
        card.style.transform = "scale(1)";
      });

  
      element.style.transform = "scale(1.2)";

      
      let stadiumCardContent = selectedStadiumCard.innerHTML;
      let changeCardContent = element.innerHTML;

    
      selectedStadiumCard.innerHTML = changeCardContent;
      element.innerHTML = stadiumCardContent;

     
      selectedStadiumCard.style.transform = "scale(1)";
      selectedStadiumCard = null; 
      DeletePlayer();// Réinitialiser la carte sélectionnée
    }
  });
 





 });
 
  
  changementCards.forEach(element => {
    element.addEventListener("dblclick", () => {
      console.log("Double-clic détecté sur une carte !");
      element.remove(); // Supprime l'élément lorsque l'utilisateur fait un double-clic
      console.log("Carte supprimée.");
    });
  })









 console.log(changements);
 console.log(stadium);
 console.log(players);

 DeletePlayer();


});




function DeletePlayer() {
  supprimer.forEach(function(icon, i) {
    icon.addEventListener('click', function() {
      console.log(icon.parentElement);
      alert("hello");
      console.log("hello");

      // Remove all elements within the player's parent element
      icon.parentElement.querySelectorAll(".player-rating, .player-photo, .player-name, .player-position, span").forEach(element => {
        element.remove();
      });
    });
  });
}


function filteredPlayers(players, post){
  return players.filter(player => player.position === post);
}




let changementCards = changements.querySelectorAll(".player-card");
changementCards.forEach(element => {
  element.addEventListener("dblclick", () => {
    console.log("Double-clic détecté sur une carte !");
    element.remove(); // Supprime l'élément lorsque l'utilisateur fait un double-clic
    console.log("Carte supprimée.");
  });
});


document.addEventListener("DOMContentLoaded",() => {
  DeletePlayer()})


function DeletePlayer() {
  let supprimer = document.querySelectorAll('.supprimer'); 
  supprimer.forEach(function(icon, i) {
    icon.addEventListener('click', function() {
      console.log(icon.parentElement);

      // Remove all elements within the player's parent element
      icon.parentElement.querySelectorAll(".player-rating, .player-photo, .player-name, .player-position, span").forEach(element => {
        element.remove();
      });
    });
  });
}




 console.log(card[4])
 

  