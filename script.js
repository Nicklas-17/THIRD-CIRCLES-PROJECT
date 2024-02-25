const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const month = document.querySelectorAll(".month");
month.forEach((el) => observer.observe(el));

gsap.registerPlugin(ScrollTrigger);

/* trailer */

const trailer = document.getElementById("trailer");

const getTrailerClass = (type) => {
  switch (type) {
    case "video":
      return "fi fi-sr-play";

    default:
      return "fa-solid fa-arrow-up-right";
      break;
  }
};

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 7 : 1})`,
  };

  trailer.animate(keyframes, { duration: 800, fill: "forwards" });
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
};
