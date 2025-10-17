// script.js — small UI interactions

document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  navToggle?.addEventListener('click', () => {
    const visible = navList.style.display === 'flex';
    navList.style.display = visible ? 'none' : 'flex';
    if(!visible) navList.style.flexDirection = 'column';
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple contact form handler (mailto fallback)
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    // create mailto
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:battulalitha5@gmail.com?subject=${subject}&body=${body}`;
  });
});
