
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

//  <form>
//   <select id="answer">
//     <option value="">chosse your inswer <option/>
    
//     <option value="yes"> yes
//       <option/>
//     <option value="non"> non
//       <option/>
//   </select>
  
// </form>
//  let answer= document.getElementById('answer');
//  let h = document.createElement('h1');
// document.body.appendChild(h);
// answer.addEventListener('change', () => {
//     let answervalue = answer.value;
//     // console.log(answervalue)
//   if(answervalue === "yes"){
//     console.log("eebebe")
//     h.innerHTML = "correct";
//     h.style.color="green";
//   }
//   else if(answervalue === 'non'){
//     h.innerhtml="incorrect";
//     h.style.color="red"
//   }
//   else{
//     h.innerHTML="rien dire";
//     h.style.color="orange;" 
//   }
// })
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
console.log(position);


  // Initialiser isvalid à false, car on vérifie si le champ est rempli




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

 


  






























nationality.addEventListener('input',valide_nationality);
function valide_nationality(){
  if(typeof(nationality.value)  === "string" && nationality.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nationality.value)){
    result[2].innerHTML="correct"
  }
  else(result[2].innerHTML="invalid")
}
 pace.addEventListener('input',valide_pace);
function valide_pace() {
  if(pace.value != "" && !isNaN(pace.value) && rating.value >= 0 && pace.value <= 100){
    result[5].innerHTML="valide";
    console.log("correct")

  }
  else{
    result[5].innerHTML="invalid";
   
  }
 }

 pace.addEventListener('input',valide_pace);
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
 shooting.addEventListener('input',valide_shooting);
 function valide_shooting() {
   if(shooting.value != "" && !isNaN(shooting.value) && shooting.value >= 0 && shooting.value <= 100){
     result[6].innerHTML="valide";
     console.log("correct")
 
   }
   else{
     result[6].innerHTML="invalid";
     
   }
  }
  
  defending.addEventListener('input',valide_defending);
  function valide_defending() {
    if(defending.value != "" && !isNaN(defending.value) && defending.value >= 0 && defending.value <= 100){
      result[9].innerHTML="valide";
      console.log("correct")
   
     }
     else{
      // result[9].innerHTML="invalid";
     
       console.log("incorrect");
     }
   }
   physical.addEventListener('input',valide_physical);
  function valide_physical() {
    if(physical.value != "" && !isNaN(physical.value) && defending.value >= 0 && physical.value <= 100){
      result[10].innerHTML="valide";
      console.log("correct")
   
     }
     else{
      result[10].innerHTML="invalid";
     
       console.log("incorrect");
     }
   }
   dribbling.addEventListener('input',valide_dribbling);
   function valide_dribbling() {
     if(dribbling.value != "" && !isNaN(dribbling.value) && dribbling.value >= 0 && dribbling.value <= 100){
       result[8].innerHTML="valide";
       console.log("correct")
    
      }
      else{
       result[8].innerHTML="invalid";
      
        console.log("incorrect");
      }
    }
    passing.addEventListener('input',valide_passing);
 function valide_passing() {
   if(passing.value != "" && !isNaN(passing.value) && passing.value >= 0 && passing.value <= 100){
    result[7].innerHTML="valide";
    console.log("correct")
 
   }
   else{
    result[7].innerHTML="invalid";
   
     // console.log("incorrect");
   }
  }
  club.addEventListener('input',valide_club);
  function valide_club() {
    if(typeof(nationality.value)  === "string" && nationality.value.trim() !== ""&& /^[A-Za-z\s]+$/.test(nationality.value))
   {
     result[3].innerHTML="valide";
     console.log("correct")
  
    }
    else{
     result[3].innerHTML="invalid";
    
      // console.log("incorrect");
    }
   }
  
  //  ajoutation player :
  create.addEventListener('click',add_players); 
  let players=[

  ];

   newPlayer = {
     nom:nom,
      position: position,
      nationality: nationality,
      club: club,
      rating: parseInt(rating),
      pace: parseInt(pace),
      shooting: parseInt(shooting),
      passing: parseInt(passing),
      dribbling: parseInt(dribbling),
      defending: parseInt(defending),
      physical: parseInt(physical)
  };
  
  players.push( newPlayer);
  create.addEventListener('click',add_players); 


  function add_players(){

alert("hello meriem");


}



  
   

  
  
  
 








