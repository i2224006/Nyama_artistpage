const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.classList.add('loaded');
});

loading.addEventListener('animationend', () => {
    loading.classList.add('loaded');
});