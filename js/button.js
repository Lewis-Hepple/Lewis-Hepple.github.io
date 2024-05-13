function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-theme');
    
    // Save the theme preference
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var themeToggleButton = document.querySelector('.theme-toggle');
    var isDark = document.body.classList.contains('dark-theme');
    themeToggleButton.value = isDark ? 'off' : 'on';  // Assuming 'off' means dark
});

document.addEventListener('DOMContentLoaded', function() {
    var themeToggleButton = document.querySelector('.theme-toggle');
    var isDark = document.body.classList.contains('dark-theme');
    themeToggleButton.value = isDark ? 'off' : 'on';  // Assuming 'off' means dark
});
