// ===============================
// ADJUSTMENT LAB lesson00 main.js
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
});
