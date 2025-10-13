// ===============================
// ADJUSTMENT LAB lesson06 main.js
// テーマ：反発とタイミング
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;

  // --- シーン切り替え関数 ---
  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });
    // 軽い「弾み」アニメーション
    const activeScene = scenes[index];
    activeScene.style.animation = "rebound 0.5s ease";
    setTimeout(() => (activeScene.style.animation = ""), 600);
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

        // 判定メッセージ
        if (answer === "タイミングを合わせる") {
          feedback.textContent = "正解。反発は力ではなく“タイミング”で生まれる。";
          feedback.style.color = "#4ade80"; // 緑：成功
        } else if (answer === "止めてから跳ねる") {
          feedback.textContent = "違う。止めた瞬間に反発は消える。止めずに合わせろ。";
          feedback.style.color = "#f87171"; // 赤：失敗
        } else {
          feedback.textContent = "惜しい。強さではなく、“合わせる速さ”が鍵。";
          feedback.style.color = "#facc15"; // 黄：惜しい
        }

        // フィードバックに軽い反発演出
        feedback.style.transform = "scale(1.15)";
        feedback.style.transition = "transform 0.3s ease";
        setTimeout(() => (feedback.style.transform = "scale(1)"), 300);

        // 「次へ」ボタン生成（自動で追加）
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
