document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton) {

    menuButton.addEventListener("click", function () {

      navigation.classList.toggle("open");

    });

  }


  /* CLOSE MOBILE MENU */

  document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function () {

      navigation.classList.remove("open");

    });

  });



  /* =========================
     CURRENT YEAR
  ========================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }



  /* =========================
     PRODUCT ENQUIRY
  ========================= */

  const productLinks =
    document.querySelectorAll("[data-product]");

  const requirement =
    document.getElementById("requirement");


  productLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      const selectedProduct =
        link.getAttribute("data-product");


      if (requirement) {

        for (let option of requirement.options) {

          if (option.text === selectedProduct) {

            requirement.value =
              option.value;

            break;

          }

        }

      }

    });

  });



  /* =========================
     WHATSAPP ENQUIRY FORM
  ========================= */

  const form =
    document.getElementById("enquiryForm");


  if (form) {

    form.addEventListener("submit", function (event) {

      event.preventDefault();


      const name =
        document.getElementById("name")
        .value.trim();


      const phone =
        document.getElementById("phone")
        .value.trim();


      const product =
        document.getElementById("requirement")
        .value;


      const message =
        document.getElementById("message")
        .value.trim();


      if (!name || !phone) {

        alert(
          "Please enter your name and phone number."
        );

        return;

      }


      const whatsappMessage =

`Hello ARYA DIAMOND HOUSE,

I would like to enquire about:

Diamond Requirement:
${product}

Name:
${name}

Phone / WhatsApp:
${phone}

Message:
${message || "Please share suitable diamond options and details."}

Thank you.`;


      const whatsappURL =
        "https://wa.me/916352925472?text=" +
        encodeURIComponent(whatsappMessage);


      window.open(
        whatsappURL,
        "_blank"
      );

    });

  }

});
