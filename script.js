document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Nav Toggle Mechanics
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Minimal burger icon mutation layout
      const bars = menuBtn.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.toggle('mutated'));
    });

    // Dismiss layer on direct navigational selection
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active Navigation Tracking Link Pipeline (ScrollSpy)
  const structuralSections = document.querySelectorAll('section[id]');
  const navigationItems = document.querySelectorAll('.nav-item');

  const viewportConfig = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const trackingEngine = new IntersectionObserver((observables) => {
    observables.forEach(observable => {
      if (observable.isIntersecting) {
        const structuralId = observable.target.getAttribute('id');
        
        navigationItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${structuralId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, viewportConfig);

  structuralSections.forEach(section => trackingEngine.observe(section));

  // Connect Anchor Interactive Diagnostics Alert
  const actionButton = document.querySelector('.btn-primary');
  if (actionButton) {
    actionButton.addEventListener('click', (event) => {
      // Allow scroll execution while generating diagnostic notification
      console.log('Handshake initiated with system node: Renz Chrysler L. Paragele');
    });
  }
});
