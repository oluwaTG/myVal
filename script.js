document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const yesValBtn = document.getElementById('yesValBtn');
    const noValBtn = document.getElementById('noValBtn');
    const goBackBtn = document.getElementById('goBackBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const heart = document.getElementById('heart');
    const valMessage = document.getElementById('valMessage');

    // Page 1: Do you have val?
    yesBtn.addEventListener('click', function () {
        page1.classList.add('hidden');
        page3.classList.remove('hidden');
    });

    noBtn.addEventListener('click', function () {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    });

    // Page 2: Will you be my val?
    yesValBtn.addEventListener('click', function () {
        // Hide the buttons
        yesValBtn.classList.add('hidden');
        noValBtn.classList.add('hidden');

        // Show the heart and confetti
        heart.classList.remove('hidden');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Show the message after a short delay
        setTimeout(() => {
            valMessage.classList.remove('hidden');
        }, 1000); // 1 second delay
    });

    noValBtn.addEventListener('click', function () {
        page2.classList.add('hidden');
        page4.classList.remove('hidden');
    });

    // Page 4: Go back and click yes abeg
    goBackBtn.addEventListener('click', function () {
        page4.classList.add('hidden');
        page2.classList.remove('hidden');
    });
});