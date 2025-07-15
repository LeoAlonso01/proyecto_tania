document.addEventListener('DOMContentLoaded', function() {
  // 1. Smooth scrolling para los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Efecto de aparición suave al hacer scroll
  const fadeElements = document.querySelectorAll('section, aside, h1, h2, h3, p, img');
  
  const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      // Si el elemento está parcialmente visible
      if (elementTop < windowHeight * 0.75 && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Configuración inicial para los elementos
  fadeElements.forEach(element => {
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    element.style.opacity = '0';
    
    // Efectos diferentes para distintos elementos
    if (element.tagName === 'SECTION') {
      element.style.transform = 'translateY(30px)';
    } else if (element.tagName === 'IMG') {
      element.style.transform = 'scale(0.95)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.8s ease-out';
    } else if (element.tagName === 'ASIDE') {
      element.style.transform = 'rotate(5deg)';
      element.style.transition = 'opacity 0.8s ease-out, transform 1s ease-out, box-shadow 1s ease-out';
    } else {
      element.style.transform = 'translateY(20px)';
    }
  });

  // 3. Efecto especial para el aside de Talavera al hacer hover
  const talaveraAside = document.querySelector('aside');
  if (talaveraAside) {
    talaveraAside.addEventListener('mouseenter', function() {
      this.style.transform = 'rotate(0deg) scale(1.02)';
      this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    });
    
    talaveraAside.addEventListener('mouseleave', function() {
      this.style.transform = 'rotate(2deg)';
      this.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
    });
  }

  // 4. Efecto de sombra dinámica al hacer scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('section:first-of-type');
    
    if (heroSection) {
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
    
    // Aplicar sombra más pronunciada al header al hacer scroll
    if (scrollPosition > 50) {
      document.querySelector('aside').style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
      document.querySelector('aside').style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
    }
  });

  // Ejecutar al cargar y al hacer scroll
  fadeInOnScroll();
  window.addEventListener('scroll', fadeInOnScroll);
  
  // 5. Efecto de rotación aleatoria para el aside al cargar
  if (talaveraAside) {
    const randomRotation = (Math.random() * 6) - 3; // Entre -3 y 3 grados
    talaveraAside.style.transform = `rotate(${randomRotation}deg)`;
  }
});