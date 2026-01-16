

const form = document.getElementById("contact-form");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.textContent = "Sending...";

  const data = {
    Name: form.Name.value,
    Contact: form.Contact.value,
    Email: form.Email.value,
    Description: form.Description.value


  };

  fetch("https://script.google.com/macros/s/AKfycby-avv5qo9pAsibfbbajDHObBQBEkFZTryxdfWp0AyZ8u8tat7NBVOfyVr-zMKCabbhbg/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      status.innerText = "Message sent successfully! Codeageing team will reach you soon!";
      form.reset();
    })
    .catch(() => {
      status.innerText = "Something went wrong!";
    });
});





// Scroll to top button
const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Footer animation on scroll
const footer = document.querySelector(".animate-footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (footerTop < screenHeight - 100) {
    footer.classList.add("show");
  }
});

