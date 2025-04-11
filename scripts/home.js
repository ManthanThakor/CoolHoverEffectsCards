document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Handle active navigation links
  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.href === currentLocation) {
      link.classList.add("active");
    }
  });

  // Add animation classes to elements as they scroll into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".feature-card, .card-preview, .info-item"
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--i", index + 1);

      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.classList.add("fadeIn");
      }
    });
  };

  // Animate elements on page load
  setTimeout(animateOnScroll, 300);

  // Animate elements on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Handle form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple form validation
      const inputs = contactForm.querySelectorAll("input, textarea");
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "";
        }
      });

      if (isValid) {
        // Show success message (in real implementation, you'd send the form data to a server)
        alert("Form submitted successfully!");
        contactForm.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }

  // Dynamic Background Effect
  const createDynamicBackground = function () {
    const dynamicBg = document.createElement("div");
    dynamicBg.classList.add("dynamic-bg");
    document.body.appendChild(dynamicBg);
  };

  createDynamicBackground();

  // Interactive elements for 3D cards
  document.querySelectorAll(".hover-card-3d").forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xRotation = ((y - rect.height / 2) / rect.height) * 20;
      const yRotation = ((x - rect.width / 2) / rect.width) * -20;

      card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    card.addEventListener("mouseout", function () {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
