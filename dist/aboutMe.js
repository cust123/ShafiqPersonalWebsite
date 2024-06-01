// dynamic data hanlding of about me section starts here

// JavaScript object to hold the data
const aboutData = {
  name: "Muhammad Shafiq",
  roles:
    "Software Engineer | Software Test Engineer | Scrum Master | Product Manager | Researcher",
  bios: [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo expedita voluptate, ea cupiditate nihil tenetur aut sunt ipsam quia sint neque odit omnis laboriosam eos consequuntur! Voluptatum, quaerat! Ipsam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur soluta eius quasi quis velit voluptate eveniet nulla rem, recusandae incidunt quaerat praesentium impedit dicta modi. Quasi rerum magnam temporibus.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur soluta eius quasi quis velit voluptate eveniet nulla rem, recusandae incidunt quaerat praesentium impedit dicta modi. Quasi rerum magnam temporibus.",
  ],
  profileImage: "/dist/assists/shafiqProfileImage.jpg",
  socialLinks: [
    {
      href: "https://github.com/yourusername",
      title: "Github",
      iconClass: "fab fa-github",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      title: "LinkedIn",
      iconClass: "fab fa-linkedin",
    },
    {
      href: "https://twitter.com/yourusername",
      title: "Twitter",
      iconClass: "fab fa-twitter",
    },
    {
      href: "https://facebook.com/yourusername",
      title: "Facebook",
      iconClass: "fab fa-facebook",
    },
    {
      href: "https://stackoverflow.com/yourusername",
      title: "Stack Overflow",
      iconClass: "fa-brands fa-stack-overflow",
    },
  ],
};

// Function to insert the data into the HTML
function populateAboutSection(data) {
  document.getElementById("name").textContent = data.name;
  document.getElementById("roles").textContent = data.roles;

  // Insert bio paragraphs
  const bioContainer = document.getElementById("bioContainer");
  data.bios.forEach((bio) => {
    const p = document.createElement("p");
    p.textContent = bio;
    p.className = "mt-6 text-gray-300 text-base md:text-lg leading-relaxed";
    bioContainer.appendChild(p);
  });

  document.getElementById("profileImage").src = data.profileImage;

  // Insert social links
  const socialLinksContainer = document.getElementById("socialLinks");
  data.socialLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.title = link.title;
    anchor.className =
      "text-gray-400 hover:text-customColor transition duration-300";
    anchor.innerHTML = `<i class="${link.iconClass} fa-2x"></i>`;
    socialLinksContainer.appendChild(anchor);
  });
}

// Call the function to populate the About Us section
populateAboutSection(aboutData);

// dynamic data hanlding of about me section ends here
