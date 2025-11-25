 // Smooth scroll for About link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

// Smooth scroll for Projects link to Projects section
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.getAttribute('href') === '#projects') {
      e.preventDefault();
      const target = document.querySelector('#projects');
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });