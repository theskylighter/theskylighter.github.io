/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Shivam",
  title: "Hi all, I'm Shivam",
  subTitle: emoji(
    "Systems-Oriented Software Engineer 🚀 | AI Undergraduate at MNIT Jaipur. I enjoy breaking systems, understanding how they work internally, and rebuilding them better. Currently focused on DSA for SDE roles while actively exploring Cloud Infrastructure, Networking, and Distributed Systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jqw1eNX1UNU-Hxco5NEVb96B4fL_RZ6s/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/theskylighter",
  linkedin: "www.linkedin.com/in/shivam-singh-6b044b197",
  gmail: "shiv.27india@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CLOUD EXPLORER | ALGORITHM ENTHUSIAST",
  skills: [
    emoji(
      "⚡ Build scalable systems with strong foundations in Data Structures & Algorithms"
    ),
    emoji("⚡ Deploy and manage applications on cloud infrastructure (Azure, Linux)"),
    emoji(
      "⚡ Explore networking, and self-hosted infrastructure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Malaviya National Institute of Technology (MNIT) Jaipur",
      logo: require("./assets/images/MNIT.png"),
      subHeader: "B.Tech in Artificial Intelligence",
      duration: "2023 - Present",
      desc: "3rd Year",
      descBullets: [
        "Data Structures & Algorithms (C++)",
        "System Design fundamentals",
        "Cloud & Infrastructure exploration (Azure, Linux, Docker)",
        "Networking fundamentals"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DSA & Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development (Frontend)",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud & Infrastructure",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "SYSTEMS & INFRASTRUCTURE EXPLORATION | AI & COMPUTER VISION",
  projects: [
    {
      projectName: "Driver Drowsiness Detection System",
      projectDesc: "Real-time facial landmark detection using dlib's 68-point model and Eye Aspect Ratio (EAR) for fatigue detection. Integrated live webcam feed processing with alert system.",
      footerLink: [
        {
          name: "Tech: Python, OpenCV, dlib",
          url: ""
        }
      ]
    },
    {
      projectName: "Home NAS Setup (Self-Hosted Infrastructure)",
      projectDesc: "Built a personal Network Attached Storage system from scratch. Researched RAID concepts, managed file systems, and optimized configuration for stable home usage.",
      footerLink: [
        {
          name: "Tech: Linux, Networking, Storage Config",
          url: ""
        }
      ]
    },
    {
      projectName: "Azure VM Deployment + Web App Hosting",
      projectDesc: "Deployed personal projects on Microsoft Azure VM with inbound port configuration, firewall management, and OpenVPN setup. Hands-on cloud provisioning and networking debugging.",
      footerLink: [
        {
          name: "Tech: Azure, Linux, Firewall, OpenVPN",
          url: ""
        }
      ]
    },
    {
      projectName: "Attendance Dashboard (Google Sheets API)",
      projectDesc: "Frontend API wrapper to fetch attendance data from Google Sheets and visualize percentage using speedometer-style UI. Implemented data parsing and dynamic visualization.",
      footerLink: [
        {
          name: "Tech: JavaScript, Chart.js, Google Sheets API",
          url: ""
        }
      ]
    },
    {
      projectName: "Operator Precedence Parser with GUI",
      projectDesc: "Compiler design mini project implementing operator precedence parsing. Features grammar input, precedence table generation, and interactive parse tree visualization.",
      footerLink: [
        {
          name: "Tech: Python, Tkinter",
          url: ""
        }
      ]
    },
    {
      projectName: "UDP Multicast/Broadcast Calculator",
      projectDesc: "Implemented multicast calculator service using UDP sockets on Windows. Resolved WinError 10065 through network-level debugging and broadcast approach optimization.",
      footerLink: [
        {
          name: "Tech: Python, Socket Programming",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Recognitions for technical contributions and competitive achievements",

  achievementsCards: [
    {
      title: "2nd Place — Capture The Flag Competition",
      subtitle:
        "Infosec Club, Sphinx Fest. Built and deployed multiple cloud-hosted applications independently.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "CTF Achievement",
      footerLink: [
        {
          name: "Achievement",
          url: ""
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Technical write-ups on systems, infrastructure, and learning journey",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Coming Soon",
      description:
        "Articles on distributed systems, cloud infrastructure, and DSA insights"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Technical talks and presentations coming soon"
  ),

  talks: [
    {
      title: "Coming Soon",
      subtitle: "Stay tuned for talks on systems and infrastructure",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's discuss systems, infrastructure, or your next project. My Inbox is always open.",
  number: "",
  email_address: "shiv.27india@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shivam08024584", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
