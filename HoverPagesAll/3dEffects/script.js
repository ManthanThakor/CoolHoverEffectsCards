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
