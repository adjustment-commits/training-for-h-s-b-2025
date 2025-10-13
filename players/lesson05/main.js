// ===============================
// ADJUSTMENT LAB lesson05 main.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;

  // --- シーン切り替え関数 ---
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

        if (answer === "途切れずに繋ぐ") {
          feedback.textContent = "正解。力は止めずに流すことで次の動きが生まれる。";
          feedback.style.color = "#4ade80"; // 緑（正解）
        } else if (answer === "力を抜く") {
          feedback.textContent = "違う。抜くと流れが途切れる。“止めない”が大事。";
          feedback.style.color = "#f87171"; // 赤（誤答）
        } else {
          feedback.textContent = "惜しい。全力で出すと止まる。流れの中で出すんだ。";
          feedback.style.color = "#ffd166"; // 黄（惜しい）
        }

        // --- 自動で「次へ」ボタン生成 ---
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "▶ 次へ";
        nextBtn.classList.add("next-btn");
        nextBtn.style.marginTop = "20px";

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
