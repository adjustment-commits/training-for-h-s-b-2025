const scenes = document.querySelectorAll(".scene");
let current = 0;

scenes[0].classList.add("active");

document.addEventListener("click", function(e){

  if(e.target.classList.contains("next-btn")){
    if(current < scenes.length-1){
      scenes[current].classList.remove("active");
      current++;
      scenes[current].classList.add("active");
      window.scrollTo(0,0);
    }
  }

  if(e.target.classList.contains("back-btn")){
    if(current > 0){
      scenes[current].classList.remove("active");
      current--;
      scenes[current].classList.add("active");
      window.scrollTo(0,0);
    }
  }

  if(e.target.classList.contains("choice")){
    const feedback = document.getElementById("feedback");
    if(e.target.dataset.answer === "順番"){
      feedback.textContent = "正解：再現性は順番で決まる";
    } else {
      feedback.textContent = "違う。カギは「順番」";
    }
  }

});
