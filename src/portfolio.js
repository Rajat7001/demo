

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rajat Bisht",
  title: "Hi I'm Rajat Bisht",
  subTitle: emoji(
    "A passionate Upcoming Software Developer. Turning Vision Into Reality With Code. As a developer , I am dedicated to turning ideas into innovative designs ."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fqtXnhge0WdI64isLCzjFx39szpzSItl/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rajat7001",
  linkedin: "linkedin.com/in/rajat-bisht-0b4915217",
  gmail: "bishtrajat780@gmail.com",
  instagram: "https://www.instagram.com/_anonymous_7001/",
  facebook: "https://www.facebook.com/profile.php?id=100005631286592&mibextid=LQQJ4d",
  twitter: "https://twitter.com/RajatBisht9238",
  leetcode: "https://leetcode.com/Rajat_Bisht/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "SKILLS",
  subTitle: " A FULL STACK DEVELOPER SHOWCASING MY EXPERTIES IN MY PROJECTS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github" 
    },
     

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Graphic Era Hill University ",
      logo: require("./assets/images/GehuLogo.webp"),
      subHeader: "Bachelor of Technology  in Computer Science and Engineering",
      duration: "September 2020 - June 2024",
    
    },
    {
      schoolName: "St Xaviers School",
      logo: require("./assets/images/xaviersLogo.jpg"),
      subHeader: "Intermediate",
      duration: "April 2018 - April 2020",
    },
    {
      schoolName: "Sanwal School",
      logo: require("./assets/images/sanwalLogo.jpg"),
      subHeader: "High School",
      duration: "April 2017 - April 2018",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming - C++/Dsa", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Desig",
      progressPercentage: "70%"
    },


    {
      Stack: "Backend",
      progressPercentage: "60%"
    },

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web-Development-Intern",
      company: "Oasis",
      companylogo: require("./assets/images/OASIS.png"),
      date: "May 2023 – June 2023",
      descBullets: [
       "Created and implemented user interfaces using HTML, CSS, and JavaScript.",
        "Gained hands-on experience with new technologies and frameworks relevant to web development",
        "Using version control systems to showcase my code in public using GitHub"
      ]
    },
    {
      role: "Android-Development-Intern",
      company: "CodSoft",
      companylogo: require("./assets/images/CodSoft.png"),
      date: "Aug 2023 – Sep 2023",
      desc: "Worked with designers to implement user interfaces and user experiences that align with design specifications.",
      descBullets: [
        "Writing and executing test cases to ensure the reliability and stability of the Android application",
        "Used version control systems (e.g., Git) to manage and track changes in the codebase"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "WeCode",
      companylogo: require("./assets/images/WeCode.jpg"),
      date: "May 2022 – May 2023",
      desc: "Successfully served as Open Source Contributor to a variety of domains such as competitive programming and DSA for 200+ Juniors ",

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "From building dynamic web applications to crafting efficient algorithms, each project reflects my commitment to continuous learning and my dedication to delivering impactful results.",
  projects: [
    {
      image: require("./assets/images/Portfolio.png"),
      projectName: "Personal PortFolio",
      projectDesc: "Crafted with meticulous attention to detail and a passion for storytelling, my personal portfolio stands as a testament to my journey, showcasing a curated selection of projects that embody my dedication to excellence and innovation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Rajat7001"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Banking_Record_System.webp"),
      projectName: "Banking Record System",
      projectDesc: "Application to provide banking solution to Banks to manage customer accounts , accounts can be created and manged. Implemented many function related to banking system.Operations like deposite and withdrawal can be performed in the account",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Rajat7001"
        }
        //  you can add extra buttons here.
      ]
    },



    {
      image: require("./assets/images/Quiz_App.webp"),
      projectName: "Quiz App",
      projectDesc: "Allow users to create accounts or log in using existing credentials to track their progress and enable personalized features .Provide functionality for users to create their quizzes, including adding questions, multiple-choice options, and correct answers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Rajat7001"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Saas_AI.webp"),
      projectName: "SAAS AI Platform",
      projectDesc: "Developed a SaaS AI platform using Next.js 13, React, Tailwind, Prisma, and Stripe, showcasing proficiency in modern web development technologies , seamlessly integrated AI models via APIs, showcasing deep understanding of AI technologies",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Rajat7001"
        }
        //  you can add extra buttons here.
      ]
    },


    {
      image: require("./assets/images/Drowsiness_Detection.webp"),
      projectName: "Drowsiness Detection",
      projectDesc: " Implemented real-time monitoring of driver behavior to identify signs of drowsines . Configured the system to respond promptly to ensure timely driver intervention.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Rajat7001"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Algorithm_Visualizer.webp"),
      projectName: "Algorithm Visualizer",
      projectDesc: "Developed a sorting algorithm and graph algorithm visualize , can visualize 5 sorting algorithmsin a GUI form",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Rajat7001"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oasis_Intern",
      subtitle:
        "Web Develooment Intern",
      image: require("./assets/images/OASISCertificate.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1DsZJ79RyX6gFDmnJLDEg7DjjIQX5-yOL/view?usp=sharing"
        },
        {
          name: "Offer Letter",
          url: "https://drive.google.com/file/d/1TVCftPZ_Izq-TLIllSobJQyLt7llXkwb/view?usp=sharing"
        },
  
      ]
    },
    {
      title: "CodSoft_Intern",
      subtitle:
        "Android Development Intern",
      image: require("./assets/images/CodSoftCertificate.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1neEGA-sz_C49P06Axf8dlwwYdZhWS1Jb/view?usp=sharing"
        },
        {
          name: "Offer Letter",
          url: "https://drive.google.com/file/d/1cnkOO5iwBmfRDxUIrjN0r71CrjNxmaeo/view?usp=sharing"
        }
      ]
    },

    {
      title: "WeCode",
      subtitle:
        "Teachning_Assistant",
      image: require("./assets/images/WeCode.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kaKc1nELAnNRmOzPq4UserCJfuTslofP/view?usp=sharing"
        },
      ]
    },


    {
      title: "Forage",
      subtitle:
        "Accenture Technology Consulting Job Simulation",
      image: require("./assets/images/Accenture.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1D1Rx4tKSxicB65gBQgU1w6nUoJo58ch9/view?usp=sharing"
        },
      ]
    },


    {
      title: "Forage",
      subtitle: "Software Engineering Job Simulation at JP MORGAN CHASE & Co",
      image: require("./assets/images/JpMorgan.png"),
      imageAlt: "",
      footerLink: [
        {name: "Certification",
         url: "https://drive.google.com/file/d/1CDoZjf0Lc7TAUqELWJWW6ubpa97nhLvj/view?usp=sharing" 
        },
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Online Coding Platform

const blogSection = {
  title: "Online Coding Platform",
  image : require ("./assets/images/LeetCode.png"),
  subtitle:
    "You are never too old to set another goal or to dream a new dream.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://leetcode.com/Rajat_Bisht/",
      title: " LeetCode -Profile",
      description:
        "Successfully solved 200+ question on leetcode.",
        
    },
    
    {
      url: "https://www.codingninjas.com/studio/profile/edit",
      title: "CodingNinja -Profile",
      description:
        "200+ question on CodingNinja."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "For any query free to contact me.",
  number: "8958081603",
  email_address: "bishtrajat780@gmail.com"
};


// Talks Sections Coming Soon

const talkSection = {
  title: "",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "",
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};



// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
