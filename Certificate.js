document.getElementById('toggleBtn').addEventListener('click', function () {
    if (this.innerText === 'View More') {
        document.querySelectorAll('.row').forEach(function (row) {
            row.style.display = 'flex';
        });
        this.innerText = 'Less';
    } else {
        document.querySelectorAll('.row').forEach(function (row, index) {
            row.style.display = index === 0 ? 'flex' : 'none';
        });
        this.innerText = 'View More';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('.modal-button');

    modalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';

                const closeButtons = modal.getElementsByClassName('close-button');
                if (closeButtons[0]) {
                    closeButtons[0].addEventListener('click', function () {
                        modal.style.display = 'none';
                    });
                }
            }
        });
    });
});