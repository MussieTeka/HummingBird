/* eslint-disable no-unused-vars */
const speakers = [
  {
    name: "Olivia Smith",
    position: "Data Scientist at Google",
    bio: "Olivia Smith is a data scientist at Google with over a decade of experience in the tech industry.",
    image: "images/olivia.jpg",
  },
  {
    name: "Joshua Kim",
    position: "Cybersecurity Analyst at the Department of Defense",
    bio: "Joshua Kim is a cybersecurity analyst at the Department of Defense, where he focuses on protecting the nation.",
    image: "images/joshua.jpg",
  },
  {
    name: "Emily Chen",
    position: "Product Manager at Microsoft",
    bio: "Emily Chen is a product manager at Microsoft, where she leads a team of engineers and designers to build cutting-edge products for consumers and businesses.",
    image: "images/emily.jpg",
  },
  {
    name: "Rajesh Sharma",
    position: "Software Engineer at Amazon",
    bio: "Rajesh Sharma is a software engineer at Amazon, where he helps build and maintain the company's massive e-commerce platform.",
    image: "images/rajesh.jpg",
  },
  {
    name: "Isabel Rodriguez",
    position: "UX Designer at Airbnb",
    bio: "Isabel Rodriguez is a UX designer at Airbnb, where she helps design the company's user interface and user experience.",
    image: "images/isabel.jpg",
  },
  {
    name: "Michael Johnson",
    position: "Software Development Manager at Facebook",
    bio: "Michael Johnson is a software development manager at Facebook, where he leads a team of engineers to build innovative software solutions for the world's largest social network.",
    image: "images/michael.jpg",
  },
];
const firstSpeakersContainer = document.getElementById("first-speakers");
const secondSpeakersContainer = document.getElementById("second-speakers");

speakers.forEach((speaker, index) => {
  const speakerDetails = `
    <div class="speaker-details">
      <div class="speaker-image"><img src="${speaker.image}" /></div>
      <div class="speaker-descrition">
        <p class="speaker-name">${speaker.name}</p>
        <p class="speaker-position">${speaker.position}</p>
        <p class="speaker-bio">${speaker.bio}</p>
      </div>
    </div>
  `;

  if (index < 3) {
    firstSpeakersContainer.innerHTML += speakerDetails;
  } else {
    secondSpeakersContainer.innerHTML += speakerDetails;
  }
});

// hamburger menu

function openMenu(className) {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.right = "0";
}

function closeMenu() {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.right = "-768px";
}
