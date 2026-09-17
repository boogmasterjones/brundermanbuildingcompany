// Brunderman Building Co Inc — small progressive enhancements, no dependencies.
(function () {
  var mobile = window.matchMedia('(max-width: 640px)');

  // Header "Menu" dropdown
  document.querySelectorAll('.nav-drop').forEach(function (drop) {
    var btn = drop.querySelector('.nav-drop-btn');
    if (!btn) return;
    function close() {
      drop.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target) || e.target.closest('.nav-drop-menu a')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drop.classList.contains('open')) { close(); btn.focus(); }
    });
  });

  // "See Our Work" carousel — native scroll-snap, arrows just scroll one slide
  document.querySelectorAll('.work-gallery').forEach(function (gallery) {
    var track = gallery.querySelector('.work-track');
    if (!track) return;
    function step(dir) {
      var slide = track.querySelector('.work-slide');
      var gap = parseFloat(getComputedStyle(track).columnGap) || 20;
      var amount = slide ? slide.getBoundingClientRect().width + gap : track.clientWidth;
      var max = track.scrollWidth - track.clientWidth;
      if (dir > 0 && track.scrollLeft >= max - 4) { track.scrollTo({ left: 0, behavior: 'smooth' }); return; }
      if (dir < 0 && track.scrollLeft <= 4) { track.scrollTo({ left: max, behavior: 'smooth' }); return; }
      track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    }
    var prev = gallery.querySelector('.work-arrow.prev');
    var next = gallery.querySelector('.work-arrow.next');
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
  });

  // Long copy: show the lead paragraph, tuck the rest behind "Read more" (CSS only hides it on mobile)
  document.querySelectorAll('.collapsible').forEach(function (box) {
    var firstP = box.querySelector(':scope > p');
    if (!firstP) return;
    var rest = [];
    for (var n = firstP.nextElementSibling; n; n = n.nextElementSibling) rest.push(n);
    if (!rest.length) return;
    var more = document.createElement('div');
    more.className = 'more';
    rest.forEach(function (n) { more.appendChild(n); });
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'more-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Read more +';
    btn.addEventListener('click', function () {
      var open = box.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Show less –' : 'Read more +';
    });
    box.appendChild(more);
    box.appendChild(btn);
  });

  // Scope cards: tap-to-open on mobile, always open (and inert) on desktop
  var accCards = document.querySelectorAll('.card-acc');
  function syncAcc() {
    accCards.forEach(function (d) { d.open = !mobile.matches; });
  }
  if (accCards.length) {
    syncAcc();
    if (mobile.addEventListener) mobile.addEventListener('change', syncAcc);
    accCards.forEach(function (d) {
      d.querySelector('summary').addEventListener('click', function (e) {
        if (!mobile.matches) e.preventDefault();
      });
    });
  }

  // Quote form: questions appear one at a time as each is answered
  document.querySelectorAll('.quote-form').forEach(function (form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll('.form-step'));
    var bar = form.querySelector('.form-progress-bar');
    var field = function (n) { return form.querySelector('[name="' + n + '"]'); };
    var name = field('name'), phone = field('phone'), email = field('email'), area = field('service-area');
    form.classList.add('is-progressive');
    form.noValidate = true; // validated by hand below so hidden steps never block submit silently

    function hasContact() {
      var digits = phone.value.replace(/\D/g, '').length;
      var mailOk = email.value.trim() !== '' && email.checkValidity();
      return digits >= 10 || mailOk;
    }
    var done = {
      contact: function () { return name.value.trim().length > 1 && hasContact(); },
      area: function () { return !!area.value; },
      service: function () { return !!form.querySelector('[name="service[]"]:checked'); },
      timing: function () { return !!form.querySelector('[name="timing"]:checked'); },
      status: function () { return !!form.querySelector('[name="status"]:checked'); },
      message: function () { return false; }
    };

    function update() {
      var count = 0, open = true;
      steps.forEach(function (s) {
        if (open) s.classList.add('is-shown');
        var ok = done[s.dataset.step]();
        if (s.classList.contains('is-shown') && ok) count++;
        open = open && ok;
      });
      form.classList.toggle('can-submit', done.contact() && done.area() && done.service());
      if (bar) bar.style.width = Math.min(100, Math.round((count / 5) * 100)) + '%';
    }
    form.addEventListener('input', function () {
      [phone, email, area].forEach(function (i) { i.setCustomValidity(''); });
      update();
    });
    form.addEventListener('change', update);
    update();
    window.addEventListener('pageshow', update); // browser autofill / back-forward cache

    form.addEventListener('submit', function (e) {
      steps.forEach(function (s) { s.classList.add('is-shown'); });
      form.classList.add('can-submit');
      phone.setCustomValidity(hasContact() ? '' : 'Please enter a phone number or an email so we can reach you.');
      var firstBox = form.querySelector('[name="service[]"]');
      if (firstBox) firstBox.setCustomValidity(done.service() ? '' : 'Please select at least one service.');
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        if (firstBox) firstBox.setCustomValidity('');
        return;
      }
      if (typeof gtag === 'function') {
        gtag('event', 'quote_form_submit', { event_category: 'engagement', event_label: location.pathname });
      }
    });
  });

  // Mobile call bar: slide away while the quote form is on screen so it never covers the fields
  var mobileBar = document.querySelector('.mobile-bar');
  var quoteCard = document.querySelector('.quote-card');
  if (mobileBar && quoteCard && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      mobileBar.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(quoteCard);
  }
})();
