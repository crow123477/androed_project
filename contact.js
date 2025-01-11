const feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert('Дякуємо, ${name}! Ваше повідомлення надіслано.');
    feedbackForm.reset();
});