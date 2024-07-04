import WebImg1 from '@/public/assets/images/portfolio/portfolio-web-1.jpg';
import WebImg2 from '@/public/assets/images/portfolio/portfolio-web-2.jpg';
import WebImg3 from '@/public/assets/images/portfolio/portfolio-web-3.jpg';
import WebImg4 from '@/public/assets/images/portfolio/portfolio-web-4.jpg';
import WebImg5 from '@/public/assets/images/portfolio/portfolio-web-5.jpg';
import WebImg6 from '@/public/assets/images/portfolio/portfolio-web-2.jpg';
import AppImg1 from '@/public/assets/images/portfolio/portfolio-app-1.jpg';
import AppImg2 from '@/public/assets/images/portfolio/portfolio-app-2.jpg';
import AppImg3 from '@/public/assets/images/portfolio/portfolio-app-3.jpg';
import AppImg4 from '@/public/assets/images/portfolio/portfolio-app-4.jpg';
import GameImg1 from '@/public/assets/images/portfolio/portfolio-game-1.jpg';

export const portfolioData = [
  {
    portfolioId: 101,
    portfolioCategoryName: 'Website Development',
    portfolioDetails: [
      {
        detailsId: 201,
        portfolioCategory: ['Website Development'],
        portfolioHeaderImage: WebImg1,
        portfolioName: 'Online Bookstore',
        portfolioTitle: 'Development of an Online Bookstore Platform',
        clientName: '',
        portfolioDescription:
          "The online bookstore platform is a modern solution aimed at revolutionizing the way people purchase books. With seamless navigation and a user-friendly interface, customers can explore a vast collection of literary works from various genres. Our platform incorporates advanced search functionalities, allowing users to easily find their favorite titles. Additionally, the system features secure payment gateways to ensure safe transactions. By leveraging cutting-edge technologies, we've created an immersive online shopping experience for book enthusiasts worldwide.",
        portfolioProvideTitle:
          'We have developed a comprehensive online bookstore platform tailored to meet the needs of modern readers. Our solution encompasses every aspect of the development lifecycle, from design and development to testing, deployment, and ongoing maintenance.',
        portfolioProvides: ['Design', 'Development', 'Testing', 'Deployment', 'Maintenance'],
        portolioTechnologies: [
          'Front-End: React, Redux, CSS Modules',
          'Back-End: Node.js, Express.js',
          'Database: MongoDB',
          'Authentication: JWT',
          'Payment Gateway: Stripe',
        ],
        liveLink: '',
        portfolioImages: [WebImg2, WebImg3],
      },
      {
        detailsId: 203,
        portfolioCategory: ['Website Development'],
        portfolioHeaderImage: WebImg2,
        portfolioName: 'Music Artist Website',
        portfolioTitle: 'Official Website for Music Artist',
        clientName: 'TechWizard Music',
        portfolioDescription:
          'Music is a universal language that connects people from all walks of life. At TechWizard Music, we are passionate about creating unforgettable melodies and sharing our love for music with the world. Our website serves as a digital hub where fans can explore our latest releases, learn about upcoming shows and events, and connect with us on social media.',
        portfolioProvideTitle:
          'We offer an immersive experience for music enthusiasts, providing access to our discography, tour dates, and exclusive content. Our goal is to foster a community of music lovers and create meaningful connections through our art. Join us on our musical journey and experience the power of sound.',
        portfolioProvides: [
          'UI/UX Design',
          'Development',
          'Testing',
          'Release',
          'Operation/Maintenance',
        ],
        portolioTechnologies: [
          'Front-End: HTML5, CSS3, JavaScript',
          'Back-End: Node.js, Express.js',
          'Database: MongoDB',
          'Server: Digital Ocean VPS Server',
        ],
        liveLink: '',
        portfolioImages: [WebImg3, WebImg1, WebImg4],
      },
      {
        detailsId: 202,
        portfolioCategory: ['Website Development'],
        portfolioHeaderImage: WebImg3,
        portfolioName: 'Data Security Solutions Website',
        portfolioTitle: 'Comprehensive Data Security Solutions',
        clientName: 'SecureData Inc.',
        portfolioDescription:
          'At SecureData Inc., we prioritize the protection of your sensitive information. Our comprehensive data security solutions are designed to safeguard your digital assets from unauthorized access, data breaches, and cyber threats. With years of experience in the field of cybersecurity, we offer industry-leading expertise and cutting-edge technologies to ensure the confidentiality, integrity, and availability of your data.',
        portfolioProvideTitle:
          "As a trusted provider of data security solutions, we've developed a robust platform for SecureData Inc., delivering a seamless and secure online experience. Powered by the latest security protocols and encryption techniques, our solution offers peace of mind to our clients. From secure login mechanisms to encrypted data transmission, we prioritize the protection of sensitive information at every step. Our responsive design ensures compatibility across devices, allowing users to access our services anytime, anywhere.",
        portfolioProvides: ['Design', 'Development', 'Testing', 'Release', 'Operation/Maintenance'],
        portolioTechnologies: [
          'Front-End: HTML5, CSS3, JavaScript',
          'Back-End: Node.js, Express.js',
          'Database: MongoDB',
          'Server: Digital Ocean VPS Server',
        ],
        liveLink: '',
        portfolioImages: [WebImg6, WebImg5],
      },
      {
        detailsId: 204,
        portfolioCategory: ['Website Development'],
        portfolioHeaderImage: WebImg4,
        portfolioName: 'Tasty Bites Restaurant',
        portfolioTitle: 'Online Presence for Tasty Bites Restaurant',
        clientName: 'Tasty Bites Inc.',
        portfolioDescription:
          'Tasty Bites is a culinary haven where flavors from around the world come together to tantalize your taste buds. Our restaurant offers a diverse menu featuring mouthwatering dishes crafted with fresh, locally-sourced ingredients. From savory appetizers to decadent desserts, each dish is a masterpiece designed to delight your senses and satisfy your cravings.',
        portfolioProvideTitle:
          "We've created an immersive online experience for Tasty Bites, allowing customers to explore our menu, make reservations, and order online from the comfort of their homes. Our website showcases our restaurant's ambiance, menu offerings, and special promotions, inviting guests to embark on a culinary journey with us.",
        portfolioProvides: [
          'UI/UX Design',
          'Development',
          'Testing',
          'Release',
          'Operation/Maintenance',
        ],
        portolioTechnologies: [
          'Front-End: HTML5, CSS3, JavaScript',
          'Back-End: Node.js, Express.js',
          'Database: MongoDB',
          'Server: Digital Ocean VPS Server',
        ],
        liveLink: '',
        portfolioImages: [WebImg1, WebImg2, WebImg5, WebImg6],
      },
      {
        detailsId: 205,
        portfolioCategory: ['Website Development'],
        portfolioHeaderImage: WebImg5,
        portfolioName: 'Business Dynamics Agency',
        portfolioTitle: 'Empowering Businesses with Dynamic Solutions',
        clientName: 'Business Dynamics Inc.',
        portfolioDescription:
          "At Business Dynamics, we specialize in providing strategic consulting services to help businesses thrive in today's competitive landscape. Our team of experts collaborates closely with clients to develop tailored solutions that drive growth, enhance efficiency, and maximize profitability. From market analysis to digital transformation, we empower businesses to achieve their full potential.",
        portfolioProvideTitle:
          "Our website serves as a gateway to our comprehensive suite of services and expertise. With intuitive navigation and engaging content, visitors can explore our range of offerings, success stories, and industry insights. Whether you're a startup looking to gain traction or an established enterprise seeking to innovate, Business Dynamics is your trusted partner for sustainable growth and success.",
        portfolioProvides: [
          'UI/UX Design',
          'Development',
          'Testing',
          'Release',
          'Operation/Maintenance',
        ],
        portolioTechnologies: [
          'Front-End: HTML5, CSS3, JavaScript',
          'Back-End: Node.js, Express.js',
          'Database: MongoDB',
          'Server: Digital Ocean VPS Server',
        ],
        liveLink: '',
        portfolioImages: [WebImg4, WebImg2],
      },
    ],
  },
  {
    portfolioId: 102,
    portfolioCategoryName: 'Game Development',
    portfolioDetails: [
      {
        detailsId: 201,
        portfolioCategory: ['Game Development'],
        portfolioHeaderImage: GameImg1,
        portfolioName: 'Galactic Clash: Multiplayer Space Game',
        portfolioTitle: 'Conquer the Galaxy with Friends in Galactic Clash!',
        clientName: 'StarForge Studios',
        portfolioDescription:
          'Welcome to Galactic Clash, the ultimate multiplayer space game where you can conquer the galaxy with your friends! Engage in epic space battles, explore uncharted territories, and build your interstellar empire. Form alliances, forge strategies, and dominate the galaxy in this thrilling multiplayer experience. Customize your fleet, discover new planets, and compete for dominance in a universe filled with endless possibilities.',
        portfolioProvideTitle:
          "We've developed an immersive multiplayer space game that offers players the chance to explore, conquer, and collaborate in a vast galactic sandbox. Galactic Clash features dynamic gameplay, stunning visuals, and engaging social features that bring players together for epic space adventures. Join forces with friends, forge alliances, and embark on an unforgettable journey across the stars.",
        portfolioProvides: ['Design', 'Development', 'Testing', 'Release', 'Operation/Maintenance'],
        portolioTechnologies: [
          'Game Engine: Unity',
          'Network Framework: Photon Unity Networking (PUN)',
          'Backend: Firebase Realtime Database',
          'Platform: iOS, Android',
        ],
        liveLink: '',
        portfolioImages: [GameImg1],
      },
    ],
  },
  {
    portfolioId: 104,
    portfolioCategoryName: 'Mobile App Development',
    portfolioDetails: [
      {
        detailsId: 201,
        portfolioCategory: ['Mobile App Development'],
        portfolioHeaderImage: AppImg1,
        portfolioName: 'FurniShop Furniture Ecommerce App',
        portfolioTitle: 'Revolutionizing Furniture Shopping with FurniShop',
        clientName: 'FurniCo Inc.',
        portfolioDescription:
          'Welcome to FurniShop, your one-stop destination for premium furniture shopping on-the-go! Discover a vast selection of high-quality furniture pieces curated for modern living spaces. From sleek sofas to elegant dining sets, FurniShop offers everything you need to transform your home into a sanctuary of style and comfort. Browse, shop, and experience the convenience of furniture shopping at your fingertips with FurniShop.',
        portfolioProvideTitle:
          "At FurniCo Inc., we've developed FurniShop, an innovative furniture ecommerce app designed to revolutionize the way you shop for furniture. Our app provides a seamless shopping experience, intuitive navigation, and secure transactions, ensuring a hassle-free journey from browsing to purchase. With FurniShop, you can explore our extensive catalog, visualize products in your space with augmented reality, and enjoy personalized recommendations tailored to your style preferences. Elevate your home decor with FurniShop, where quality meets convenience.",
        portfolioProvides: ['Design', 'Development', 'Testing', 'Release', 'Operation/Maintenance'],
        portolioTechnologies: [
          'Front-End: React Native, Redux',
          'Back-End: Node.js, Express',
          'Database: MongoDB',
          'Authentication: JWT',
          'Push Notifications: Firebase Cloud Messaging (FCM)',
          'Dev Environment: Expo-Go',
          'Server: AWS EC2',
        ],
        liveLink: '',
        portfolioImages: [AppImg1, AppImg2],
      },
      {
        detailsId: 201,
        portfolioCategory: ['Mobile App Development'],
        portfolioHeaderImage: AppImg2,
        portfolioName: 'FitZone Exercise Fitness App',
        portfolioTitle: 'Achieve Your Fitness Goals with FitZone',
        clientName: 'FitLife Solutions LLC',
        portfolioDescription:
          "Welcome to FitZone, your ultimate companion for achieving your fitness goals! Whether you're a beginner or a fitness enthusiast, FitZone offers personalized workout plans, nutrition guidance, and motivation to help you reach your peak performance. From strength training to yoga sessions, our app provides a variety of exercise routines tailored to your fitness level and preferences. Join the FitZone community today and embark on a transformative journey towards a healthier, stronger you!",
        portfolioProvideTitle:
          "At FitLife Solutions LLC, we've developed FitZone, an innovative exercise fitness app designed to empower users on their fitness journey. Our app features customizable workout plans, video tutorials, progress tracking, and community support, providing users with the tools they need to succeed. Whether you're aiming to build muscle, lose weight, or improve flexibility, FitZone adapts to your goals and helps you stay motivated every step of the way. Experience the power of fitness with FitZone!",
        portfolioProvides: ['Design', 'Development', 'Testing', 'Release', 'Operation/Maintenance'],
        portolioTechnologies: [
          'Front-End: React Native, Redux',
          'Back-End: Node.js, Express',
          'Database: MongoDB',
          'Authentication: JWT',
          'Push Notifications: Firebase Cloud Messaging (FCM)',
          'Dev Environment: Expo-Go',
          'Server: AWS EC2',
        ],
        liveLink: '',
        portfolioImages: [AppImg1, AppImg3],
      },
      {
        detailsId: 201,
        portfolioCategory: ['Mobile App Development'],
        portfolioHeaderImage: AppImg3,
        portfolioName: 'LearnX Online Course Platform',
        portfolioTitle: 'Empowering Education with LearnX',
        clientName: 'EduTech Innovations Inc.',
        portfolioDescription:
          "Welcome to LearnX, your gateway to a world of knowledge and learning! Whether you're a student, a professional, or a lifelong learner, LearnX offers a diverse selection of online courses taught by experts in various fields. From coding to cooking, our platform provides interactive lessons, quizzes, and assignments to help you master new skills and advance your career. Join the LearnX community today and embark on a journey of lifelong learning and personal growth!",
        portfolioProvideTitle:
          "At EduTech Innovations Inc., we've developed LearnX, a cutting-edge online course platform designed to democratize education and empower learners worldwide. Our platform features intuitive course navigation, personalized learning paths, interactive multimedia content, and community forums, fostering collaborative learning and skill development. Whether you're pursuing professional development or personal enrichment, LearnX equips you with the tools and resources you need to succeed. Unlock your potential with LearnX!",
        portfolioProvides: ['Design', 'Development', 'Testing', 'Release', 'Operation/Maintenance'],
        portolioTechnologies: [
          'Front-End: React, Redux, Bootstrap',
          'Back-End: Node.js, Express',
          'Database: MongoDB',
          'Authentication: JWT',
          'Payment Gateway: Stripe',
          'Dev Environment: Visual Studio Code',
          'Server: Heroku',
        ],
        liveLink: '',
        portfolioImages: [AppImg1, AppImg4],
      },
    ],
  },
];
