/* ============================================================
   Quiet Contrast · main.js
   GitHub Pages static site — no dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ── Sticky nav colour switch ─────────────────────────────── */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* ── Scroll reveal ────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    /* Fallback for old browsers — show everything immediately */
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('in');
    });
  }

  /* ── Mobile nav toggle ────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var ul = document.querySelector('.nav-links');
      if (!ul) return;

      var isOpen = ul.classList.toggle('open');
      if (isOpen) {
        ul.style.cssText = [
          'display:flex',
          'flex-direction:column',
          'position:fixed',
          'top:64px',
          'left:0',
          'right:0',
          'background:#fff',
          'padding:20px 24px 28px',
          'gap:4px',
          'border-bottom:3px solid #e60000',
          'z-index:199'
        ].join(';');
        ul.querySelectorAll('a').forEach(function (a) {
          a.style.cssText = 'color:#25282b;font-size:16px;padding:10px 0;border-bottom:1px solid #f0f0f0;display:block;';
        });
      } else {
        ul.style.cssText = '';
        ul.querySelectorAll('a').forEach(function (a) { a.style.cssText = ''; });
      }
    });
  }

  /* ── Close mobile nav when a link is clicked ──────────────── */
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      var ul = document.querySelector('.nav-links');
      if (ul && ul.classList.contains('open')) {
        ul.classList.remove('open');
        ul.style.cssText = '';
        ul.querySelectorAll('a').forEach(function (link) { link.style.cssText = ''; });
      }
    });
  });

  /* ── Formspree submission feedback ───────────────────────── */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn ? btn.textContent : '';

      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

      try {
        var res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          if (btn) { btn.textContent = 'Sent ✓'; }
          form.reset();
          setTimeout(function () {
            if (btn) { btn.textContent = originalText; btn.disabled = false; }
          }, 3000);
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        if (btn) { btn.textContent = 'Try again'; btn.disabled = false; }
      }
    });
  }

})();
