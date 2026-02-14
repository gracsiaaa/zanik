/* script.js - Y2K CHAOS GENERATOR */

document.addEventListener('DOMContentLoaded', () => {
  generateChaos(); // Generate floating emojis

  // Typing Effect for Card 3
  if (document.getElementById('letter-text')) {
    const msg = "halo haloo selamat memperingati hari besar kasih sayang 2026 masehi🫰🏻🫦\n\ni just wanna say life is way more fun with you in it. You make ordinary days feel special and random moments feel unforgettable. I love how we can be silly together, talk about random things, laugh at the smallest things, tease each other nonstop ((emot emot)), and still be each othe's comfort person. You're not just my Valentine, you're MY FAVORITE PERSON AND MY BEST DECISION💥 Thank you for your support, your hugs, and your presence. I LOVE YOU SoOoo MUCH❤️🌹";
    typeWriter('letter-text', msg, 40);
  }

  // Boss Battle Trigger (Menu)
  if (window.location.href.includes("menu.html")) {
    setTimeout(triggerBossBattle, 3000);
  }
});

/* --- FUNGSI GENERATE EMOJI MELAYANG (PENGGANTI GIF) --- */
function generateChaos() {
  const layer = document.getElementById('chaos-layer');
  if (!layer) return;

  // Kumpulan Emoji Y2K Aesthetic
  const emojis = ['🦋', '💿', '💖', '🧸', '🌈', '🍒', '✨', '🐬', '📱', '💎'];

  for (let i = 0; i < 15; i++) {
    const span = document.createElement('span');
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.className = 'floating-emoji';

    // Posisi Acak
    span.style.left = Math.random() * 95 + 'vw';
    span.style.top = Math.random() * 95 + 'vh';

    // Ukuran & Rotasi Acak
    const size = Math.random() * 2 + 1; // 1rem - 3rem
    span.style.fontSize = size + 'rem';
    span.style.animationDuration = (Math.random() * 5 + 5) + 's';

    layer.appendChild(span);
  }
}

/* --- UTILS --- */
function triggerBossBattle() {
  if (sessionStorage.getItem('y2kDone') === 'true') return;
  const boss = document.getElementById('boss-overlay');
  if (boss) boss.classList.remove('hidden');
}

function finishGame() {
  document.getElementById('virus-alert').classList.add('hidden');
  document.getElementById('success-msg').classList.remove('hidden');
  sessionStorage.setItem('y2kDone', 'true');
}

function typeWriter(id, text, speed) {
  const el = document.getElementById(id);
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++; setTimeout(type, speed);
    }
  }
  type();
}