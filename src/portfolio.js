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
  subTitle: emoji(
    "Systems-focused Software Engineer 🚀 | AI undergraduate at MNIT Jaipur with a strong interest in cloud infrastructure, networking, and distributed systems. I enjoy understanding how systems work under the hood and building reliable, production-minded solutions."
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
  subTitle: "SOFTWARE ENGINEERING | CLOUD INFRASTRUCTURE | PROBLEM SOLVING",
  skills: [
    emoji(
      "⚡ Build efficient software with strong foundations in data structures, algorithms, and core computer science concepts"
    ),
    emoji("⚡ Deploy and manage applications on cloud infrastructure using Azure, Linux, and container-based workflows"),
    emoji(
      "⚡ Work on networking, self-hosted infrastructure, and secure remote access setups"
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
      skillName: "Python",
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
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
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
      desc: "Undergraduate focused on software engineering and systems",
      descBullets: [
        "Data Structures & Algorithms using C++",
        "Computer systems and system design fundamentals",
        "Cloud infrastructure exposure with Azure, Linux, and Docker",
        "Networking and distributed systems fundamentals"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Problem Solving & Data Structures", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Infrastructure & Networking",
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

const projectSections = [
  {
    title: "Major Projects",
    subtitle:
      "SELECTED PROJECTS WITH STRONG PRODUCT, ENGINEERING, AND SYSTEMS IMPACT",
    projects: [
      {
        projectName: "ATS Resume Analyzer",
        projectDesc:
          "Built a resume analysis tool focused on ATS compatibility, helping evaluate resume structure, keyword relevance, and job-description alignment. Designed the workflow to surface actionable feedback for improving shortlisting outcomes.",
        footerLink: [
          {
            name: "Tech: React, JavaScript, Resume Parsing",
            url: ""
          }
        ]
      },
      {
        projectName: "Google Drive Clone",
        projectDesc:
          "Developed a file storage and sharing platform inspired by Google Drive with support for file uploads, organized storage, and responsive UI interactions. Focused on delivering a familiar cloud-storage experience.",
        footerLink: [
          {
            name: "Tech: React, Firebase, Cloud Storage",
            url: ""
          }
        ]
      },
      {
        projectName: "Driver Drowsiness Detection System",
        projectDesc:
          "Built a real-time computer vision pipeline for fatigue detection using dlib's 68-point facial landmark model and Eye Aspect Ratio (EAR). Integrated live webcam processing and alerting for responsive detection.",
        footerLink: [
          {
            name: "Tech: Python, OpenCV, dlib",
            url: ""
          }
        ]
      }
    ],
    display: true
  },
  {
    title: "Minor Projects",
    subtitle:
      "ADDITIONAL PROJECTS ACROSS INFRASTRUCTURE, NETWORKING, AND CORE COMPUTER SCIENCE",
    projects: [
      {
        projectName: "MNIT Captive Portal Auto Login Script (Cross-Platform)",
        projectDesc:
          "Developed a cross-platform automation tool to automatically authenticate to the MNIT campus captive portal after periodic network resets. Reverse engineered the authentication flow using Burp Suite, replaced browser automation with lightweight Python HTTP requests, and used `curl`-based connectivity checks to trigger automatic re-authentication on Linux and Windows.",
        footerLink: [
          {
            name: "Tech: Python, HTTP Requests, Burp Suite, curl",
            url: ""
          }
        ]
      },
      {
        projectName: "LeetCode Dashboard",
        projectDesc:
          "Built a web dashboard to track and visualize LeetCode problem-solving progress through interactive charts and progress indicators. Integrated API-based stats, displayed solved counts by difficulty and submission activity, and designed a responsive frontend for monitoring DSA practice consistency.",
        footerLink: [
          {
            name: "Tech: JavaScript, Chart.js, API Integration, HTML, CSS",
            url: ""
          }
        ]
      },
      {
        projectName: "Home NAS Setup (Self-Hosted Infrastructure)",
        projectDesc:
          "Designed and configured a self-hosted NAS environment for personal storage and reliability. Worked with RAID concepts, file system management, and Linux-based configuration for stable day-to-day usage.",
        footerLink: [
          {
            name: "Tech: Linux, Networking, Storage Config",
            url: ""
          }
        ]
      },
      {
        projectName: "CTF Competition Website Deployment",
        projectDesc:
          "Deployed and operated a CTF competition website on an Azure VM for a club event serving around 100 participants. Managed VM provisioning, network security rules, Linux server setup, and event-ready hosting.",
        footerLink: [
          {
            name: "Tech: Azure VM, Linux, Networking, Web Hosting",
            url: ""
          }
        ]
      },
      {
        projectName: "Personal VPN Setup (OpenVPN + Tailscale)",
        projectDesc:
          "Built a personal VPN setup for secure remote access using both OpenVPN and Tailscale. Configured firewall rules, device connectivity, and self-hosted networking to enable reliable cross-device access.",
        footerLink: [
          {
            name: "Tech: Azure, Linux, OpenVPN, Tailscale",
            url: ""
          }
        ]
      },
      {
        projectName: "Attendance Dashboard (Google Sheets API)",
        projectDesc:
          "Built a frontend dashboard that consumes attendance data from the Google Sheets API and visualizes metrics through a speedometer-style interface. Implemented parsing logic and dynamic UI updates for real-time usability.",
        footerLink: [
          {
            name: "Tech: JavaScript, Chart.js, Google Sheets API",
            url: ""
          }
        ]
      },
      {
        projectName: "Operator Precedence Parser with GUI",
        projectDesc:
          "Developed a compiler design mini project implementing operator precedence parsing with a GUI. Included grammar input handling, precedence table generation, and interactive parsing visualization.",
        footerLink: [
          {
            name: "Tech: Python, Tkinter",
            url: ""
          }
        ]
      },
      {
        projectName: "UDP Multicast/Broadcast Calculator",
        projectDesc:
          "Implemented a UDP-based calculator service on Windows using multicast and broadcast communication. Resolved WinError 10065 through network-level debugging and improved the broadcast strategy for reliable communication.",
        footerLink: [
          {
            name: "Tech: Python, Socket Programming",
            url: ""
          }
        ]
      }
    ],
    display: true
  }
];

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Highlights from technical competitions and problem-solving events",

  achievementsCards: [
    {
      title: "2nd Place — Capture The Flag (CTF)",
      subtitle:
        "Placed 2nd in the CTF organized by the Infosec Club at Sphinx Fest, MNIT Jaipur. Demonstrated practical skills in cybersecurity, vulnerability analysis, and structured problem solving.",
      image: require("./assets/images/sphinx.png"),
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
    "Technical writing on systems, infrastructure, and engineering learnings",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Coming Soon",
      description:
        "Posts on distributed systems, cloud infrastructure, networking, and problem solving"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Talks and presentations on systems, infrastructure, and engineering topics coming soon"
  ),

  talks: [
    {
      title: "Coming Soon",
      subtitle: "Stay tuned for sessions on systems engineering and cloud infrastructure",
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
  subtitle: "Download my resume for a detailed overview of my work and experience",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to discussing software engineering, infrastructure, backend systems, and collaboration opportunities.",
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
  projectSections,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
