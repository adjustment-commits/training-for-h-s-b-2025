// ============================================
// ADJUSTMENT LAB｜冬モード main.js
// 寒冷地トレーニング専用：Lesson08〜12共通
// ============================================

document.addEventListener("DOMContentLoaded", () => {
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

  // --- クイズ判定（寒冷地ver） ---
  const feedback = document.getElementById("feedback");
  const choices = document.querySelectorAll(".choice");

  if (choices.length > 0 && feedback) {
    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        const answer = choice.dataset.answer;

        // --- 判定とコメント ---
        if (answer === "動きながら支えること") {
          feedback.textContent = "正解。寒さの中で動ける選手は、芯が熱い。";
          feedback.style.color = "#f87171";
        } else if (answer === "動かないこと") {
          feedback.textContent = "違う。止まると冷える、筋肉も神経も眠る。";
          feedback.style.color = "#94a3b8";
        } else if (answer === "固めること") {
          feedback.textContent = "惜しい。固めた瞬間、熱も流れも止まる。";
          feedback.style.color = "#facc15";
        } else {
          feedback.textContent = "感じて選べ。それが一番のトレーニングだ。";
          feedback.style.color = "#fcd34d";
        }

        // --- “次へ”ボタン自動生成 ---
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

  // --- 初期シーン表示 ---
  showScene(currentScene);

  // --- 冬季アクティベーション演出 ---
  const body = document.body;
  body.style.transition = "background 1s ease";
  setInterval(() => {
    body.style.background = body.style.background.includes("#0d1117")
      ? "linear-gradient(180deg, #1a0f0f, #3b1c1c)"
      : "linear-gradient(180deg, #0d1117, #321b1b)";
  }, 8000);
});
