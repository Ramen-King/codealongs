window.onload = init;

function init() {
    document.querySelector('.toggle-button')
        .addEventListener('click', toggleTheme);
}

function toggleTheme(event) {
    event.preventDefault();

    const app = document.querySelector('.app');
    const button = event.target;
    const header = document.querySelector('.header')

    app.classList.toggle('dark-theme');
    button.classList.toggle('dark-theme');

    button.innerText = button.innerText === 'SWITCH TO LIGHT MODE'
        ? `SWITCH TO DARK MODE`
        : `SWITCH TO LIGHT MODE`;

    header.innerText = `WHY DID YOU PUSH THE BUTTON.`
    header.classList.replace('happy', 'mad')
}