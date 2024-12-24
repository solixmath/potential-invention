document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust the delay as needed
});
