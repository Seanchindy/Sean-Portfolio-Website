
const nav_links = document.querySelectorAll(".sidebar a");

const current_page = window.location.pathname.split("/").pop();

nav_links.forEach(link => {
  const link_page = link.getAttribute("href");

  if (link_page === current_page) {
    link.classList.add("active-link");
  }
});

const switchBtn = document.getElementById('switch');

if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  switchBtn.textContent = 'light_mode';
} else {
  document.body.classList.remove('dark-mode');
  switchBtn.textContent = 'dark_mode';
}

switchBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    switchBtn.textContent = 'light_mode';
    localStorage.setItem('dark-mode', 'true');
  } else {
    switchBtn.textContent = 'dark_mode';
    localStorage.setItem('dark-mode', 'false');
  }
});
