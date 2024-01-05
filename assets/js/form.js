document.addEventListener('DOMContentLoaded', function () {
    hideForm();

    document.getElementById('BookTable').addEventListener('click', function () {
        displayForm();
    });
});

function handleFormSubmission(event) {
    event.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName.length < 2) {
        alert('Navn skal være mindst 2 bogstaver langt.');
        return;
    }

    if (lastName.length < 2) {
        alert('Efternavn skal være mindst 2 bogstaver langt.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Indtast en gyldig email-adresse.');
        return;
    }

    if (password.length < 6) {
        alert('Adgangskoden skal være mindst 6 karakterer lang.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Adgangskoderne matcher ikke.');
        return;
    }

    alert('Tilmelding succesfuld!');
    // Nulstil formularen eller udfør andre handlinger, hvis nødvendigt
    document.getElementById('signupForm').reset();
    // Gå tilbage til hovedindholdet
    window.location.href = "Dinny.html";
} 

function hideForm() {
    let formContainer = document.getElementById('container-main');
    formContainer.style.display = "none";
}
function displayForm() {
    let formContainer = document.getElementById('container-main');
    formContainer.style.display = "block";
}