// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll([
  '#hero-badge','#hero-headline','#hero-sub','#hero-cta','#hero-mockup',
  '#price-flash',
  '#q1','#q2','#q3','#pain-body','#possibility-box',
  '#origin-text','#origin-stats',
  '#inside-header','#inside-mockup','#card-templates','#card-stories','#card-growth',
  '#bonus-header','#bonus-1','#bonus-2','#bonus-3',
  '#proof-header','#proof-ticker','#proof-testimonial',
  '#offer-header','#offer-card',
  '#recap-inner',
  '#faq-header','#faq-price','#faq-access','#faq-unique',
  '#final-cta'
].join(','));

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    // open clicked
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

// ===== SMOOTH ANCHOR =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== BUTTON PULSE on CTA hover =====
document.querySelectorAll('.btn-gold').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 60px rgba(201,162,39,0.6)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '0 0 28px rgba(201,162,39,0.35)';
  });
});
