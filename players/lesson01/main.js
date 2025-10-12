document.addEventListener("DOMContentLoaded", function() {
  const scenes = document.querySelectorAll(".scene");
  const nextButtons = document.querySelectorAll(".next-btn");
  const backButtons = document.querySelectorAll(".back-btn");
  const choices = document.querySelectorAll(".choice");
  const feedback = document.getElementById("feedback");

  let currentScene = 0;

  function showScene(index) {
    scenes.forEach(s => s.classList.remove("active"));
    if (index >= 0 && index < scenes.length) {
      scenes[index].classList.add("active");
      currentScene = index;
    }
  }

  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => showScene(currentScene + 1));
  });

  backButtons.forEach(btn => {
    btn.addEventListener("click", () => showScene(currentScene - 1));
  });

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const answer = choice.dataset.answer;
      feedback.innerHTML = "";

      if (answer === "骨盤から") {
        feedback.innerHTML = "正解。感じて説明できる選手が強い。<br>";
      } else {
        feedback.innerHTML = "違う。でも、その違和感が学びの始まり。<br>";
      }

      const nextBtn = document.createElement("button");
      nextBtn.classList.add("next-btn");
      nextBtn.textContent = "▶ 次へ";
      nextBtn.addEventListener("click", () => showScene(currentScene + 1));
      feedback.appendChild(nextBtn);
    });
  });
});
