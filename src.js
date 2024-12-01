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
let result = document.getElementsByClassName("text");
console.log(result);
console.log(result);

console.log(rating);
// let kicking=document.getElementById('kicking');
// console.log(kicking);
// let  speed=document.getElementById('speed');
// console.log(speed);
// let  handling=document.getElementById('handling');
// let positioning=document.getElementById('positioning');
// console.log(positioning);
// let reflexes=document.getElementById('reflexes');
// console.log(reflexes);

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
  let positionvalue = position.value;
  if (positionvalue == "GK") {
    container.innerHTML = `
      
      <label for=""> diving</label>
          <input type="number" id=""diving"required>
          <div class="text"></div>
       
          <label for=""> passing</label>
  
          <input type="number" id="passing"required> 
          <div class="text"></div>
          
        
         
          <label for="">physical</label>
          <input type="number" id="physical"  required>
          <div class="text"></div>
      
      
      `;
  } else {
    container.innerHTML = `<label for=""> pace</label>
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
    <div class="text"></div>`;
  }
});
//   validation les champs

nationality.addEventListener("input", valide_nationality);
function valide_nationality() {
  if (
    typeof nationality.value === "string" &&
    nationality.value.trim() !== "" &&
    /^[A-Za-z\s]+$/.test(nationality.value)
  ) {
    result[2].innerHTML = "correct";
  } else result[2].innerHTML = "invalid";
}
pace.addEventListener("input", valide_pace);
function valide_pace() {
  if (
    pace.value != "" &&
    !isNaN(pace.value) &&
    rating.value >= 0 &&
    pace.value <= 100
  ) {
    result[5].innerHTML = "valide";
    console.log("correct");
  } else {
    result[5].innerHTML = "invalid";
  }
}

pace.addEventListener("input", valide_pace);
function valide_pace() {
  if (
    pace.value != "" &&
    !isNaN(pace.value) &&
    pace.value >= 0 &&
    pace.value <= 100
  ) {
    result[4].innerHTML = "valide";
    console.log("correct");
  } else {
    result[4].innerHTML = "invalid";
    console.log("incorrect");
  }
}
shooting.addEventListener("input", valide_shooting);
function valide_shooting() {
  if (
    shooting.value != "" &&
    !isNaN(shooting.value) &&
    shooting.value >= 0 &&
    shooting.value <= 100
  ) {
    result[5].innerHTML = "valide";
    console.log("correct");
  } else {
    result[5].innerHTML = "invalid";
  }
}

defending.addEventListener("input", valide_defending);
function valide_defending() {
  if (
    defending.value != "" &&
    !isNaN(defending.value) &&
    defending.value >= 0 &&
    defending.value <= 100
  ) {
    result[9].innerHTML = "valide";
    console.log("correct");
  } else {
    // result[9].innerHTML="invalid";

    console.log("incorrect");
  }
}
physical.addEventListener("input", valide_physical);
function valide_physical() {
  if (
    physical.value != "" &&
    !isNaN(physical.value) &&
    defending.value >= 0 &&
    physical.value <= 100
  ) {
    result[10].innerHTML = "nice";
    console.log("correct");
  } else {
    // result[10].innerHTML="invalid";

    console.log("incorrect");
  }
}
console.log(result[10]);
dribbling.addEventListener("input", valide_dribbling);
function valide_dribbling() {
  if (
    dribbling.value != "" &&
    !isNaN(dribbling.value) &&
    dribbling.value >= 0 &&
    dribbling.value <= 100
  ) {
    result[8].innerHTML = "valide";
    console.log("correct");
  } else {
    result[8].innerHTML = "invalid";

    console.log("incorrect");
  }
}
passing.addEventListener("input", valide_passing);
function valide_passing() {
  if (
    passing.value != "" &&
    !isNaN(passing.value) &&
    passing.value >= 0 &&
    passing.value <= 100
  ) {
    result[6].innerHTML = "valide";
    console.log("correct");
  } else {
    result[6].innerHTML = "invalid";

    // console.log("incorrect");
  }
}
club.addEventListener("input", valide_club);
function valide_club() {
  if (
    typeof nationality.value === "string" &&
    nationality.value.trim() !== "" &&
    /^[A-Za-z\s]+$/.test(nationality.value)
  ) {
    result[3].innerHTML = "valide";
    console.log("correct");
  } else {
    result[3].innerHTML = "invalid";

    // console.log("incorrect");
  }
}
nom.addEventListener("input", validation);

