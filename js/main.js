// Variables
const speakerCardWrapper = document.querySelector('.speaker-card-wrapper');
// Data Storage - Array of objects for the speakers cards
const speakers = [
  {
    name: 'Curt Schilling',
    title: 'Founder of 38 Studios',
    description:
      'After retiring, he founded Green Monster Games, which was renamed 38 Studios. The company released Kingdoms of Amalur: Reckoning in February 2012.',
    image: 'checkered_business-hindi-man-1.png',
    imageAlt: 'Yochai',
  },
  {
    name: 'Jennifer MacLean',
    title: 'Executive director of the IGDA',
    description:
      'After beginning her career working with Brian Reynolds and Sid Meier at Microprose Software in 1992, she joined AOL in 1996, where she became Programming Director for the Games Channel.',
    image: 'Checkered_guestSpeaker.png',
    imageAlt: 'Jennifer',
  },
  {
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    image: 'checkered-blonde-man.png',
    imageAlt: 'Yochai',
  },
  {
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description:
      'As the Main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'checkered-business-woman-1.png',
    imageAlt: 'SohYeong',
  },
  {
    name: 'Todd McFarlane',
    title:
      'Canadian comic book creator, artist, writer, filmmaker and entrepreneur',
    description:
      "In the late 1980s and early 1990s, McFarlane became a comic book superstar due to his work on Marvel Comics' Spider-Man franchise, on which he was the artist to draw the first full appearances of the character Venom.",
    image: 'checkered-toddMcFar.png',
    imageAlt: 'Todd',
  },
  {
    name: 'Yuzo Koshiro',
    title: 'President of the video game development company Ancient.',
    description:
      'Koshiro and his sister Ayano founded the game development company Ancient in 1990.',
    image: 'Checkered_Yuzo-Koshiro.png',
    imageAlt: 'Yuzo',
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
        `,
  )
  .join('');
