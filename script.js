function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById("menu").classList.remove("active");
    });
});
