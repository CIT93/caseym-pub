// Used chatGPT to help, but even then I still feel stuck
const form = document.getElementById('greetingForm');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');
form.addEventListener('Submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
        greetingMessage.textContent = `Hello, ${name}!`;
    } else {
        greetingMessage.textContent = "Please enter your name.";
    }
    form.requestFullscreen();
});