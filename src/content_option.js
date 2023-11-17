// Logo text that shows up in top left corner
const logotext = "ISABELLA";
const meta = {
  title: "Isabella Patterson",
  // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};

// Intro data that shows up on home page
const introdata = {
  title: "I’m Isabella Patterson",
  animated: {
    first: "Artificial Intelligence",
    second: "Machine Learning",
    third: "Data Science",
  },
  description: " ",
  your_img_url:
    "https://images.unsplash.com/photo-1684931802761-c7f76b48b495?q=80&w=3701&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

// About data that shows up on about page
const dataabout = {
  title: "Summary",
  aboutme:
    "As a dedicated and passionate computer scientist, I possess a robust foundation in software engineering, artificial intelligence, machine learning, and data science. My enthusiasm for advancing technological frontiers is matched by my commitment to leveraging my expertise in meaningful projects that have a significant impact.",
};

// Education data that shows up on education page
const education = [
  {
    degree: "Master of Science, Computer Science",
    where: "UNC Charlotte",
    date: "Aug 2018 - Dec 2020",
  },
  {
    degree: "Bachelor of Science, Computer Science",
    where: "UNC Charlotte",
    date: "Jan 2021 - Dec 2022",
  },
];

// Skills data that shows up on skills page
const skills = [
  {
    name: "Python",
    value: 100,
  },
  {
    name: "Ruby",
    value: 85,
  },
  {
    name: "Java",
    value: 75,
  },
  {
    name: "AWS",
    value: 95,
  },
  {
    name: "C#",
    value: 80,
  },
];

// Experience data that shows up on experience page
const Experience = [
  {
    title: "Data Scientist",
    where: "Apex Systems, DHS/USCIS · Contract",
    date: "Mar 2023 - Jul 2023",
    description:
      "Skills: Machine Learning · Data Science · Java · Python · Amazon Web Services (AWS) · Data Analysis · Data Bricks · Data Visualization · Jupyter Notebooks",
  },
  {
    title: "Software Engineer",
    where: "Ally Financial",
    date: "Aug 2021 - Jan 2023",
    description:
      "Skills: Java · C# · MySQL · Oracle DB · Amazon Web Services (AWS)· ReactJS · Power BI",
  },
  {
    title: "Full Stack Developer",
    where: "Brooksource, Ally Financial · Contract",
    date: "Jan 2021 - Aug 2021",
    description: "Skills: Java · C# · MySQL · Power BI",
  },
  {
    title: "AI/ML Researcher",
    where: "U.S. Department of State · VSFS Internship",
    date: "Aug 2020 - May 2021",
    description:
      "Skills: Python · Java  · C# · Machine Learning · Data Analysis · Google Colab · Web Scraping",
  },
];

// might use this for featured projects or resume???
const dataresume = [
  {
    img: "https://i2.wp.com/www.lynettemariesmith.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-12-at-3.58.03-PM.png?ssl=1",
    description: "Click here to view my resume",
    link: "https://www.canva.com/design/DAFK2Wg7ue8/gaMOymYccpguHgC8IPCipA/view?",
  },
];

// Contact data that shows up on contact page
const contactConfig = {
  YOUR_EMAIL: "i.grace.patterson@gmail.com",
  YOUR_FONE: "+1 (757) 672-5443",
  description:
    "Comments? Questions? Concerns? Please feel free to reach out to me.",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

// Social profile data that shows up on home page
const socialprof = {
  github: "https://github.com/ipgogra?tab=repositories",
  linkedin: "https://www.linkedin.com/in/igpatterson/",
};

// Exporting all constants
export {
  meta,
  dataabout,
  dataresume, // might use this for featured projects
  education,
  skills,
  Experience,
  introdata,
  contactConfig,
  socialprof,
  logotext,
};
