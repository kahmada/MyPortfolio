const createRain = () => {
  const rainContainer = document.getElementById('rain-container');
  const raindropsCount = 50;
  
  for (let i = 0; i < raindropsCount; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    
    // Random properties
    const left = Math.random() * 100;
    const width = Math.random() * 2 + 1;
    const height = Math.random() * 10 + 10;
    const animationDuration = Math.random() * 1 + 0.5;
    const animationDelay = Math.random() * 3;
    const opacity = Math.random() * 0.7 + 0.3;
    
    // Apply styles
    drop.style.left = `${left}%`;
    drop.style.width = `${width}px`;
    drop.style.height = `${height}px`;
    drop.style.animationDuration = `${animationDuration}s`;
    drop.style.animationDelay = `${animationDelay}s`;
    drop.style.opacity = opacity;
    
    rainContainer.appendChild(drop);
  }
  
  // Hide the rain animation after 6 seconds
  setTimeout(() => {
    rainContainer.style.display = 'none';
  }, 6000);
};

// Scroll effects
const handleScroll = () => {
  const elements = document.querySelectorAll('.fade-in');
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  
  // Header effect
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Active navigation links
  const sections = ['home', 'about', 'projects', 'process', 'contact'];
  let currentSection = 'home';
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      if (scrollPosition >= offsetTop) {
        currentSection = section;
      }
    }
  }
  
  const navItems = document.querySelectorAll('nav ul li');
  navItems.forEach(item => {
    item.classList.remove('active');
    const link = item.querySelector('a');
    if (link && link.getAttribute('href') === `#${currentSection}`) {
      item.classList.add('active');
    }
  });
  
  // Fade in elements when they become visible
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const isVisible = elementTop < window.innerHeight - 100;
    
    if (isVisible) {
      element.classList.add('visible');
    }
  });
};

// Handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  console.log('Form submitted:', { name, email, message });
  alert('Thank you for your message! I\'ll get back to you soon.');
  
  event.target.reset();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createRain();
  handleScroll(); // Run once on load
  
  window.addEventListener('scroll', handleScroll);
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});
  