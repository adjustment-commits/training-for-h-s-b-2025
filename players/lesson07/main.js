// ===============================
// ADJUSTMENT LAB lesson07 main.js
// テーマ：タイミングとリズム
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;
  let bpm = 90; // メトロノームテンポ（体のテンポに近い）
  let metronome;
  let isMetronomePlaying = false;

  // --- シーン切り替え関数 ---
  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });

    // 軽い「拍」アニメーション（scene切り替え時）
    const activeScene = scenes[index];
    activeScene.style.animation = "beatPulse 0.6s ease";
    setTimeout(() => (activeScene.style.animation = ""), 600);
  }

  // --- 次へボタン ---
  document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentScene < scenes.length - 1) {
        currentScene++;
        showScene(currentScene);
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Scene3（拍を刻む）で自動的にメトロノーム開始
        if (scenes[currentScene].id === "scene3" && !isMetronomePlaying) {
          startMetronome();
        }
      }
    });
  });

  // --- 戻るボタン ---
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentScene > 0) {
        currentScene--;
        showScene(currentScene);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // --- メトロノーム音（軽いクリック） ---
  function startMetronome() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playClick() {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime); // 高めのクリック音
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.1);
    }

    // BPMに合わせて拍を刻む
    metronome = setInterval(playClick, (60 / bpm) * 1000);
    isMetronomePlaying = true;
  }

  // --- クイズ処理 ---
  const feedback = document.getElementById("feedback");
  const choices = document.querySelectorAll(".choice");

  if (choices.length > 0) {
    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        const answer = choice.dataset.answer;

        // 正答判定
        if (answer === "間を感じる") {
          feedback.textContent = "正解。リズムの本質は“間”を感じること。";
          feedback.style.color = "#4ade80";
        } else if (answer === "速さを合わせる") {
          feedback.textContent = "違う。速さよりも、動きの中の呼吸を合わせる。";
          feedback.style.color = "#f87171";
        } else {
          feedback.textContent = "惜しい。“強さ”ではリズムは生まれない。";
          feedback.style.color = "#facc15";
        }

        // フィードバックにビートアニメーション
        feedback.style.animation = "beatPulse 0.5s ease";
        setTimeout(() => (feedback.style.animation = ""), 500);

        // 「次へ」ボタン追加
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "▶ 次へ";
        nextBtn.classList.add("next-btn");
        nextBtn.style.marginTop = "20px";

        if (!feedback.nextElementSibling || !feedback.nextElementSibling.classList.contains("next-btn")) {
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
