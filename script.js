
  function toggleForm() {
    const form = document.getElementById("signup-form");
    form.style.display = form.style.display === "flex" ? "none" : "flex";
  }

  // Make the Sign Up button trigger the form
  document.querySelectorAll('a[href="#signup"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      toggleForm();
    });
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    const slider = document.getElementById("review-slider");
    const total = slides.length;
    if (index >= total) currentSlide = 0;
    else if (index < 0) currentSlide = total - 1;
    else currentSlide = index;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  setInterval(() => {
    nextSlide();
  }, 5000);

  