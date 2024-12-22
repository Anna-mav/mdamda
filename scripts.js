
document.querySelector('.animated-svg').addEventListener('mouseenter', function () {
    this.style.animation = 'pulse 2s infinite';
});

document.querySelector('.animated-svg').addEventListener('mouseleave', function () {
    this.style.animation = 'fadeIn 3s ease-in-out infinite alternate';
});

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}
