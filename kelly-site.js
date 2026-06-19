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

    if (prev) prev.addEventListener('click', function () { page(-1); });
    if (next) next.addEventListener('click', function () { page(1); });
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }
})();
