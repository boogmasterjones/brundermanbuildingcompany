// Brunderman Building Co Inc — small progressive enhancements, no dependencies.
(function () {
  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Services dropdown
  document.querySelectorAll('.nav-drop').forEach(function (drop) {
    var btn = drop.querySelector('.nav-drop-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        drop.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // "See Our Work" carousel — native scroll-snap, arrows just scroll one slide
  document.querySelectorAll('.work-gallery').forEach(function (gallery) {
    var track = gallery.querySelector('.work-track');
    if (!track) return;
    function step(dir) {
      var slide = track.querySelector('.work-slide');
      var amount = slide ? slide.getBoundingClientRect().width + 20 : track.clientWidth;
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

  // Quote form: require a phone OR an email, and at least one service
  document.querySelectorAll('.quote-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var phone = form.querySelector('[name="phone"]');
      var email = form.querySelector('[name="email"]');
      if (phone && email && !phone.value.trim() && !email.value.trim()) {
        e.preventDefault();
        phone.setCustomValidity('Please enter a phone number or an email so we can reach you.');
        phone.reportValidity();
        return;
      }
      var boxes = form.querySelectorAll('[name="service[]"]');
      if (boxes.length && !form.querySelector('[name="service[]"]:checked')) {
        e.preventDefault();
        boxes[0].setCustomValidity('Please select at least one service.');
        boxes[0].reportValidity();
        return;
      }
      if (typeof gtag === 'function') {
        gtag('event', 'quote_form_submit', { event_category: 'engagement', event_label: location.pathname });
      }
    });
    form.addEventListener('input', function () {
      form.querySelectorAll('input').forEach(function (i) { i.setCustomValidity(''); });
    });
  });
})();
