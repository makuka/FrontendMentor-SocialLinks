const socialLinks = document.querySelectorAll('.social-links .link');

socialLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.target.getAttribute('href');
    window.open(url, '_blank');
  });
});