window.onload = function() {
  // --- 合言葉ロック ---
  const pass = prompt("【選手専用ページ】\n合言葉を入力してください：");
  if (pass !== "adjtraining") {
    document.body.innerHTML =
      "<h2 style='color:red;text-align:center;margin-top:100px;'>アクセス拒否</h2>";
    return;
  }

  // --- シーン切り替えとクイズ判定 ---
  const scenes = document.querySelectorAll(".scene");
  const nextButtons = document.querySelectorAll(".next-btn");
  const choices = document.querySelectorAll(".choice");
  const feedback = document.getElementById("feedback");

  let currentScene = 0;

  // 「次へ」ボタンでシーン切り替え
  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      scenes[currentScene].classList.remove("active");
      currentScene++;
      if (currentScene < scenes.length) {
        scenes[currentScene].classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // クイズ判定
  choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const answer = choice.dataset.answer;
    if (answer === "骨盤から") {
      feedback.textContent = "正解。感じて説明できる選手が強い。";
      feedback.style.color = "#7CFC00";

      // ✅ 1.5秒後に次のシーンへ自動遷移
      setTimeout(() => {
        scenes[currentScene].classList.remove("active");
        currentScene++;
        if (currentScene < scenes.length) {
          scenes[currentScene].classList.add("active");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 1500);
    } else {
      feedback.textContent = "違う。でも、その違和感が学びの始まり。";
      feedback.style.color = "#ffd166";
    }
  });
});
};
