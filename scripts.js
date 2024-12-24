document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust the delay as needed

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
