// ===============================
// ADJUSTMENT LAB access.js（最終版）
// 公開スケジュール＋月別パスワード制御
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = now.getMonth() + 1; // 月(1〜12)

  // --- URLからlesson番号を取得 ---
  const path = window.location.pathname;
  const lesson = path.match(/lesson(\d+)/);
  const num = lesson ? parseInt(lesson[1]) : 0;

  // --- 公開月の定義 ---
  const openMonth = (() => {
    if (num <= 2) return 10;   // Lesson01-02 → 10月公開
    if (num <= 4) return 11;   // Lesson03-04 → 11月公開
    if (num <= 8) return 12;   // Lesson05-08 → 12月公開
    if (num <= 12) return 1;   // Lesson09-12 → 1月公開
    return 2;                  // Lesson13-16 → 2月公開
  })();

  // --- 月ごとのパスワード設定 ---
  const monthPasswords = {
    10: "adj2025oct",  // 10月
    11: "adj2025nov",  // 11月
    12: "adj2025dec",  // 12月
    1: "adj2026jan",   // 1月
    2: "adj2026feb"    // 2月
  };

  // --- 公開前（まだ非公開） ---
  if (mm < openMonth) {
    document.body.innerHTML = `
      <h2 style="text-align:center;margin-top:100px;color:#f87171;">
        このレッスンは ${openMonth}月に公開予定です。
      </h2>`;
    return;
  }

  // --- 公開後（月末以降ロック） ---
  const lockMonth = openMonth;
  if (mm > lockMonth) {
    const input = prompt(`このレッスンの閲覧には ${openMonth}月のパスワードが必要です。`);
    if (input !== monthPasswords[openMonth]) {
      document.body.innerHTML = `
        <h2 style="text-align:center;margin-top:100px;color:#f87171;">
          パスワードが違います。アクセスできません。
        </h2>`;
      return;
    }
  }
});
