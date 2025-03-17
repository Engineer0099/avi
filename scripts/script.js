// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is enabled in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Report Form Submission
const reportForm = document.getElementById('reportForm');
if (reportForm) {
  reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your report! We will get back to you soon.');
  });
}
const rightNav = document.getElementById('rightNav');
const leftNav = document.getElementById('leftNav');


// Toggle Left Nav Bar
function toggleLeftNav() {
leftNav.classList.toggle('open');
}

// Toggle Right Nav Bar
function toggleRightNav() {
rightNav.classList.toggle('open');
}

//Changing Pages
function changePage(Page){
  window.location.href = Page;
}

