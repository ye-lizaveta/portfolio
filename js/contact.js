document.addEventListener('DOMContentLoaded', () => {

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

// ── Email popup ──
const emailBtn = document.getElementById('email-btn');
const emailPopup = document.getElementById('email-popup');
const copyBtn = document.querySelector('.copy-btn');
let popupTimer;

emailBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  emailPopup.classList.toggle('visible');
});

emailPopup.addEventListener('mouseenter', () => clearTimeout(popupTimer));

emailBtn.addEventListener('mouseleave', () => {
  popupTimer = setTimeout(() => {
    if (!emailPopup.matches(':hover')) {
      emailPopup.classList.remove('visible');
    }
  }, 300);
});

emailPopup.addEventListener('mouseleave', () => {
  emailPopup.classList.remove('visible');
});

document.addEventListener('click', (e) => {
  if (!emailBtn.contains(e.target)) {
    emailPopup.classList.remove('visible');
  }
});

copyBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navigator.clipboard.writeText('yourmail@gmail.com').then(() => {
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy', 1800);
  });
});

// ── LinkedIn Posts ──
  const linkedinPosts = [
    {
      title: "President's Volunteer Award",
      snippet: "✨I’m delighted to share that I received the President’s Volunteer Award for completing 60+ hours of volunteering...",
      url: "https://www.linkedin.com/posts/yelyzaveta-dolha-baa414277_presidentsvolunteeraward-pva-volunteering-ugcPost-7397248015243304960-W58M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGXyNGABdmiSHbxxryObeOdx82FtZ5fldHA",
      image: "images/award.png" // e.g. "images/post1.jpg"
    },
    {
      title: "EnactusExpo2025",
      snippet: "Thank you Enactus, Enactus UK & Ireland Expo 2025 for an incredible experience! I’m truly honored to have participated in such an inspiring event and to connect with so many passionate changemakers...",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7316476589964238848/?originTrackingId=OZbCbxRzVYXmWwbku8o7cQ%3D%3D",
      image: "images/london.jpg"
    },
  ];

function renderPosts() {
  const grid = document.getElementById('linkedin-grid');
  grid.innerHTML = linkedinPosts.map(post => `
    <article class="li-card">
      ${post.image ?
         `<img class="li-card-img" src="${post.image}" alt="${post.title}">`
        : `<div class="li-card-img-placeholder">🔗</div>`}
      <div class="li-card-body">
        <p class="li-card-title">${post.title}</p>
        <p class="li-card-snippet">${post.snippet}</p>
        <a class="li-card-link" href="${post.url}" target="_blank">Read on LinkedIn →</a>
      </div>
    </article>
  `).join('');
}

renderPosts();

// ── Instagram Posts ──
  const instagramPosts = [
    {
      title: "Work 1",
      snippet: "A little peek into my latest shoot...",
      url: "https://www.instagram.com/p/DVI7d3_jDCs/",
      image: "images/pizda.jpg" // e.g. "images/ig1.jpg"
    },
    {
      title: "Work 2",
      snippet: "Working on something exciting, stay tuned...",
      url: "https://www.instagram.com/p/DIWP8jzMOZy/",
      image: "images/daniel.jpg"
    },
  ];

function renderIgPosts() {
  const grid = document.getElementById('instagram-grid');
  grid.innerHTML = instagramPosts.map(post => `
    <article class="li-card ig-card">
      ${post.image ?
         `<img class="li-card-img" src="${post.image}" alt="${post.title}">`
        : `<div class="li-card-img-placeholder">📸</div>`}
      <div class="li-card-body">
        <p class="li-card-title">${post.title}</p>
        <p class="li-card-snippet">${post.snippet}</p>
        <a class="li-card-link ig-link" href="${post.url}" target="_blank">View on Instagram →</a>
      </div>
    </article>
  `).join('');
}

renderIgPosts();

    });