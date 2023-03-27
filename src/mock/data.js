import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Joseph McAllister | Entrepreneur and Software Engineer", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "",
  subtitle: "",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "resume.pdf",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "roo_handled.jpg",
    title: "Roo Storage",
    info:
      "Founded in 2017, Roo Storage connects people in need of storage with hosts seeking to earn passive income--think Airbnb for storage. While at Roo I served as a Cofounder and CTO and led the development of our platform.",
    info2:
      "After raising a seed round and receving an Arch Grant, Roo was acquired by Handled. Handled is a growth-stage home services concierge that uses Roo's backend technology to manage commercial warehouses across the country. Handled would go on to be acquired by UniGroup at the end of 2020",
    url: "https://roo.handled.com/",
    cta1Text: "Read more",
    url2:
      "https://medium.com/roo-engineering/payment-automation-for-the-sharing-economy-f354487da2cc",
    cta2Text: "Blog",
  },
  {
    id: nanoid(),
    img: "tennis_data.png",
    title: "Tennis Data Aggregation Platform",
    info:
      "This project agreggates data from the three primary junior tennis data sources: the International Tennis Federation, Universal Tennis Ratings, and Tennis Recruiting through a combination of API calls and screenscraping. ",
    info2:
      "By combining analyzing these sources, one can identify under-valued junior tennis players and produce more targetted recruiting efforts",
    url: "https://github.com/joseph-mcallister/tennis-data-aggregator",
    cta1Text: "Repo",
    // url2:
    //   'https://medium.com/roo-engineering/payment-automation-for-the-sharing-economy-f354487da2cc',
    // cta2Text: 'Blog',
    caption: "DI Level High School Tennis Players",
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Want to work together? Let's talk.",
  btn: "LinkedIn",
  link: "https://www.linkedin.com/in/joseph-mcallister/",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/joseph-mcallister/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/joseph-mcallister",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
