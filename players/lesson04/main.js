// ===============================
// ADJUSTMENT LAB lesson04 main.js
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

  // --- クイズ判定 ---
  const feedback = document.getElementById("feedback");
  const choices = document.querySelectorAll(".choice");

  if (choices.length > 0) {
    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        const answer = choice.dataset.answer;

        // 判定ロジック
        if (answer === "ズラして戻すこと") {
          feedback.textContent = "正解。ねじりではなく“ズラして戻す”ことで反応が生まれる。";
          feedback.style.color = "#4ade80"; // 緑（成功）
        } else if (answer === "ねじること") {
          feedback.textContent = "惜しい。ねじるだけでは反応が遅れる。ズラして戻すのが鍵。";
          feedback.style.color = "#ffd166"; // 黄色（惜しい）
        } else {
          feedback.textContent = "違う。速さではなく、ねじれの“戻し”が反応を作る。";
          feedback.style.color = "#f87171"; // 赤（誤答）
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
