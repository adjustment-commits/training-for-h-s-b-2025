// ===============================
// ADJUSTMENT LAB lesson03 main.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;

  // --- シーン切り替え ---
  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });
  }

  // --- 「次へ」ボタン ---
  document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentScene < scenes.length - 1) {
        currentScene++;
        showScene(currentScene);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // --- 「戻る」ボタン ---
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentScene > 0) {
        currentScene--;
        showScene(currentScene);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // --- クイズ処理 ---
  const feedback = document.getElementById("feedback");
  const choices = document.querySelectorAll(".choice");

  if (choices.length > 0) {
    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        const answer = choice.dataset.answer;

        // 正解判定
        if (answer === "動きながら支えること") {
          feedback.textContent = "正解。安定とは“動きの中で支えること”。止めずに流れを保つ。";
          feedback.style.color = "#4ade80";
        } else if (answer === "支えること") {
          feedback.textContent = "惜しい。静的な支えではなく、“動的安定”が大事。";
          feedback.style.color = "#ffd166";
        } else {
          feedback.textContent = "違う。動きを止めるのではなく、中心でコントロールすることが安定だ。";
          feedback.style.color = "#f87171";
        }

        // クリック後、自動で次へボタンを表示（自然な流れ）
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "▶ 次へ";
        nextBtn.classList.add("next-btn");
        nextBtn.style.marginTop = "20px";

        // 次ボタン重複防止
        const existing = feedback.nextElementSibling;
        if (!existing || !existing.classList.contains("next-btn")) {
          feedback.after(nextBtn);
          nextBtn.addEventListener("click", () => {
            if (currentScene < scenes.length - 1) {
              currentScene++;
              showScene(currentScene);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          });
        }
      });
    });
  }

  // --- 初期表示 ---
  showScene(currentScene);
});
