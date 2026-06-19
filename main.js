// ===== Header style on scroll =====
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 20) {
    header.classList.add('bg-white/90', 'backdrop-blur', 'shadow-sm');
  } else {
    header.classList.remove('bg-white/90', 'backdrop-blur', 'shadow-sm');
  }
};
window.addEventListener('scroll', onScroll);
onScroll();

// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// Close menu when a link is tapped
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ===== Reveal-on-scroll =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Contact form (demo handler) =====
function handleSubmit(event) {
  event.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'お問い合わせありがとうございます。送信機能は現在デモです（バックエンド連携で有効化できます）。';
  note.classList.add('text-brand-600');
  event.target.reset();
  return false;
}
