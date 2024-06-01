// JavaScript object to hold the certification data
let certificationData = [
  {
    id: 1,
    time: "2018 — 2024",
    title: "Google Project Management Professional Certificate",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rem deleniti possimus eius vero aspernatur. Exercitationem explicabo id minus praesentium delectus odit, ratione, iste numquam harum illo vel rem quaerat.",
    ],
    skills: [
      "Project Planning",
      "Project Execution",
      "Budgeting and Scheduling",
    ],
  },
  {
    id: 2,
    time: "2021 — 2022",
    title: "AWS Certified Solutions Architect",
    description: [
      "Successfully completed the AWS Certified Solutions Architect course, covering a wide range of topics including cloud infrastructure, security, and cost management.",
    ],
    skills: ["AWS", "Cloud Architecture", "Security"],
  },
];

// Function to insert the data into the HTML
function populateCertificationSection(data) {
  const certificationCardsContainer =
    document.getElementById("certificationCards");
  certificationCardsContainer.innerHTML = "";

  data.forEach((certification) => {
    // Create card element
    const card = document.createElement("div");
    card.className =
      "w-full bg-darkblue p-6 rounded-lg shadow-lg mb-8 border border-gray-700 hover:shadow-xl hover:border-teal-400 transition duration-300";
    card.dataset.id = certification.id;

    // Create card content
    card.innerHTML = `
        <div class="w-full flex items-center mb-4">
          <span class="text-gray-400">${certification.time}</span>
          <h3 class="ml-4 text-2xl font-normal text-customColor">${
            certification.title
          }</h3>
        </div>
        ${certification.description
          .map(
            (paragraph) =>
              `<p class="text-gray-300 mb-6 text-justify">${paragraph}</p>`
          )
          .join("")}
        <div class="flex flex-wrap gap-2">
          ${certification.skills
            .map(
              (skill) => `
            <span class="px-3 py-1 bg-teal-1000 text-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 transition duration-300">${skill}</span>
          `
            )
            .join("")}
        </div>
      `;

    // Append card to the container
    certificationCardsContainer.appendChild(card);
  });
}

// Call the function to populate the Certification section
populateCertificationSection(certificationData);

// Function to add a new certification
function addCertification(newCertification) {
  certificationData.push(newCertification);
  populateCertificationSection(certificationData);
}
