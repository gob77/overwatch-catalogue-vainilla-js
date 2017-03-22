document.addEventListener("DOMContentLoaded", function(){

//show selected character's class or show all character`s classes


  var selectedClass = document.getElementById("selectedClass");
  selectedClass.addEventListener("change", function(){

    var hideClass = document.getElementsByClassName("img-holder");
    for(var i = 0; i < hideClass.length; i++){

      if(selectedClass.value === "all"){
        hideClass[i].classList.remove("displayNone");
      }
      else {
        if(hideClass[i].classList.contains(selectedClass.value)){
          hideClass[i].classList.remove("displayNone");
        }
        else{
          hideClass[i].classList.add("displayNone");
        }
      }
    }
  })


// show or hide characters skills

  function showSkills(){
  if(this.classList.contains("current")) {
    this.classList.remove("current");
    this.parentNode.classList.remove("current");
  } else {
    this.classList.add("current");
    this.parentNode.classList.add("current");
  }

    // if(this.parentNode.className === this.id) {
    //   this.parentNode.className = "";
    // } else {
    //   this.parentNode.className = this.id;
    // }




    // var characters  = document.getElementsByClassName(img-holder)
    // for (var i = characters.length - 1; i >= 0; i--) {
    //   if ( this  === characters[i]) {
    //     characters[i].classList.remove("displayNone")
    //   } else {
    //     characters[i].classList.add("displayNone")
    //   }
    // }





    /*var skill = this.getElementsByClassName("main-skills")[0];
    var hasDisplayNone = skill.classList.contains("displayNone");

    var charSkills = document.getElementsByClassName("main-skills");
    for(var i = 0; i < charSkills.length; i++){
      charSkills[i].classList.add("displayNone");
    }
    if(hasDisplayNone) {
      skill.classList.remove("displayNone");
    } else {
      skill.classList.add("displayNone");
    }*/


    // var heroes = ["hanzo", "mei", "widowmaker", "bastion", "junkrat", "torb", "pharah", "soldier", "tracer", "reaper", "genji", "mccree",

    // "lucio", "mercy","zenny", "symm", "dva", "rein", "winston", "zarya"];

    // for(var i = 0; i < heroes.length; i++){
    //   if(event.target.parentNode.classList.contains(heroes[i])){
    //     var charSkills = document.getElementsByClassName("main-skills");
    //     if(charSkills[i].classList.contains(heroes[i]) && charSkills[i].classList.contains("displayNone")){
    //       charSkills[i].classList.remove("displayNone");
    //     }
    //     else{
    //       if(charSkills[i].classList.contains("displayNone")){
    //         charSkills[i].classList.remove("displayNone");
    //       }
    //       else{
    //         charSkills[i].classList.add("displayNone");
    //       }
    //     }
    //   }
    // }
  }

  var selectedChar = document.getElementsByClassName("img-holder");
  for(var i = 0; i < selectedChar.length; i++){
    selectedChar[i].addEventListener("click", showSkills);
  }
})