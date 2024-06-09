document.addEventListener("DOMContentLoaded", function() {
    var heartAnimation = document.getElementById("heartAnimation");
    var content = document.getElementById("content");

    heartAnimation.addEventListener("click", function() {
        setTimeout(function() {
            heartAnimation.style.display = "none"; 
            content.style.display = "block"; 
            document.body.classList.add("second-bg"); 
        }, 1000); 
    });
});

const titulo = document.getElementById('titulo');
const message = document.querySelector('.message');

titulo.classList.add('animate'); 

titulo.addEventListener('animationend', () => {
    message.classList.add('animate'); 
});


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
