document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MENÚ RESPONSIVE
  ===================================================== */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Cerrar menú al hacer click en un enlace

    const navLinks = mainNav.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

      });

    });

  }


  /* =====================================================
     SLIDER
  ===================================================== */

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");

  let currentSlide = 0;
  let sliderInterval;


  function showSlide(index) {

    if (!slides.length) return;

    if (index >= slides.length) {
      currentSlide = 0;
    }

    if (index < 0) {
      currentSlide = slides.length - 1;
    }

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }


  function nextSlide() {

    currentSlide++;

    showSlide(currentSlide);

  }


  function prevSlide() {

    currentSlide--;

    showSlide(currentSlide);

  }


  function startSlider() {

    clearInterval(sliderInterval);

    sliderInterval = setInterval(() => {

      nextSlide();

    }, 5000);

  }


  if (slides.length) {

    showSlide(currentSlide);

    startSlider();

  }


  if (nextButton) {

    nextButton.addEventListener("click", () => {

      nextSlide();

      startSlider();

    });

  }


  if (prevButton) {

    prevButton.addEventListener("click", () => {

      prevSlide();

      startSlider();

    });

  }


  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      currentSlide = index;

      showSlide(currentSlide);

      startSlider();

    });

  });


  /* =====================================================
     FORMULARIO → WHATSAPP
  ===================================================== */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

      event.preventDefault();

      const formData = new FormData(contactForm);

      const nombre = formData.get("nombre");
      const telefono = formData.get("telefono");
      const email = formData.get("email");
      const servicio = formData.get("servicio");
      const mensaje = formData.get("mensaje");


      const texto = `
Hola EL ÁNGEL, quiero solicitar una cotización.

Nombre: ${nombre}

Teléfono: ${telefono}

Correo: ${email}

Servicio: ${servicio}

Mensaje:
${mensaje}
      `;


      const whatsappURL =
        "https://wa.me/51949866685?text=" +
        encodeURIComponent(texto);


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    });

  }


  /* =====================================================
     AÑO DEL FOOTER
  ===================================================== */

  const year = document.getElementById("year");

  if (year) {

    year.textContent = new Date().getFullYear();

  }


  /* =====================================================
     ESCAPE → CERRAR MENÚ
  ===================================================== */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (mainNav) {
        mainNav.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }

    }

  });

});
