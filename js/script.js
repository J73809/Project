const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // stop default jump

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const navHeight = document.querySelector('nav').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navHeight - 10, // adjust offset
      behavior: 'smooth'
    });
  });
});
