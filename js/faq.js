/*-----------------Tab Content And Accordion Menu-----------------*/

document.addEventListener("DOMContentLoaded", () => {
    const navLink = document.querySelectorAll(".nav-link");
    const contents = document.querySelectorAll(".item");

    navLink.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(`#${tab.dataset.tab}`);
            if (!target) return;

            navLink.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            target.classList.add("active");

            const accordions = target.querySelectorAll(".accordion");
            accordions.forEach((accordion) => {
                const headers = accordion.querySelectorAll(".accordion-header");
                headers.forEach((header) => {
                    const body = header.nextElementSibling;
                    if (!body || !body.classList.contains("accordion-body")) return;

                    if (header.classList.contains("active")) {
                        body.style.maxHeight = body.scrollHeight + 15 + "px";
                    } else {
                        body.style.maxHeight = null;
                    }
                });
            });
        });
    });

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const headers = accordion.querySelectorAll(".accordion-header");

        headers.forEach((header) => {
            header.addEventListener("click", () => {
                const body = header.nextElementSibling;
                if (!body || !body.classList.contains("accordion-body")) return;

                if (header.classList.contains("active")) {
                    header.classList.remove("active");
                    body.classList.remove("active");
                    body.style.maxHeight = null;
                } else {
                    headers.forEach((h) => {
                        const otherBody = h.nextElementSibling;
                        if (!otherBody || !otherBody.classList.contains("accordion-body")) return;

                        h.classList.remove("active");
                        otherBody.classList.remove("active");
                        otherBody.style.maxHeight = null;
                    });

                    header.classList.add("active");
                    body.classList.add("active");
                    body.style.maxHeight = body.scrollHeight + 15 + "px";
                }
            });
        });
    });

    const firstAccordionHeader = document.querySelector(".accordion-header.active");
    if (firstAccordionHeader) {
        const firstBody = firstAccordionHeader.nextElementSibling;
        if (firstBody && firstBody.classList.contains("accordion-body")) {
            firstBody.style.maxHeight = firstBody.scrollHeight + 15 + "px";
        }
    }
});
