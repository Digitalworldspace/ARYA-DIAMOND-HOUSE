document.addEventListener("DOMContentLoaded", () => {

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const requirement = document.getElementById("requirement");

  document.querySelectorAll("[data-product]").forEach(link => {
    link.addEventListener("click", () => {
      const product = link.dataset.product;

      if (requirement) {
        [...requirement.options].forEach(option => {
          if (option.text === product) requirement.value = option.value;
        });
      }
    });
  });

  const form = document.getElementById("enquiryForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const product = document.getElementById("requirement").value;
      const shape = document.getElementById("shape").value;
      const carat = document.getElementById("carat").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone) {
        alert("Please enter your name and phone number.");
        return;
      }

      const text = `Hello ARYA DIAMOND HOUSE,

I would like to enquire about a diamond.

Diamond Type: ${product}
Shape: ${shape}
Approx. Carat: ${carat || "Not specified"}

Name: ${name}
Phone / WhatsApp: ${phone}

Message:
${message || "Please share suitable options and available specifications."}

Thank you.`;

      const url =
        "https://wa.me/916352925472?text=" +
        encodeURIComponent(text);

      window.open(url, "_blank");
    });
  }

});
