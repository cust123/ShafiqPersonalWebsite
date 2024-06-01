// experience section dynamic data handling starts here

// JavaScript object to hold the experience data
let experienceData = [
  {
    id: 1,
    time: "2018 — 2024",
    title: "Lead Engineer · Upstatement",
    description: [
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Node.js",
      "PHP",
      "Contentful",
    ],
  },
  {
    id: 2,
    time: "2016 — 2018",
    title: "Software Engineer · ABC Company",
    description: [
      "Worked on developing and maintaining web applications for various clients, focusing on frontend development and user experience design.",
      "Assisted in various development tasks, including bug fixes, feature implementations, and code reviews under the guidance of senior developers.",
    ],
    skills: ["JavaScript", "HTML & CSS", "Angular", "SASS"],
  },
  {
    id: 3,
    time: "2015 — 2016",
    title: "Intern · XYZ Company",
    description: [
      "Assisted in the development of internal tools and websites.",
      "Learned about various frontend and backend technologies under the guidance of experienced developers.",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

// Function to insert the data into the HTML
function populateExperienceSection(data) {
  const experienceCardsContainer = document.getElementById("experienceCards");
  const previousExperienceCardsContainer = document.getElementById(
    "previousExperienceCards"
  );

  experienceCardsContainer.innerHTML = "";
  previousExperienceCardsContainer.innerHTML = "";

  data.forEach((experience, index) => {
    // Create card element
    const card = document.createElement("div");
    card.className =
      "w-full bg-darkblue p-6 rounded-lg shadow-lg mb-8 border border-gray-700 hover:shadow-xl hover:border-teal-400 transition duration-300";
    card.dataset.id = experience.id;

    // Create card content
    card.innerHTML = `
          <div class="w-full flex items-center mb-4">
            <span class="text-gray-400">${experience.time}</span>
            <h3 class="ml-4 text-2xl font-normal text-customColor">${
              experience.title
            }</h3>
          </div>
          ${experience.description
            .map(
              (paragraph) =>
                `<p class="text-gray-300 mb-6 text-justify">${paragraph}</p>`
            )
            .join("")}
          <div class="flex flex-wrap gap-2">
            ${experience.skills
              .map(
                (skill) => `
              <span class="px-3 py-1 bg-teal-1000 text-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 transition duration-300">${skill}</span>
            `
              )
              .join("")}
          </div>
        `;

    // Append card to the appropriate container
    if (index === 0) {
      experienceCardsContainer.appendChild(card);
    } else {
      previousExperienceCardsContainer.appendChild(card);
    }
  });
}

// Call the function to populate the Experience section
populateExperienceSection(experienceData);

// Function to add a new experience
function addExperience(newExperience) {
  experienceData.push(newExperience);
  populateExperienceSection(experienceData);
}

// Function to add a new paragraph to an existing experience
function addParagraphToExperience(id, newParagraph) {
  const experience = experienceData.find((experience) => experience.id === id);
  if (experience) {
    experience.description.push(newParagraph);
    populateExperienceSection(experienceData);
  }
}

// experience section dynamic data handling starts here
