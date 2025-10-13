// ===============================
// ADJUSTMENT LAB lesson02 main.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;

  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });
  }

  // 次へ
  document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentScene < scenes.length - 1) {
        currentScene++;
        showScene(currentScene);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // 戻る
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentScene > 0) {
        currentScene--;
        showScene(currentScene);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // クイズ処理
  const feedback = document.getElementById("feedback");
  const choices = document.querySelectorAll(".choice");

  if (choices.length > 0) {
    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        const answer = choice.dataset.answer;
        if (answer === "体全体でつなぐ") {
          feedback.textContent = "正解。力は“全身の流れ”で伝わる。止めないことがポイント。";
          feedback.style.color = "#4ade80";
        } else {
          feedback.textContent = "違う。でも“力をつなぐ”意識を持てたら正解に近い。";
          feedback.style.color = "#ffd166";
        }
      });
    });
  }

  showScene(currentScene);
});
