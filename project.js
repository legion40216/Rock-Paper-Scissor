var playerwins=0;
var cpuwins = 0;
var wins =-1;
var counter = document.querySelectorAll(".box2 h1");
var stat = document.querySelector(".status h1");
var cpuChoice_Box = document.querySelector(".computer_select_box");
var player = document.querySelector(".player_select_box")
var wincircles = document.querySelectorAll(".circles")


//selecting scissors rock & paper boxes
var scissors = document.querySelector(".scissors_box");
var rock = document.querySelector(".option_rock");
var paper = document.querySelector(".option_paper");

//cloneing for cpu
let  paperclone_cpu = paper.cloneNode(true);
let  rockclone_cpu = rock.cloneNode(true);
let  scissorsclone_cpu = scissors.cloneNode(true);
//cloneing for player
let  paperclone_player = paper.cloneNode(true);
let  rockclone_player = rock.cloneNode(true);
let scissorsclone_player = scissors.cloneNode(true);


// disabling  onclick funtion on the part2 section of the clones
cpuChoice_Box.classList.add("disable");
player.classList.add("disable");


function startgame(num)
{

 

    //toggle between pick section and result section
    document.querySelector(".master_body").style.display="none";
    document.querySelector(".part2").style.display="flex";


   //cpu choice pick
    var com_choice=Math.floor(Math.random() *3);
      


//appending computer choices
    if(com_choice ==0 )
    {
        cpuChoice_Box.append(paperclone_cpu);
     
       
    }
 else if(com_choice==1){
   
    cpuChoice_Box.append(rockclone_cpu);

    
 }

 else{
    cpuChoice_Box.append(scissorsclone_cpu);
 
 }
    
 
 // appending player choices

 if(num == 1) {
    player.append(rockclone_player);

}
else if (num ==2 ){

    player.append(paperclone_player);
}

else if (num ==3) {
 
 
    player.append(scissorsclone_player);
}





//game logic

//condtion for user taking rock
if(num==1)


{
    
 if( num==1 && com_choice ==1){
    stat.innerHTML = "TIE";
    rockclone_cpu.style.animation="wins 2s infinite";
    rockclone_player.style.animation="wins 2s infinite";

}
 else if( num==1 && com_choice ==2){

   
    stat.innerHTML = "YOU WIN";
      counter[1].innerHTML=playerwins+=1;
      rockclone_player.style.animation="wins 2s infinite";
wins+=1;      
wincircles[wins].style.backgroundColor="green";

}


else if( num==1 && com_choice ==0){

 
    stat.innerHTML = "YOU LOSE";
    counter[1].innerHTML=playerwins-=1;
    paperclone_cpu.style.animation="wins 2s infinite";
    cpuwins+=1;
    wins+=1;      
wincircles[wins].style.backgroundColor="red";

}

}
//condtion for user taking paper
if(num==2)
{

if( num==2 && com_choice ==1){
    paperclone_player.style.animation="wins 2s infinite";
    stat.innerHTML = "YOU WIN";
       counter[1].innerHTML=playerwins+=1;
       console.log("hello");
       wins+=1;      
       wincircles[wins].style.backgroundColor="green";


}
 else if( num==2 && com_choice ==2){

    scissorsclone_cpu.style.animation="wins 2s infinite";
    stat.innerHTML = "YOU LOSE";
    counter[1].innerHTML=playerwins-=1;
    cpuwins+=1;
    wins+=1;      
    wincircles[wins].style.backgroundColor="red";
    
}


else if( num==2 && com_choice ==0){

    paperclone_player.style.animation="wins 2s infinite";
    stat.innerHTML = "TIE";
    paperclone_cpu.style.animation="wins 2s infinite";
}


}


//CONDTION FOR TAKING Scssiors
if(num==3)
{
 if( num==3 && com_choice ==1){

    rockclone_cpu.style.animation="wins 2s infinite";
    stat.innerHTML = "YOU LOSE";
    counter[1].innerHTML=playerwins-=1;
    cpuwins+=1;
    wins+=1;      
    wincircles[wins].style.backgroundColor="red";
    

}
 else if( num==3 && com_choice ==2){

    scissorsclone_player.style.animation="wins 2s infinite";
    stat.innerHTML = "TIE";
    scissorsclone_cpu.style.animation="wins 2s infinite";
}


else if( num==3 && com_choice ==0){

    scissorsclone_player.style.animation="wins 2s infinite";
    stat.innerHTML = "YOU WIN";
     counter[1].innerHTML=playerwins+=1;
     wins+=1;      
     wincircles[wins].style.backgroundColor="green";
}


}

console.log(num);
console.log(com_choice);
}


function toggledisplay(){
//to display the main page
  document.querySelector(".master_body").style.display="flex";
  document.querySelector(".part2").style.display="none";

  //to remove the contents inside the .computer_select_img 
  while(cpuChoice_Box.firstChild) cpuChoice_Box.firstChild.remove()
  while(player.firstChild) player.firstChild.remove()

  //to remove winning pulse
  rockclone_player.style.animation="";
  rockclone_cpu.style.animation="";
  paperclone_cpu.style.animation="";
  paperclone_player.style.animation="";
  scissorsclone_player.style.animation="";
  scissorsclone_cpu.style.animation="";

}
