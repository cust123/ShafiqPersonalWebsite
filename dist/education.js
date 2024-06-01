// Education data array
const educationData = [
  {
    period: "2018 — 2024",
    degree: "MS in Software Systems and Engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rem deleniti possimus eius vero aspernatur. Exercitationem explicabo id minus praesentium delectus odit, ratione, iste numquam harum illo vel rem quaerat.",
    tags: ["Software Bugs", "Software Specification", "Machine learning"],
  },
  {
    period: "2010 — 2014 ",
    degree: "BS in Computer Science ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rem deleniti possimus eius vero aspernatur. Exercitationem explicabo id minus praesentium delectus odit, ratione, iste numquam harum illo vel rem quaerat.",
    tags: ["Software engineering", "Alogrithms ", "Data Structures"],
  },
];

// Function to create and return an education card element
function createEducationCard({ period, degree, description, tags }) {
  // Create the card container
  const card = document.createElement("div");
  card.className =
    "w-full bg-darkblue p-6 rounded-lg shadow-lg mb-8 border border-gray-700 hover:shadow-xl hover:border-teal-400 transition duration-300";

  // Add period and degree
  const header = document.createElement("div");
  header.className = "w-full flex items-center mb-4";
  const periodElement = document.createElement("span");
  periodElement.className = "text-gray-400";
  periodElement.textContent = period;
  const degreeElement = document.createElement("h3");
  degreeElement.className = "ml-4 text-2xl font-normal text-customColor";
  degreeElement.textContent = degree;
  header.appendChild(periodElement);
  header.appendChild(degreeElement);
  card.appendChild(header);

  // Add description
  const descriptionElement = document.createElement("p");
  descriptionElement.className = "text-gray-300 mb-6 text-justify";
  descriptionElement.textContent = description;
  card.appendChild(descriptionElement);

  // Add tags
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "flex flex-wrap gap-2";
  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className =
      "px-3 py-1 bg-teal-1000 text-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 transition duration-300";
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
  card.appendChild(tagsContainer);

  return card;
}

// Function to render the education section
function renderEducationSection() {
  const container = document.getElementById("education-container");
  container.innerHTML = ""; // Clear existing content
  educationData.forEach((education) => {
    const card = createEducationCard(education);
    container.appendChild(card);
  });
}

// Initial render
renderEducationSection();
