// Variables
const speakerCardWrapper = document.querySelector(".speaker-card-wrapper");
// Data Storage - Array of objects for the speakers cards
const speakers = [
  {
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
    image: "checkered-blonde-man.png",
    imageAlt: "Yochai",
  },
  {
    name: "SohYeong Noh",
    title: "Director of Art Centre Nabi and a board member of CC Korea",
    description:
      "As the Main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
    image: "checkered-business-woman-1.png",
    imageAlt: "SohYeong",
  },
  {
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
    image: "checkered_business-hindi-man-1.png",
    imageAlt: "Yochai",
  },
  {
    name: "Lila Tretikov",
    title: "Executive Director of the Wikimedia Foundation",
    description:
      "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.",
    image: "Checkered_guestSpeaker.png",
    imageAlt: "Lila",
  },
  {
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
    image: "checkered-blonde-man.png",
    imageAlt: "Yochai",
  },
  {
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
    image: "checkered-blonde-man.png",
    imageAlt: "Yochai",
  },
];

// Speakers cards generator

speakerCardWrapper.innerHTML = speakers
  .map(
    (card) => `
            <div class="d-flex">
              <img
                class="me-3"
                src="/images/speakers-pics/${card.image}"
                alt="${card.imageAlt}"
              />
              <div class="ms-2">
                <h2 class="fw-bold">${card.name}</h2>
                <p class="text-primary fst-italic">
                  ${card.title}
                </p>
                <p>
                  ${card.description}
                </p>
              </div>
            </div>
        `
  )
  .join("");
