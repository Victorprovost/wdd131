const form = document.querySelector('#enrollment-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    const enrollmentData = {
        name,
        email,
        phone,
    };
    localStorage.setItem('enrollment', JSON.stringify(enrollmentData));

    window.location.href = 'thankyou.html';
});