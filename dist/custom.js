// hanlding the mobile menu and navlinks starts here

const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileNavLinks = document.getElementById("mobileNavLinks");

mobileMenuIcon.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("hidden");
});

// handling of mobile menu and navlinks ends here

// code for the Resume download button starts here

document
  .getElementById("resume-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const resumeUrl = this.href;
    window.open(resumeUrl, "_blank");
  });

// code for the Resume download button ends  here
