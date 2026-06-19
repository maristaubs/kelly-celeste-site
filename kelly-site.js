/* kelly-site.js — mobile nav. No deps. */
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Carrossel de depoimentos
  var track = document.getElementById('testiTrack');
  if (track) {
    var prev = document.querySelector('.testi-prev');
    var next = document.querySelector('.testi-next');

    function updateArrows() {
      var maxScroll = track.scrollWidth - track.clientWidth - 1;
      if (prev) prev.disabled = track.scrollLeft <= 1;
      if (next) next.disabled = track.scrollLeft >= maxScroll;
    }

    function page(dir) {
      var card = track.querySelector('.testi-card');
      var step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
      var perView = Math.max(1, Math.round(track.clientWidth / step));
      track.scrollBy({ left: dir * step * perView, behavior: 'smooth' });
    }

    // "Ler mais" para depoimentos longos
    var quotes = track.querySelectorAll('blockquote');
    for (var i = 0; i < quotes.length; i++) {
      (function (q) {
        q.classList.add('clamp');
        if (q.scrollHeight - q.clientHeight > 4) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'testi-more';
          btn.textContent = 'Ler mais';
          btn.addEventListener('click', function () {
            var clamped = q.classList.toggle('clamp');
            btn.textContent = clamped ? 'Ler mais' : 'Ler menos';
          });
          q.insertAdjacentElement('afterend', btn);
        }
      })(quotes[i]);
    }

    if (prev) prev.addEventListener('click', function () { page(-1); });
    if (next) next.addEventListener('click', function () { page(1); });
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }
})();
