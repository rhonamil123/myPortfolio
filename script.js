 // --- DARK MODE LOGIC (REQUIRED BY RUBRIC) ---
        
        const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;
        const icon = toggleButton.querySelector('i');

        // 1. Check LocalStorage on page load
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        // 2. Event Listener for Toggle
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