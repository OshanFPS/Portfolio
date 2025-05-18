<script>
  const toggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
  };

  hamburger.onclick = () => {
    navLinks.classList.toggle("active");
  };
</script>
