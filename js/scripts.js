document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const body = document.body;
    const modeLabel = document.querySelector('#mode-label');

    // Verifica se os elementos existem antes de adicionar o evento
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                body.classList.add('dark-theme');
                modeLabel.textContent = "Modo Claro";
            } else {
                body.classList.remove('dark-theme');
                modeLabel.textContent = "Modo Escuro";
            }
        });
    }
});