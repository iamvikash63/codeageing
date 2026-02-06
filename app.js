

const form = document.getElementById("contact-form");
const status = document.getElementById("formStatus");
const countryCode = document.getElementById("countryCode");
const phoneInput = document.getElementById("phone");
const phoneHint = document.querySelector("#phone")?.closest(".field")?.querySelector(".form-hint");

const getRequiredDigits = () => {
  const selected = countryCode.options[countryCode.selectedIndex];
  return Number(selected.getAttribute("data-digits") || 10);
};

const updatePhonePlaceholder = () => {
  const digits = getRequiredDigits();
  phoneInput.placeholder = `${digits}-digit number`;
};

const isDigitsOnly = (value) => /^[0-9]+$/.test(value);

const validatePhone = () => {
  const digits = getRequiredDigits();
  const raw = phoneInput.value.trim();
  const ok = isDigitsOnly(raw) && raw.length === digits;

  if (!ok) {
    if (phoneHint) {
      phoneHint.textContent = `Enter exactly ${digits} digits for ${countryCode.options[countryCode.selectedIndex].text}.`;
      phoneHint.classList.add("error");
    }
    phoneInput.setCustomValidity("Invalid phone number length.");
  } else {
    if (phoneHint) {
      phoneHint.textContent = "Enter digits only. For India, exactly 10 digits.";
      phoneHint.classList.remove("error");
    }
    phoneInput.setCustomValidity("");
  }

  return ok;
};

countryCode.addEventListener("change", () => {
  updatePhonePlaceholder();
  validatePhone();
});

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
  validatePhone();
});

updatePhonePlaceholder();

form.addEventListener("submit", function (e) {
  if (!validatePhone() || !form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
    return;
  }

  e.preventDefault();
  status.textContent = "Sending...";

  const data = {
    Name: form.Name.value,
    Contact: `${countryCode.value} ${form.Contact.value}`,
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

