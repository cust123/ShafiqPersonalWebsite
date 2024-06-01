// Articles data object
const articlesData = {
  article1: {
    title: "Why Software Testing is important",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rem deleniti possimus eius vero aspernatur. Exercitationem explicabo id minus praesentium delectus odit, ratione, iste numquam harum illo vel rem quaerat.",
  },
  article2: {
    title: "How AI is impacting the software development industry",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam saepe nulla nihil expedita temporibus iure, aperiam sint sit sapiente unde neque eius eveniet eligendi repudiandae laboriosam porro dicta laudantium quo.",
  },
  // Add more articles objects here as needed
};

// Function to create and return an article card element
function createArticleCard({ title, description }) {
  // Create the card container
  const card = document.createElement("div");
  card.className =
    "w-full bg-darkblue p-6 rounded-lg shadow-lg mb-8 border border-gray-700 hover:shadow-xl hover:border-teal-400 transition duration-300";

  // Add title
  const header = document.createElement("div");
  header.className = "w-full flex items-center mb-4";
  const titleElement = document.createElement("h3");
  titleElement.className = "ml-4 text-2xl font-normal text-customColor";
  titleElement.textContent = title;
  header.appendChild(titleElement);
  card.appendChild(header);

  // Add description
  const descriptionElement = document.createElement("p");
  descriptionElement.className = "text-gray-300 mb-6 text-justify";
  descriptionElement.textContent = description;
  card.appendChild(descriptionElement);

  return card;
}

// Function to render the articles section
function renderArticlesSection() {
  const container = document.getElementById("articles-container");
  const moreContainer = document.getElementById("more-articles-container");
  container.innerHTML = ""; // Clear existing content
  moreContainer.innerHTML = ""; // Clear existing content

  // Convert articlesData object to an array of keys
  const articleKeys = Object.keys(articlesData);

  // Render the first article
  if (articleKeys.length > 0) {
    const firstArticleKey = articleKeys[0];
    const firstArticle = createArticleCard(articlesData[firstArticleKey]);
    container.appendChild(firstArticle);
  }

  // Render the rest of the articles in the collapsible section
  for (let i = 1; i < articleKeys.length; i++) {
    const articleKey = articleKeys[i];
    const articleCard = createArticleCard(articlesData[articleKey]);
    moreContainer.appendChild(articleCard);
  }
}

// Initial render
renderArticlesSection();
