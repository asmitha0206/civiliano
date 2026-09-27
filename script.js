// Add Text-to-Speech functionality
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.getElementById('heroText');
    const heroDesc = document.getElementById('heroDesc');
    const heroButton = document.getElementById('heroButton');

    // Function to handle text-to-speech
    const speakText = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.rate = 1; // Adjust the speaking rate
        window.speechSynthesis.speak(speech);
    };

    // Add event listeners to elements
    heroText.addEventListener('click', () => speakText(heroText.textContent));
    heroDesc.addEventListener('click', () => speakText(heroDesc.textContent));
    heroButton.addEventListener('click', () => speakText('You clicked on the Learn More button'));
});
