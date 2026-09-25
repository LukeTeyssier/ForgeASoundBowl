// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they scroll into view
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.section .wrap').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

// Contact form: submit to Formspree without leaving the page
const form = document.querySelector('.contact-form');
const status = form.querySelector('.form-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (form.action.includes('YOUR_FORM_ID')) {
    status.className = 'form-status err';
    status.textContent = 'The contact form is not connected yet.';
    return;
  }
  const button = form.querySelector('button');
  button.disabled = true;
  status.className = 'form-status';
  status.textContent = 'Sending…';
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error();
    form.reset();
    status.className = 'form-status ok';
    status.textContent = "Thank you — your message is on its way.";
  } catch {
    status.className = 'form-status err';
    status.textContent = 'Something went wrong. Please try again.';
  } finally {
    button.disabled = false;
  }
});
