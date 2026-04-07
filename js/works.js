document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll → frosted header ──
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // ── Hamburger ──
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Sidebar anchor highlight ──
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href').replace('#', '');
      const section = document.getElementById(targetId);
      if (!section) { return; }

      const sectionCards = [];
      let el = section.nextElementSibling;
      while (el && !el.classList.contains('section-label')) {
        if (el.classList.contains('project-card')) {
          sectionCards.push(el);
        }
        el = el.nextElementSibling;
      }

      sectionCards.forEach(card => {
        card.classList.remove('flash');
        void card.offsetWidth;
        card.classList.add('flash');
        card.addEventListener('animationend', () => {
          card.classList.remove('flash');
        }, { once: true });
      });

      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

});