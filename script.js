// --- DARK MODE LOGIC ---
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

// Check LocalStorage on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Event Listener for Toggle
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Switch Icon
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // Save to LocalStorage
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        // Save to LocalStorage
        localStorage.setItem('theme', 'light');
    }
});

// --- BURGER MENU LOGIC ---
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

// Toggle menu on burger click
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    }
});