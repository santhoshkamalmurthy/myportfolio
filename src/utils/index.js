const json = {
  links: {
    instagram: "https://www.instagram.com/yennam_santhosh/",
    twitter: "https://twitter.com/santhosh_yennam",
    linkedIn: "https://www.linkedin.com/in/santhosh-yennam-67a55b157/",
    github: "https://github.com/santhoshyennam",
    portfolio: "https://github.com/santhoshyennam/myportfolio",
  },
  name: "YENNAM SANTHOSH KAMAL MURTHY",
  tabs: {
    home: "Home",
    about: "About",
    resume: "Resume",
    projects: "Projects",
    learnings: "Learnings",
    blogs: "Blogs"
  },
  logo: "YS.",
  about: {
    quote: "Innovation distinguishes between a leader and a follower.",
    otherskills: ["Cricket", "Chess", "Hangout with Friends", "Travelling"],
    myself:
      "As a software developer with four years of experience, I've honed my skills across the full spectrum of software development, including both freelance projects and formal employment. My journey began with crafting an Android app that's now live on the Google Play Store,laying the groundwork for my passion in web and product development. I am proficient in a range of technologies, including TypeScript, React JS, Next JS, and backend development with Node JS and Spring Boot. My work at Zemoso Technologies allowed me to dive deep into system design, cloud technologies like AWS, and containerization tools such as Docker and Kubernetes, further broadening my skill set. I thrive in environments that challenge me to learn and grow, always pushing the boundaries of what I can achieve with code.",
  },
  projects: [
    {
      image:"signatureevents.jpeg",
      isBlog: false,
      title:"Signature Events (React JS)",
      description:"\"Signature Events Décor\" offers better decoration services for a variety of events, ensuring each celebration is unique with their personalized design touch. It cater to weddings, corporate events, and more, focusing on creating an unforgettable atmosphere.",
      githubLink:"https://github.com/santhoshyennam/signature_events",
      demoLink:"https://signatureeventsdecor.com/"
    },
    {
      image:"resume_with_ai.jpeg",
      isBlog: false,
      title:"Resume Generation Using AI",
      description:"Created a dynamic resume generation system using AI and custom templates. Users provide their professional details, and the AI generates a tailored resume in real-time. The output is converted into a PDF format, ensuring that the resume is well-structured and ready for professional use.",
      githubLink:"https://github.com/santhoshyennam/resume-generation-using-AI",
    },
    {
      image:"story_with_ai.jpeg",
      isBlog: false,
      title:"Story Generation Using AI",
      description:"Developed an AI-powered story generation feature using OpenAI's GPT-3.5 model. This feature allows users to input a brief or a set of ideas, and the AI generates a complete, coherent story. The generated content is then formatted and saved as a PDF, making it easily shareable and printable.",
      githubLink:"https://github.com/santhoshyennam/story-teller-using-AI",
    },
    {
      image:"atoz.webp",
      isBlog: false,
      title:"A2Z Dukhana (Android App)",
      description:"The \"A2Z Dukhana\" is an Android app for grocery shopping. It's crafted in Kotlin, featuring a user-friendly interface with pages that retrieve data in real-time from Firebase. It incorporates Firebase for user authentication and utilizes Firebase Cloud Messaging for efficient communication.",
      githubLink:"https://github.com/santhoshyennam/Grocery-androidapp",
      demoLink:"https://play.google.com/store/apps/details?id=com.a2zdukhana.store&hl=en_GB&gl=US"
    },
    {
      image:"buy_movies.jpeg",
      isBlog: false,
      title:"Buy Movies (Vue Js & Node JS & Flask)",
      description:"\"Buy Movies\" is a Vue.js application that interfaces with a Node.js backend, connecting to a MySQL database through SQLAlchemy. It manages movie data, user profiles, and orders. The app saves the shopping cart locally and sends orders to Node.js, which records them in the MySQL orders table.",
      githubLink:"https://github.com/santhoshyennam/buymovies",
    },
    {
      image:"travel_itenerary.jpeg",
      isBlog: false,
      title:"Travel Itenerary (Vue Js & Node Js)",
      description:"\"Travel Itinerary\" is a Vue.js application linked with a Node.js backend, displaying itineraries stored in a MySQL database. Users can browse and book trips, with bookings secured through password salting authentication for enhanced security.",
      githubLink:"https://github.com/santhoshyennam/travel-itenarary",
    },
    {
      image:"courier_project.jpeg",
      isBlog: false,
      title:"Courier Project (Vue JS & Node JS)",
      description:"The \"Courier Project\" is a Vue.js application that integrates with Node.js, enabling users to ship couriers between locations listed in a grid-like table. It leverages Dijkstra's algorithm to calculate the shortest path and determines the delivery cost, optimizing the courier delivery process.",
      githubLink:"https://github.com/santhoshyennam/courier-application",
    },
    {
      image:"covid-app.jfif",
      isBlog: false,
      title:"Covid - 19 (Android App)",
      description:"The \"Covid-19\" Android app provides a global overview of coronavirus cases, including data on recoveries, deaths, and more. It fetches data through API calls to public services using the Retrofit library and visualizes this data with charts for easy understanding.",
      githubLink:"https://github.com/santhoshyennam/Covid19-androidapp"
    },
    {
      image:"jobfinder.jpeg",
      isBlog: false,
      title:"Job Finder (Flask)",
      description:"\"Job Finder\" is a web application developed with Flask, utilizing Flask-WTF for forms and SQLAlchemy for database connections. It categorizes job listings, allowing users to filter and inquire about specific jobs. Additionally, there's functionality for an admin to manage job postings and user activities. Users can easily search and filter jobs to find ones that match their interests and qualifications.",
      githubLink:"https://github.com/santhoshyennam/flask-front-end-find-jobs",
    },
    {
      image:"spoorthy_navodaya.jpeg",
      isBlog: false,
      title:"Navodaya Education App (React JS)",
      description:"\"Spoorthy Navodaya\" is a React-based freelancing project showcasing information about the Navodaya educational institution in India, aimed at 5th and 6th-grade students. The application allows students to explore details about the Spoorthy Navodaya Academy, make payments, submit contact forms, and watch demo videos, providing a comprehensive digital platform to engage with the institution's offerings.",
      githubLink:"https://github.com/santhoshyennam/spoorthy-reactjs",
    },
    {
      image:"rationwala.webp",
      isBlog: false,
      title:"Rationwala (Android App)",
      description:"The \"Rationwala\" is an Android app for grocery shopping. It's crafted in Kotlin, featuring a user-friendly interface with pages that retrieve data in real-time from Firebase. It incorporates Firebase for user authentication and utilizes Firebase Cloud Messaging for efficient communication.",
      githubLink:"https://github.com/santhoshyennam/Grocery-androidapp",
      demoLink:"https://play.google.com/store/apps/details?id=com.rationwala.store&hl=ru&gl=US"
    },
    {
      image:"blog_application.jpeg",
      isBlog: false,
      title:"Blog Application (PHP)",
      description:"The \"Blog Application\" is a project developed in PHP and connected to a MySQL database. It enables users to manage blogs, offering functionalities for creating, editing, and deleting blog posts. This application provides a platform for users to share their thoughts, ideas, and stories through individual blog entries, showcasing the versatility and ease of use of PHP and MySQL for web development projects.",
      githubLink:"https://github.com/santhoshyennam/blog-application",
    },
    {
      image:"inventory_project.jpeg",
      isBlog: false,
      title:"Inventory Project (Laravel)",
      description:"The \"Inventory Project\" developed in Laravel is designed for comprehensive inventory management. It facilitates tracking of assets and ingredients, managing user roles and authentication, and handling system tasks and errors efficiently. This project caters to businesses seeking to streamline their inventory processes, ensuring data integrity and user management through a well-organized Laravel framework setup.",
      githubLink:"https://github.com/santhoshyennam/inventory_project",
    }
  ]
};

export default json;
