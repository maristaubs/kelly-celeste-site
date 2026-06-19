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

    var dotsWrap = document.getElementById('testiDots');
    var cards = track.querySelectorAll('.testi-card');

    function cardStep() {
      var card = track.querySelector('.testi-card');
      return card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    }

    function updateArrows() {
      var maxScroll = track.scrollWidth - track.clientWidth - 1;
      if (prev) prev.disabled = track.scrollLeft <= 1;
      if (next) next.disabled = track.scrollLeft >= maxScroll;
    }

    function updateDots() {
      if (!dotsWrap) return;
      var active = Math.round(track.scrollLeft / cardStep());
      var dots = dotsWrap.children;
      for (var d = 0; d < dots.length; d++) {
        var on = d === active;
        dots[d].classList.toggle('is-active', on);
        dots[d].setAttribute('aria-selected', on ? 'true' : 'false');
      }
    }

    function update() { updateArrows(); updateDots(); }

    function page(dir) {
      var step = cardStep();
      var perView = Math.max(1, Math.round(track.clientWidth / step));
      track.scrollBy({ left: dir * step * perView, behavior: 'smooth' });
    }

    // Marcadores (dots) — um por avaliação
    if (dotsWrap) {
      for (var c = 0; c < cards.length; c++) {
        (function (idx) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'testi-dot';
          dot.setAttribute('role', 'tab');
          dot.setAttribute('aria-label', 'Ir para avaliação ' + (idx + 1));
          dot.addEventListener('click', function () {
            track.scrollTo({ left: cardStep() * idx, behavior: 'smooth' });
          });
          dotsWrap.appendChild(dot);
        })(c);
      }
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
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
