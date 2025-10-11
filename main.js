document.addEventListener("DOMContentLoaded", function() {
  const scenes = document.querySelectorAll(".scene");
  const nextButtons = document.querySelectorAll(".next-btn");
  const choices = document.querySelectorAll(".choice");
  const feedback = document.getElementById("feedback");

  let currentScene = 0;

  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      scenes[currentScene].classList.remove("active");
      currentScene++;
      if (currentScene < scenes.length) {
        scenes[currentScene].classList.add("active");
      }
    });
  });

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const answer = choice.dataset.answer;
      if (answer === "骨盤から") {
        feedback.textContent = "正解。感じて説明できる選手が強い。";
      } else {
        feedback.textContent = "違う。でも、その違和感が学びの始まり。";
      }
    });
  });
});
