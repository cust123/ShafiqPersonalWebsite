// areas of expertise  dynamic data hanlding starts here

// JavaScript object to hold the expertise data
const expertiseData = [
  {
    title: "Front End Development",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia,Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    iconSrc: "/dist/assists/ServicesImages/FrontEndDevelopmentImage.png",
    link: "#",
  },
  {
    title: "Back End Development",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    techStack: "Next.js Tailwind CSS Firebase",
    iconSrc: "/dist/assists/ServicesImages/FrontEndDevelopmentImage.png",
    link: "#",
  },
  {
    title: "Software Testing",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    techStack: "Node Express Firebase Vue",
    iconSrc: "/dist/assists/ServicesImages/FrontEndDevelopmentImage.png",
    link: "https://bxtechnologies.net/",
  },
];

// Function to insert the data into the HTML
function populateExpertiseSection(data) {
  const expertiseCardsContainer = document.getElementById("expertiseCards");

  data.forEach((expertise) => {
    // Create card element
    const card = document.createElement("div");
    card.className =
      "w-full md:w-1/4 flex flex-col items-start mb-10 text-left bg-darkblue p-6 rounded-lg border border-gray-700 hover:shadow-2xl hover:border-teal-400 transition duration-300 relative";

    // Create card content
    card.innerHTML = `
          <div class="flex justify-between text-justify items-start w-full mb-4">
            <img class="w-10 h-10" src="${
              expertise.iconSrc
            }" alt="Folder Icon" />
            <a href="${
              expertise.link
            }" target="_blank" class="text-gray-400 hover:text-customColor transition duration-300">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
          <p class="text-2xl font-inter font-semibold text-customColor mt-1">${
            expertise.title
          }</p>
          <p class="font-normal font-inter text-gray-300 mt-2">${
            expertise.description
          }</p>
          ${
            expertise.techStack
              ? `<p class="font-normal font-inter text-gray-400 mt-4">${expertise.techStack}</p>`
              : ""
          }
        `;

    // Append card to container
    expertiseCardsContainer.appendChild(card);
  });
}

// Call the function to populate the Areas of Expertise section
populateExpertiseSection(expertiseData);

// areas of expertise  dynamic data hanlding ends here
