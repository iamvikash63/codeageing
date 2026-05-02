// JS: Reveal course page sections on scroll
const courseRevealItems = document.querySelectorAll(".reveal-course");

if (courseRevealItems.length) {
  const courseRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18
  });

  courseRevealItems.forEach((item) => {
    courseRevealObserver.observe(item);
  });
}
