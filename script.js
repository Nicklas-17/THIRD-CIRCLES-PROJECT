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