nom.addEventListener("input", validation);

function validation() {
  if (
    typeof nom.value === "string" &&
    nom.value.trim() !== "" &&
    /^[A-Za-z\s]+$/.test(nom.value)
  ) {
    console.log("correct");

    result[0].innerHTML = "coorrect";
  } else {
    // Si la valeur est vide, retourner false
    console.log("Le champ est vide !");

    result[0].innerHTML = "incorrect";
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
    result[1].innerHTML = "coorrect";
  } else {
    console.log("ncorrect");
    result[1].innerHTML = "incorrect";
  }
}
rating.addEventListener("input", valide_rating);
function valide_rating() {
  if (
    rating.value != "" &&
    !isNaN(rating.value) &&
    rating.value >= 1 &&
    rating.value <= 100
  ) {
    console.log("correct");
    result[4].innerHTML = "valide";
  } else {
    console.log("incorrect");
    result[4].innerHTML = "invalide";
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

  let obj = {
    rating: rating.value,
    nom: nom.value,
    //  handling :handling.value,
    dribbling: dribbling.value,
    defending: defending.value,
    shooting: shooting.value,
    passing: passing.value,
    physical: physical.value,
    position: position.value,
    nationality: nationality.value,
    club: club.value,
    pace: pace.value,
  }
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
  
 


  if (position.value === "GK") { 
    // let filteredGK = players.filter((player) =>player.position === "GK");
    // let  filteredGK_GK= filteredPlayers(players,"GK");
    console.log(filteredGK_GK)
   if (filteredGK_GK.length === 0){ card[0].outerHTML = ` <div  class="player-card goalkeeper">
    <div class="player-rating">${obj.rating}</div>
    <div class="player-position" data-position="GK">${obj.position}</div>
    <div class="player-photo">
        <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
    </div>
    <div class="player-name">${obj .nom}</div>


          <div class="statistique">
        <div class="stat"><span>86</span> PAC</div>
        <div class="stat"><span>${obj.shooting}</span> SHO</div>
        <div class="stat"><span>${obj.passing}</span> PAS</div>
        <div class="stat"><span>${obj.dribbling}</span> DRI</div>
        <div class="stat"><span>${obj.defending}</span> DEF</div>
        <div class="stat"><span>${obj.physical}</span> PHY</div>
    </div>
</div>`;
}
 else {
  cartat.outerHTML = ` <div  class="player-card goalkeeper">
    <div class="player-rating">${obj.rating}</div>
    <div class="player-position" data-position="GK">${obj.position}</div>
    <div class="player-photo">
        <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
    </div>
    <div class="player-name">${obj .nom}</div>


          <div class="statistique">
        <div class="stat"><span>86</span> PAC</div>
        <div class="stat"><span>${obj.shooting}</span> SHO</div>
        <div class="stat"><span>${obj.passing}</span> PAS</div>
        <div class="stat"><span>${obj.dribbling}</span> DRI</div>
        <div class="stat"><span>${obj.defending}</span> DEF</div>
        <div class="stat"><span>${obj.physical}</span> PHY</div>
    </div>
</div>`;

  
 }

 
     
  } else if (position.value === "LW") {
    // let  filteredGK_LW= filteredPlayers(players,"LW");
    console.log(filteredGK_LW);
    if(filteredGK_LW.length===0){card[8].outerHTML = `
        <div  id="leftyo"class="player-card left-wing">
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="LW">${obj.position} </div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>86</span> PAC</div>
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
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="LW">${obj.position} </div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>86</span> PAC</div>
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
       <div class="player-rating">${obj.rating}</div>
       <div class="player-position" data-position="LW">${obj.position} </div>
       <div class="player-photo">
           <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
       </div>
       <div class="player-name">${obj.nom}</div>
       <div class="statistique">
           <div class="stat"><span>86</span> PAC</div>
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
          <div class="player-rating">${obj.rating}</div>
          <div class="player-position" data-position="LW">${obj.position} </div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>86</span> PAC</div>
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
          <div class="player-rating">85</div>
          <div class="player-position" data-position="LB">${obj.position}</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span >86</span> PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;}
        else {
          cartat.outerHTML = `<div class="player-card left-back">
          <div class="player-rating">85</div>
          <div class="player-position" data-position="LB">${obj.position}</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span >86</span> PAC</div>
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
          <div class="player-rating">85</div>
          <div class="player-position" data-position="LB">${obj.position}</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
          </div>
          <div class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span >86</span> PAC</div>
              <div class="stat"><span>${obj.shooting}</span> SHO</div>
              <div class="stat"><span>${obj.passing}</span> PAS</div>
              <div class="stat"><span>${obj.dribbling}</span> DRI</div>
              <div class="stat"><span>${obj.defending}</span> DEF</div>
              <div class="stat"><span>${obj.physical}</span> PHY</div>
          </div>
        </div>`;

    }
    else{
      cartat.outerHTML = `<div class="player-card right-back">
      <div class="player-rating">85</div>
      <div class="player-position" data-position="LB">${obj.position}</div>
      <div class="player-photo">
          <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
      </div>
      <div class="player-name">${obj.nom}</div>
      <div class="statistique">
          <div class="stat"><span >86</span> PAC</div>
          <div class="stat"><span>${obj.shooting}</span> SHO</div>
          <div class="stat"><span>${obj.passing}</span> PAS</div>
          <div class="stat"><span>${obj.dribbling}</span> DRI</div>
          <div class="stat"><span>${obj.defending}</span> DEF</div>
          <div class="stat"><span>${obj.physical}</span> PHY</div>
      </div>
    </div>`;
    }
   
  } else if (position.value === "LCM") {
    // let filteredGK_LCM=filteredPlayers(players,"LCM");
    console.log(filteredGK_LCM);
    console.log(card[6]);
    if(filteredGK_LCM.length===0){
      card[5].outerHTML = `<div class="player-card enter-mid1">
      <div class="player-rating">85</div>
      <div class="player-position">cmm</div>
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
    </div>`;

    }
    else{cartat.outerHTML = `<div class="player-card enter-mid1">
          <div class="player-rating">85</div>
          <div class="player-position">cmm</div>
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
        </div>`;}
    
  } else if (position.value === "RCM") {
    // let filteredGK_RCM=filteredPlayers(players,"RCM");
    console.log(filteredGK_RCM);
    if(filteredGK_RCM.length===0){
        card[7].outerHTML = ` <div class="player-card enter-mid3">
          <div class="player-rating">85</div>
          <div class="player-position">CRM</div>
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
        </div>`;
    }
    else {  cartat.outerHTML = ` <div class="player-card enter-mid3">
      <div class="player-rating">85</div>
      <div class="player-position">CRM</div>
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
    </div>`;}
  
  } else if (position.value === "LCB") {
    // let  filteredGK_LCB=filteredPlayers(players,"LCB");
    console.log(filteredGK_LCB);
    if(filteredGK_LCB.length===0){
      card[1].outerHTML = `
        <div class="player-card center-back1">
          <div class="player-rating">85</div>
          <div class="player-position">CBl</div>
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
         
        </div>  `;

    }
    else{ cartat.outerHTML = `
        <div class="player-card center-back1">
          <div class="player-rating">85</div>
          <div class="player-position">CBl</div>
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
         
        </div>  `;}
   
  } else if (position.value === "RCB") {
    // let filteredGK_RCB=filteredPlayers(players,"RCB");
    console.log(filteredGK_RCB);
    if(filteredGK_RCB.length===0){ 
    card[2].outerHTML = `<div class="player-card center-back2">
        <div class="player-rating">85</div>
        <div class="player-position">ST</div>
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
      </div>`;}
      else{
        cartat.outerHTML = `<div class="player-card center-back2">
        <div class="player-rating">85</div>
        <div class="player-position">ST</div>
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
      </div>`;

      }
   
  } else if (position.value === "CCM") {
    // let filteredGK_CCM=filteredPlayers(players,"CCM");
    console.log(filteredGK_CCM);

    if(filteredGK_CCM.length===0){card[6].outerHTML = `<div class="player-card enter-mid2">
          <div class="player-rating">85</div>
          <div class="player-position">ST</div>
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
        </div>`;

      
    }
    else{
      cartat.outerHTML = `<div class="player-card ">
          <div class="player-rating">85</div>
          <div class="player-position">ST</div>
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
        </div>`;

    }
    
  } else if (position.value === "ST") {
    // let filteredGK_ST=filteredPlayers(players,"ST");
    console.log(filteredGK_ST);

    if(filteredGK_ST.length===0){ card[10].outerHTML = ` <div  id="STr" class="player-card striker">
          <div class="player-rating">7</div>
          <div class="player-position" data-position="ST"> nice</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>86</span></div>
              <div class="stat"><span>82</span> SHO</div>
              <div class="stat"><span>75</span> PAS</div>
              <div class="stat"><span>84</span> DRI</div>
              <div class="stat"><span>34</span> DEF</div>
              <div class="stat"><span>76</span> PHY</div>
          </div>
        </div>`;

    }
    else{
     cartat.outerHTML = ` <div  id="STr" class="player-card striker">
          <div class="player-rating">7</div>
          <div class="player-position" data-position="ST"> nice</div>
          <div class="player-photo">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Player Name">
          </div>
          <div  class="player-name">${obj.nom}</div>
          <div class="statistique">
              <div class="stat"><span>86</span></div>
              <div class="stat"><span>82</span> SHO</div>
              <div class="stat"><span>75</span> PAS</div>
              <div class="stat"><span>84</span> DRI</div>
              <div class="stat"><span>34</span> DEF</div>
              <div class="stat"><span>76</span> PHY</div>
          </div>
        </div>`;

    }
   
  }
  console.log("a9yi danita ",card[10])

players.push(obj);
console.log( 'players',players);

let stadium = document.querySelector('.stadium');
console.log(stadium);


stadium.querySelectorAll(".player-card").forEach(element => {
  element.addEventListener("click", () => {
    // Réinitialiser le fond de toutes les cartes
    stadium.querySelectorAll(".player-card").forEach(i => {
      i.style.scale = 1; 
     
    });
    
    element.style.scale=1.1;
    
    
  });
 


})
// changements.querySelectorAll(".player-card").forEach(element => {
//   element.addEventListener("click", () => {
//     // Réinitialiser le fond de toutes les cartes
  
    
//     element.style.scale=1.2;
    
    
//   });
 


// })

console.log(filteredGK_GK);
 console.log( "first",filteredGK_GK[0]);




 
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

// Boucle pour ajouter uniquement les éléments définis
arraysToCheck.forEach(arr => {
  if (arr[0]) {
    status.push(arr[0]);
  }
});

console.log(status);  // Tableau status avec seulement les éléments définis





console.log(status);  


// Définir les tableaux de cartes
// let stadiums = [];
// let chanagemenplayer = [];

// // Sélectionner les cartes du stadium et des changements


// // Remplir les tableaux avec les cartes
// stadium.querySelectorAll(".play-card").forEach(card => {
//   stadiums.push(card);
// });
// changements.querySelectorAll(".player-card").forEach(card => {
//   chanagemenplayer.push(card);
// });

// // Fonction pour échanger les cartes
// function exchangeCards() {
//   // Parcours des cartes du stadium
//   stadium.querySelectorAll(".play-card").forEach(stadiumCard => {
//     stadiumCard.addEventListener("click", () => {
//       // Lorsque le stadium card est cliqué, on parcourt les cartes de changements
//       chanagemenplayer.forEach((changeCard, index) => {
//         changeCard.addEventListener("click", () => {
//           // Sauvegarder les contenus des deux cartes
//           let stadiumCardContent = stadiumCard.innerHTML;
//           let changeCardContent = changeCard.innerHTML;

//           // Échanger les contenus
//           stadiumCard.innerHTML = changeCardContent;
//           changeCard.innerHTML = stadiumCardContent;

//           // Ajouter une classe pour marquer les cartes échangées
        

//           // Retirer la carte utilisée de chanagemenplayer
//           chanagemenplayer.splice(index, 1);
//         });
//       });
//     });
//   });
// }

// // Appeler la fonction d'échange de cartes
// exchangeCards();
// Sélectionner toutes les cartes dans le stadium et les changements
// const stadiumCards = stadium.querySelectorAll(".player-card");
// const changementCards = changements.querySelectorAll(".player-card");

// // Ajout des événements de mise à l'échelle lors du clic sur une carte du stadium
// stadiumCards.forEach(element => {
//   element.addEventListener("click", () => {
//     // Réinitialiser l'échelle de toutes les cartes du stadium
//     stadiumCards.forEach(card => {
//       card.style.transform = "scale(1)";
//     });

//     // Mettre à l'échelle la carte cliquée
//     element.style.transform = "scale(1.1)";
//   });
// });

// // Ajout des événements de mise à l'échelle lors du clic sur une carte de changements
// changementCards.forEach(element => {
//   element.addEventListener("click", () => {
//     // Réinitialiser l'échelle de toutes les cartes de changements
//     changementCards.forEach(card => {
//       card.style.transform = "scale(1)";
//     });

//     // Mettre à l'échelle la carte cliquée
//     element.style.transform = "scale(1.2)";
//   });
// });

// // Fonction pour échanger le contenu des cartes entre stadium et changements
// function exchangeCards() {
//   stadiumCards.forEach(stadiumCard => {
//     stadiumCard.addEventListener("click", () => {
//       // Ajouter un écouteur de clic sur toutes les cartes de changements
//       changementCards.forEach(changeCard => {
//         changeCard.addEventListener("click", () => {
//           // Sauvegarder le contenu des deux cartes
//           let stadiumCardContent = stadiumCard.innerHTML;
       

//           // Échanger les contenus des cartes
//           stadiumCard.innerHTML = changeCardContent;
//           changeCard.innerHTML = stadiumCardContent;

//           // Retirer la carte utilisée de la section des changements
         
//         });
//       });
//     });
//   });
// }

// // Appel de la fonction pour échanger les cartes
// exchangeCards();
// Sélectionner toutes les cartes dans le stadium et les changements
const stadiumCards = stadium.querySelectorAll(".player-card");
const changementCards = changements.querySelectorAll(".player-card");

// Variable pour suivre la carte sélectionnée dans le stadium
let selectedStadiumCard = null;

// Ajouter l'événement de clic sur chaque carte du stadium
stadiumCards.forEach(element => {
  element.addEventListener("click", () => {
    // Réinitialiser l'échelle de toutes les cartes du stadium
    stadiumCards.forEach(card => {
      card.style.transform = "scale(1)";
    });

    // Mettre à l'échelle la carte cliquée
    element.style.transform = "scale(1.1)";

    // Sélectionner la carte du stadium cliquée
    selectedStadiumCard = element;
  });
});

// Ajouter l'événement de clic sur chaque carte de changements
changementCards.forEach(element => {
  element.addEventListener("click", () => {
    // Vérifier si une carte du stadium a été sélectionnée
    if (selectedStadiumCard !== null) {
      // Réinitialiser l'échelle de toutes les cartes de changements
      changementCards.forEach(card => {
        card.style.transform = "scale(1)";
      });

      // Mettre à l'échelle la carte cliquée dans les changements
      element.style.transform = "scale(1.2)";

      // Sauvegarder le contenu des cartes
      let stadiumCardContent = selectedStadiumCard.innerHTML;
      let changeCardContent = element.innerHTML;

      // Échanger les contenus entre la carte du stadium et la carte des changements
      selectedStadiumCard.innerHTML = changeCardContent;
      element.innerHTML = stadiumCardContent;

      // Réinitialiser la sélection de la carte du stadium après l'échange
      selectedStadiumCard.style.transform = "scale(1)";
      selectedStadiumCard = null; // Réinitialiser la carte sélectionnée
    }
  });
});









});




























;



//   FUNCTION FILTRAGE LES POSITIONS

function filteredPlayers(players,post){
  return players.filter(player => player.position === post);


  
}
// create.addEventListener("click", function(event) {
//   event.preventDefault();

//   let obj = {
//     rating: rating.value,
//     nom: nom.value,
//     dribbling: dribbling.value,
//     defending: defending.value,
//     shooting: shooting.value,
//     passing: passing.value,
//     physical: physical.value,
//     position: position.value,
//     nationality: nationality.value,
//     club: club.value,
//     pace: pace.value,
//   }

//   console.log(position.value);

//   // Créer une fonction générique pour ajouter une carte de joueur
//   function addPlayerCard(position) {
//     let cartat = document.createElement('div');
//     let changements = document.getElementById('changements');
//     changements.appendChild(cartat);

//     const playerCard = `
//       <div class="player-card ${position}">
//         <div class="player-rating">${obj.rating}</div>
//         <div class="player-position" data-position="${position}">${obj.position}</div>
//         <div class="player-photo">
//           <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="${obj.nom}">
//         </div>
//         <div class="player-name">${obj.nom}</div>
//         <div class="statistique">
//           <div class="stat"><span>${obj.pace}</span> PAC</div>
//           <div class="stat"><span>${obj.shooting}</span> SHO</div>
//           <div class="stat"><span>${obj.passing}</span> PAS</div>
//           <div class="stat"><span>${obj.dribbling}</span> DRI</div>
//           <div class="stat"><span>${obj.defending}</span> DEF</div>
//           <div class="stat"><span>${obj.physical}</span> PHY</div>
//         </div>
//       </div>
//     `;
    
//     cartat.innerHTML = playerCard;
//   }

//   // Vérification de la position et ajout de la carte appropriée
//   if (position.value === "GK") {
//     let filteredGK = filteredPlayers(players, "GK");
//     if (filteredGK.length === 0) {
//       addPlayerCard("goalkeeper");
//     } else {
//       addPlayerCard("goalkeeper");
//     }
//   } else if (position.value === "LW") {
//     let filteredLW = filteredPlayers(players, "LW");
//     if (filteredLW.length === 0) {
//       addPlayerCard("left-wing");
//     } else {
//       addPlayerCard("left-wing");
//     }
//   } else if (position.value === "RW") {
//     let filteredRW = filteredPlayers(players, "RW");
//     if (filteredRW.length === 0) {
//       addPlayerCard("right-wing");
//     } else {
//       addPlayerCard("right-wing");
//     }
//   } else if (position.value === "LB") {
//     let filteredLB = filteredPlayers(players, "LB");
//     if (filteredLB.length === 0) {
//       addPlayerCard("left-back");
//     } else {
//       addPlayerCard("left-back");
//     }
//   } else if (position.value === "RB") {
//     let filteredRB = filteredPlayers(players, "RB");
//     if (filteredRB.length === 0) {
//       addPlayerCard("right-back");
//     } else {
//       addPlayerCard("right-back");
//     }
//   } else if (position.value === "LCM") {
//     let filteredLCM = filteredPlayers(players, "LCM");
//     if (filteredLCM.length === 0) {
//       addPlayerCard("center-mid1");
//     } else {
//       addPlayerCard("center-mid1");
//     }
//   } else if (position.value === "RCM") {
//     let filteredRCM = filteredPlayers(players, "RCM");
//     if (filteredRCM.length === 0) {
//       addPlayerCard("center-mid3");
//     } else {
//       addPlayerCard("center-mid3");
//     }
//   } else if (position.value === "LCB") {
//     let filteredLCB = filteredPlayers(players, "LCB");
//     if (filteredLCB.length === 0) {
//       addPlayerCard("center-back1");
//     } else {
//       addPlayerCard("center-back1");
//     }
//   } else if (position.value === "RCB") {
//     let filteredRCB = filteredPlayers(players, "RCB");
//     if (filteredRCB.length === 0) {
//       addPlayerCard("center-back2");
//     } else {
//       addPlayerCard("center-back2");
//     }
//   } else if (position.value === "CCM") {
//     let filteredCCM = filteredPlayers(players, "CCM");
//     if (filteredCCM.length === 0) {
//       addPlayerCard("center-mid2");
//     } else {
//       addPlayerCard("center-mid2");
//     }
//   }
// });




