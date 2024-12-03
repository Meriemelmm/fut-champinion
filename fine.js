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
      
    } else if (position.value === "RB") {
      // let filteredGK_RB=filteredPlayers(players,"RB");
      console.log(filteredGK_RB);
      if(filteredGK_RB===0){ card[4].innerHTML= `<div class="player-card right-back">
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
     
    }})

