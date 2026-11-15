
document.addEventListener("DOMContentLoaded", function () {

    // Dynamic Copyright Year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector(".custom-navbar");

    function handleNavbarScroll() {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    }

    handleNavbarScroll();
    window.addEventListener("scroll", handleNavbarScroll);

    // Close Mobile Navbar After Clicking a Link
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("mainNav");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show") &&
                window.bootstrap
            ) {
                bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".service-card, .course-card, .info-card, .section-heading, .about-image"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });
    }

    // WhatsApp Course Enquiry
    const courseButtons = document.querySelectorAll(".course-enquiry");

    courseButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const course = button.getAttribute("data-course");

            const message =
                "Hello Shivaaksha HR Training Academy,\n" +
                "I am interested in the " + course + " course.\n" +
                "Please share the details.";

            const whatsappURL =
                "https://wa.me/918777635624?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank", "noopener");
        });
    });

    // Contact Form WhatsApp Integration
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();

            const whatsappMessage =
                "Hello Shivaaksha CodeCraft Academy!\n\n" +
                "Name: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "Email: " + email + "\n" +
                "Enquiry: " + subject + "\n" +
                "Message: " + message;

            const whatsappURL =
                "https://wa.me/918777635624?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank", "noopener");
        });
    }

});



