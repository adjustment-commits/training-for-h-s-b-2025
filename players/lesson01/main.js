// players/lesson01/main.js
// Navigation + quiz feedback script for lesson01
// No password or prompt here — players open directly.

(function () {
  // Use load to ensure all elements (especially on some mobile browsers) are present
  window.addEventListener('load', () => {

    const scenes = Array.from(document.querySelectorAll('.scene'));
    const feedback = document.getElementById('feedback');

    // delegate buttons lookup each time to handle dynamically created next-btns in feedback
    function getNextButtons() {
      return Array.from(document.querySelectorAll('.next-btn'));
    }
    function getBackButtons() {
      return Array.from(document.querySelectorAll('.back-btn'));
    }
    function getChoiceButtons() {
      return Array.from(document.querySelectorAll('.choice'));
    }

    let currentScene = scenes.findIndex(s => s.classList.contains('active'));
    if (currentScene === -1) currentScene = 0;

    function showScene(index) {
      if (index < 0 || index >= scenes.length) return;
      scenes.forEach(s => s.classList.remove('active'));
      scenes[index].classList.add('active');
      currentScene = index;
      // scroll to top for small screens so the content is visible
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // ensure any transient feedback area is cleared when changing scenes
      if (feedback) feedback.innerHTML = '';
      // re-bind dynamic next/back buttons
      bindNavButtons();
    }

    function bindNavButtons() {
      // Remove previous listeners by cloning nodes (simple safe approach)
      getNextButtons().forEach(btn => {
        const clone = btn.cloneNode(true);
        btn.parentNode.replaceChild(clone, btn);
      });
      getBackButtons().forEach(btn => {
        const clone = btn.cloneNode(true);
        btn.parentNode.replaceChild(clone, btn);
      });

      // Add handlers anew
      getNextButtons().forEach(btn => {
        btn.addEventListener('click', () => showScene(currentScene + 1));
      });
      getBackButtons().forEach(btn => {
        btn.addEventListener('click', () => showScene(currentScene - 1));
      });
    }

    // Initial bind
    bindNavButtons();

    // Quiz / choice handling
    function handleChoiceClick(e) {
      const choice = e.currentTarget;
      const answer = choice.dataset ? choice.dataset.answer : null;

      if (!feedback) return;

      // Clear previous feedback
      feedback.innerHTML = '';

      // Friendly, non-judgmental messaging (no "punish" or "shame")
      if (answer === '骨盤から') {
        const strong = document.createElement('div');
        strong.textContent = 'いいね。骨盤を意識できている選手は伸びる。';
        strong.style.color = '#7CFC00';
        feedback.appendChild(strong);
      } else {
        const hint = document.createElement('div');
        hint.textContent = 'なるほど。その感じ方も学びの一部だよ。次はこう意識してみよう：胸を置いて骨盤を動かす。';
        hint.style.color = '#ffd166';
        feedback.appendChild(hint);
      }

      // add spacing then a "next" button inside feedback
      const spacer = document.createElement('div');
      spacer.style.height = '8px';
      feedback.appendChild(spacer);

      const nextBtn = document.createElement('button');
      nextBtn.className = 'next-btn';
      nextBtn.textContent = '▶ 次へ';
      nextBtn.addEventListener('click', () => showScene(currentScene + 1));
      feedback.appendChild(nextBtn);

      // Rebind nav buttons because we added a new next-btn inside feedback
      bindNavButtons();
    }

    // attach choices
    getChoiceButtons().forEach(btn => {
      // Remove old clones safely
      const clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener('click', handleChoiceClick);
    });

    // Accessibility: allow Enter key to activate focused buttons
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        const active = document.activeElement;
        if (active && active.tagName === 'BUTTON') {
          active.click();
          ev.preventDefault();
        }
      }
    });

    // Final safety: expose a small API if needed later
    window.lesson01 = {
      showScene
    };
  });
})();
