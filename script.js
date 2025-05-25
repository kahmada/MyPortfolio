// script.js

function createRaindrop() {
    const rain = document.getElementById('rain');
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
  
    drop.style.left = `${Math.random() * window.innerWidth}px`;
    drop.style.animationDuration = `${Math.random() * 0.5 + 0.8}s`;
    drop.style.opacity = Math.random();
  
    rain.appendChild(drop);
  
    setTimeout(() => {
      rain.removeChild(drop);
    }, 2000); // Remove after animation
  }
  
  function startRain() {
    setInterval(createRaindrop, 100);
  }
  
  document.addEventListener('DOMContentLoaded', startRain);
  