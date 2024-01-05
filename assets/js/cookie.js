document.addEventListener('DOMContentLoaded', function () {
    openModal();
});

function openModal() {
    let modal = document.getElementById('cookieModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Forhindrer scrolling på hovedsiden
}

function closeModal() {
    let modal = document.getElementById('cookieModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Gendanner scrolling på hovedsiden
}

function selectAll() {
    closeModal();
  
}

function selectChecked() {
    closeModal();
  
}
