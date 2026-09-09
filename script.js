```javascript
/* ==========================================
   SARTHI BUILDTECH
   PROPERTY DATA
========================================== */

const properties = [

    {
        id: 1,

        type: "Residential",

        title: "Modern Family Residence",

        location: "Sample Location, India",

        price: "₹85 Lakh*",

        area: "1,850 sq.ft.",

        beds: "3 Beds",

        baths: "3 Baths",

        image:
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",

        description:
            "Demo property card with editable details for a modern family home."
    },


    {
        id: 2,

        type: "Commercial",

        title: "Premium Business Office",

        location: "Sample Business District, India",

        price: "₹1.75 Cr*",

        area: "2,450 sq.ft.",

        beds: "—",

        baths: "2 Washrooms",

        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",

        description:
            "Demo commercial space suitable for office or professional use."
    },


    {
        id: 3,

        type: "Luxury",

        title: "Contemporary Luxury Villa",

        location: "Sample Premium Locality, India",

        price: "₹2.40 Cr*",

        area: "3,200 sq.ft.",

        beds: "4 Beds",

        baths: "4 Baths",

        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",

        description:
            "Demo luxury villa listing with spacious interiors and premium styling."
    },


    {
        id: 4,

        type: "Plot",

        title: "Residential Development Plot",

        location: "Sample Growth Corridor, India",

        price: "₹62 Lakh*",

        area: "1,800 sq.ft.",

        beds: "Plot",

        baths: "—",

        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",

        description:
            "Demo land listing. Replace with verified plot size, title and location details."
    },


    {
        id: 5,

        type: "Investment",

        title: "Income-Focused Property",

        location: "Sample Investment Zone, India",

        price: "₹1.10 Cr*",

        area: "1,600 sq.ft.",

        beds: "2 Beds",

        baths: "2 Baths",

        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",

        description:
            "Demo investment listing. Add verified rental/yield information only when available."
    },


    {
        id: 6,

        type: "Residential",

        title: "Elegant City Apartment",

        location: "Sample City Centre, India",

        price: "₹72 Lakh*",

        area: "1,420 sq.ft.",

        beds: "3 Beds",

        baths: "2 Baths",

        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",

        description:
            "Demo apartment listing with editable property specifications."
    }

];



/* ==========================================
   PROPERTY DISPLAY
========================================== */

const propertyGrid =
    document.getElementById("propertyGrid");

const emptyState =
    document.getElementById("emptyState");


function displayProperties(filter = "All") {

    let filteredProperties;

    if (filter === "All") {

        filteredProperties = properties;

    } else {

        filteredProperties =
            properties.filter(
                property =>
                    property.type === filter
            );

    }


    propertyGrid.innerHTML = "";


    if (filteredProperties.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    filteredProperties.forEach(property => {

        const card =
            document.createElement("article");

        card.className =
            "property-card";


        card.innerHTML = `

            <div class="property-image">

                <img
                    src="${property.image}"
                    alt="${property.title}">

                <span class="property-tag">
                    ${property.type}
                </span>

                <span class="property-price">
                    ${property.price}
                </span>

            </div>


            <div class="property-body">

                <h3>
                    ${property.title}
                </h3>


                <div class="location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${property.location}

                </div>


                <div class="meta">

                    <span>
                        <i class="fa-solid fa-ruler-combined"></i>
                        ${property.area}
                    </span>

                    <span>
                        <i class="fa-solid fa-bed"></i>
                        ${property.beds}
                    </span>

                    <span>
                        <i class="fa-solid fa-bath"></i>
                        ${property.baths}
                    </span>

                </div>


                <p class="property-desc">

                    ${property.description}

                </p>


                <div class="card-actions">

                    <button
                        class="small-btn light details-btn"
                        data-id="${property.id}">

                        View Details

                    </button>


                    <a
                        href="#contact"
                        class="small-btn dark">

                        Enquire Now

                    </a>

                </div>

            </div>

        `;


        propertyGrid.appendChild(card);

    });


    document
        .querySelectorAll(".details-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(this.dataset.id);

                    openPropertyModal(id);

                }
            );

        });

}


displayProperties();



/* ==========================================
   PROPERTY FILTERS
========================================== */

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            const filter =
                this.dataset.filter;


            displayProperties(filter);


            document
                .getElementById("properties")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});



/* ==========================================
   CATEGORY BUTTONS
========================================== */

const categoryButtons =
    document.querySelectorAll(".text-button");


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const filter =
                this.dataset.filter;


            filterButtons.forEach(btn => {

                btn.classList.remove("active");

                if (
                    btn.dataset.filter === filter
                ) {

                    btn.classList.add("active");

                }

            });


            displayProperties(filter);


            document
                .getElementById("properties")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});



/* ==========================================
   PROPERTY SEARCH
========================================== */

const searchButton =
    document.getElementById("searchBtn");


searchButton.addEventListener(
    "click",
    function () {

        const location =
            document
                .getElementById("location")
                .value
                .trim();


        const type =
            document
                .getElementById("propertyType")
                .value;


        const message =
            document.getElementById(
                "searchMessage"
            );


        if (type) {

            displayProperties(type);


            filterButtons.forEach(btn => {

                btn.classList.toggle(
                    "active",
                    btn.dataset.filter === type
                );

            });

        } else {

            displayProperties("All");

        }


        if (location) {

            message.innerHTML =
                `Showing demo properties for <strong>${location}</strong>.
                 Replace the demo inventory with your real listings.`;

        } else {

            message.innerHTML =
                `Showing demo ${type || "all"} properties.
                 Replace the demo inventory with your real listings.`;

        }


        message.style.display = "block";


        document
            .getElementById("properties")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);



/* ==========================================
   PROPERTY MODAL
========================================== */

const modal =
    document.getElementById("propertyModal");


const modalClose =
    document.getElementById("modalClose");


function openPropertyModal(id) {

    const property =
        properties.find(
            item => item.id === id
        );


    if (!property) return;


    document.getElementById(
        "modalImage"
    ).src = property.image;


    document.getElementById(
        "modalImage"
    ).alt = property.title;


    document.getElementById(
        "modalType"
    ).textContent = property.type;


    document.getElementById(
        "modalTitle"
    ).textContent = property.title;


    document.getElementById(
        "modalLocation"
    ).innerHTML =
        `<i class="fa-solid fa-location-dot"></i>
         ${property.location}`;


    document.getElementById(
        "modalMeta"
    ).innerHTML = `

        <span>
            ${property.area}
        </span>

        <span>
            ${property.beds}
        </span>

        <span>
            ${property.baths}
        </span>

    `;


    document.getElementById(
        "modalPrice"
    ).textContent =
        property.price;


    document.getElementById(
        "modalDescription"
    ).textContent =
        property.description;


    modal.classList.add("open");

}



function closeModal() {

    modal.classList.remove("open");

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


document
    .getElementById("modalEnquire")
    .addEventListener(
        "click",
        closeModal
    );



/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.getElementById("menuBtn");


const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("open");


        if (
            navMenu.classList.contains("open")
        ) {

            menuButton.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    }
);


document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("open");

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }
        );

    });



/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }
);



/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;


                const counter =
                    entry.target;


                const target =
                    Number(counter.dataset.target);


                let current = 0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(target / 60)
                    );


                const timer =
                    setInterval(
                        () => {

                            current += increment;


                            if (
                                current >= target
                            ) {

                                current = target;

                                clearInterval(timer);

                            }


                            counter.textContent =
                                current;

                        },
                        25
                    );


                counterObserver.unobserve(counter);

            });

        },
        {
            threshold: .5
        }
    );


counters.forEach(
    counter =>
        counterObserver.observe(counter)
);



/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const formMessage =
            document.getElementById(
                "formMessage"
            );


        formMessage.textContent =
            "Thank you! Your enquiry has been received in this demo. Connect this form to your email, CRM, WhatsApp or backend before publishing.";


        contactForm.reset();

    }
);



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.id;

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }
);
```
