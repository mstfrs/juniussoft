import WebsiteImgae from '@/public/assets/images/service/web-development.png';
import AppImgae from '@/public/assets/images/service/app-development.png';
import SoftwareImgae from '@/public/assets/images/service/software-development.png';
import GameImgae from '@/public/assets/images/service/game-development.png';
import AiImage from '@/public/assets/images/service/artificial-intelligence.png';
import DigitalAgencyImage from '@/public/assets/images/service/digital-agency.png';

import WebService1 from '@/public/assets/images/service/web-dev/custom-web-development.png';
import WebService2 from '@/public/assets/images/service/web-dev/ecommerce-development.png';
import WebService3 from '@/public/assets/images/service/web-dev/lms-development.png';
import WebService4 from '@/public/assets/images/service/web-dev/marketplace-development.png';
import WebService5 from '@/public/assets/images/service/web-dev/corporate-web-development.png';
import WebService6 from '@/public/assets/images/service/web-dev/all-other-web-development.png';

import AiService1 from '@/public/assets/images/service/ai/predective.png';
import AiService2 from '@/public/assets/images/service/ai/natural-language.png';
import AiService3 from '@/public/assets/images/service/ai/image-rec.png';
import AiService4 from '@/public/assets/images/service/ai/data.png';
import AiService5 from '@/public/assets/images/service/ai/pattern-recognition.png';
import AiService6 from '@/public/assets/images/service/ai/google-assistant.png';
import AiService7 from '@/public/assets/images/service/ai/alexa.png';
import AiService8 from '@/public/assets/images/service/ai/automated.png';
import AiService9 from '@/public/assets/images/service/ai/vertual.png';
import AiService10 from '@/public/assets/images/service/ai/robot.png';

import SoftwareService1 from '@/public/assets/images/service/software-dev/e-commerce.png';
import SoftwareService2 from '@/public/assets/images/service/software-dev/custom-web.png';
import SoftwareService3 from '@/public/assets/images/service/software-dev/cart.png';
import SoftwareService4 from '@/public/assets/images/service/software-dev/payment-getway.png';
import SoftwareService5 from '@/public/assets/images/service/software-dev/auth.png';
import SoftwareService6 from '@/public/assets/images/service/software-dev/social-feed.png';
import SoftwareService7 from '@/public/assets/images/service/software-dev/ERP.png';
import SoftwareService8 from '@/public/assets/images/service/software-dev/CRM.png';

import GameService1 from '@/public/assets/images/service/game-dev/2d-game.png';
import GameService2 from '@/public/assets/images/service/game-dev/3d-game.png';

import AppService1 from '@/public/assets/images/service/mobile-app-dev/games.png';
import AppService2 from '@/public/assets/images/service/mobile-app-dev/electronix.png';
import AppService3 from '@/public/assets/images/service/mobile-app-dev/clothings.png';
import AppService4 from '@/public/assets/images/service/mobile-app-dev/calculating.png';
import AppService5 from '@/public/assets/images/service/mobile-app-dev/attendence.png';

import DigitalService1 from '@/public/assets/images/service/digital-agency/id-card.png';
import DigitalService2 from '@/public/assets/images/service/digital-agency/logo-design.png';
import DigitalService3 from '@/public/assets/images/service/digital-agency/t-shirt-design.png';
import DigitalService4 from '@/public/assets/images/service/digital-agency/custom-theme-developmet.png';
import DigitalService5 from '@/public/assets/images/service/digital-agency/plugin-development.png';
import DigitalService6 from '@/public/assets/images/service/digital-agency/seo.png';
import DigitalService7 from '@/public/assets/images/service/digital-agency/smm.png';

export const servicesData = [
  {
    serviceId: 101,
    serviceName: 'Website Development',
    serviceImage: WebsiteImgae,
    serviceDescription:
      'Our web design and development service offers expert solutions to create responsive, stunning and functional websites tailored to meet your specific needs.Unlock the full potential of your website with our professional web development service. Our experienced team of developers specializes in creating high-quality web solutions tailored to your business needs.',
    serviceCategory: 'website development',
    subServices: [
      {
        subServiceId: 201,
        subServiceName: 'Custom Web Development',
        subServiceDetails: [
          {
            image: WebService1,
            title: 'Custom Web Development',
            description:
              "Empower your business with TechWizard.'s bespoke web development solutions, tailored to elevate your online presence..",
          },
        ],
      },
      {
        subServiceId: 202,
        subServiceName: 'eCommerce Development',
        subServiceDetails: [
          {
            image: WebService2,
            title: 'eCommerce Development',
            description:
              "Elevate your online business with TechWizard.'s cutting-edge eCommerce Development solutions..",
          },
        ],
      },
      {
        subServiceId: 203,
        subServiceName: 'LMS Development',
        subServiceDetails: [
          {
            image: WebService3,
            title: 'LMS Development',
            description:
              "Revolutionize learning with TechWizard.'s LMS Development, delivering scalable, intuitive solutions for seamless training, collaboration.",
          },
        ],
      },
      {
        subServiceId: 204,
        subServiceName: 'Marketplace Development',
        subServiceDetails: [
          {
            image: WebService4,
            title: 'Marketplace Development',
            description:
              "Unlock unparalleled growth with TechWizard.'s Marketplace Development, crafting dynamic platforms that elevate businesses through seamless integration, innovation.",
          },
        ],
      },
      {
        subServiceId: 205,
        subServiceName: 'Corporate Web Development',
        subServiceDetails: [
          {
            image: WebService5,
            title: 'Corporate Web Development',
            description:
              "Transform your corporate presence with TechWizard.'s expert Corporate Web Development services.",
          },
        ],
      },
      {
        subServiceId: 206,
        subServiceName: 'All others Web Development',
        subServiceDetails: [
          {
            image: WebService6,
            title: 'All others Web Development',
            description:
              'Revolutionize your digital presence with TechWizard. Elevate your web development experience with our cutting-edge solutions.',
          },
        ],
      },
    ],
    serviceFAQs: [
      {
        id: 1,
        title: 'What is the difference between front-end and back-end development?',
        description:
          "Front-end development refers to the part of web development that focuses on the user interface and user experience. It involves designing and implementing the visual elements of a website that users interact with. Back-end development, on the other hand, involves server-side programming and database management. It's responsible for the functionality and behind-the-scenes operations of a website.",
      },
      {
        id: 2,
        title: 'What is responsive web design, and why is it important?',
        description:
          "Responsive web design is an approach to design and development that ensures a website's layout and content adjust dynamically based on the device or screen size. This ensures a consistent and optimal user experience across various devices, such as desktops, tablets, and smartphones. It is important because it improves accessibility, user satisfaction, and search engine rankings, as search engines prioritize mobile-friendly websites.",
      },
      {
        id: 3,
        title: 'What is the significance of website security, and how can it be ensured?',
        description:
          'Website security is crucial to protect user data, prevent unauthorized access, and maintain the integrity of a site. To ensure website security, developers can implement HTTPS encryption, regularly update software and plugins, use secure coding practices, employ firewalls, and conduct regular security audits. Additionally, user authentication and authorization mechanisms should be robust to prevent unauthorized access.',
      },
      {
        id: 4,
        title: 'What is the role of content management systems (CMS) in website development?',
        description:
          'Content Management Systems (CMS) are platforms that allow users to easily create, manage, and modify digital content on a website without requiring technical expertise. CMS simplifies the process of content creation and editing, making it more accessible for non-technical users. Popular CMS options include WordPress, Drupal, and Joomla, each offering various features and customization options.',
      },
      {
        id: 5,
        title:
          'What are the key factors affecting website loading speed, and how can it be optimized?',
        description:
          "Website loading speed is influenced by factors such as large images, excessive HTTP requests, inefficient code, and server response time. To optimize loading speed, developers can compress images, minimize HTTP requests, use browser caching, and employ techniques like lazy loading for images. Additionally, optimizing code, utilizing Content Delivery Networks (CDNs), and choosing a reliable hosting provider can significantly improve a website's performance.",
      },
    ],
  },
  {
    serviceId: 103,
    serviceName: 'AI Integration',
    serviceImage: AiImage,
    serviceDescription:
      'Elevate your business with our cutting-edge AI integration expertise. At TechWizard, we seamlessly merge artificial intelligence into your operations, enhancing efficiency, personalizing customer experiences, and delivering data-driven insights. With a proven track record of success, our team of AI experts empowers your organization to thrive in the digital age. Harness the transformative power of AI integration with us today, and unlock the limitless possibilities for your business.',
    serviceCategory: 'AI',
    subServices: [
      {
        subServiceId: 201,
        subServiceName: 'Machine Learning Solutions',
        subServiceDetails: [
          {
            image: AiService1,
            title: 'Predictive Analytics',
            description: 'Insights from data patterns for future decision-making.',
          },
          {
            image: AiService2,
            title: 'Natural Language Processing',
            description: 'Interact with computers through human language understanding.',
          },
          {
            image: AiService3,
            title: 'Image Recognition',
            description: "AI's visual comprehension for various applications.",
          },
        ],
      },
      {
        subServiceId: 202,
        subServiceName: 'Data Analysis Tools',
        subServiceDetails: [
          {
            image: AiService4,
            title: 'Data Visualization',
            description: 'Present insights visually for informed decision-making',
          },
          {
            image: AiService5,
            title: 'Pattern Recognition',
            description: 'Identify patterns in complex data for valuable insights.',
          },
        ],
      },
      {
        subServiceId: 203,
        subServiceName: 'Voice Assistants',
        subServiceDetails: [
          {
            image: AiService6,
            title: 'google assistant',
            description: 'Interactive AI voice service for seamless user experiences.',
          },
          {
            image: AiService7,
            title: 'Amazon Alexa',
            description: 'AI voice assistant enhancing smart living and convenience.',
          },
        ],
      },
      {
        subServiceId: 204,
        subServiceName: 'Robotic Process Automation',
        subServiceDetails: [
          {
            image: AiService8,
            title: 'Automated Workflows',
            description: 'Efficiently automate repetitive tasks for enhanced productivity.',
          },
          {
            image: AiService9,
            title: 'Virtual Assistants',
            description: 'AI-powered assistants to streamline and enhance daily tasks.',
          },
          {
            image: AiService10,
            title: 'robot',
            description: 'Integrating AI for automating physical processes and tasks.',
          },
        ],
      },
    ],
    serviceFAQs: [
      {
        id: 1,
        title: 'What is AI integration, and why is it important for businesses?',
        description:
          "AI integration involves incorporating artificial intelligence capabilities and algorithms into existing systems or applications to enhance their functionality. It's important for businesses because it can automate tasks, improve decision-making, and enhance customer experiences, ultimately leading to increased efficiency and competitiveness.",
      },
      {
        id: 2,
        title: 'What are some common use cases for AI integration in business?',
        description:
          'AI integration can be applied in various domains, such as customer service (chatbots and virtual assistants), data analysis (predictive analytics and data-driven insights), automation (robotic process automation), and personalization (recommendation engines).',
      },
      {
        id: 3,
        title: 'How do I determine if my business needs AI integration?',
        description:
          'Assess your business processes and goals. If you have tasks that are repetitive, data-heavy, or require data-driven decision-making, AI integration can be beneficial. Consider whether AI can improve efficiency, reduce costs, or enhance the customer experience.',
      },
      {
        id: 4,
        title: 'What challenges should businesses be aware of when integrating AI?',
        description:
          "Challenges include data privacy and security concerns, the need for skilled AI talent, the potential for biases in AI models, and the cost of AI implementation. It's crucial to plan for these challenges and implement robust AI governance practices.",
      },
      {
        id: 5,
        title: 'What steps should a business take to successfully integrate AI?',
        description:
          'Start with a clear strategy, identifying specific use cases and expected outcomes. Collect and prepare high-quality data, choose the right AI tools or platforms, and invest in training for your team. Collaborate with AI experts and continually monitor and fine-tune AI models for optimal performance.',
      },
    ],
  },
  {
    serviceId: 104,
    serviceName: 'Software Development',
    serviceImage: SoftwareImgae,
    serviceDescription:
      'TechWizard provides high quality and reliable software development related services. We focus on your specific needs that matches budget and time frame. We have the experience to deliver simple customized software to full Cycle Software Development that matches your vision. Our Software Development service includes Custom Web Application Development, User Experience and Design, Custom Mobile App Development, Custom Database Development and customized services dependent on client request.',
    serviceCategory: 'Software Development',
    subServices: [
      {
        subServiceId: 201,
        subServiceName: 'website',
        subServiceDetails: [
          {
            image: SoftwareService1,
            title: 'E-commerce Integration',
            description: 'Online store integration for convenient transactions.',
          },
          {
            image: SoftwareService2,
            title: 'Custom Web Applications',
            description: 'Tailored web solutions for specific business needs.',
          },
        ],
      },
      {
        subServiceId: 202,
        subServiceName: 'online store',
        subServiceDetails: [
          {
            image: SoftwareService3,
            title: 'Shopping Cart Functionality',
            description: 'Seamless shopping cart experience for customers.',
          },
          {
            image: SoftwareService4,
            title: 'Payment Gateway Integration',
            description: 'Secure integration of payment methods for online transactions.',
          },
        ],
      },
      {
        subServiceId: 203,
        subServiceName: 'social app',
        subServiceDetails: [
          {
            image: SoftwareService5,
            title: 'User Authentication',
            description: 'Secure user identity verification for app access.',
          },
          {
            image: SoftwareService6,
            title: 'Real-time Social Feeds',
            description: 'Instant updates of social interactions and content.',
          },
        ],
      },
      {
        subServiceId: 204,
        subServiceName: 'Custom Software',
        subServiceDetails: [
          {
            image: SoftwareService7,
            title: 'ERP',
            description:
              'Tailored ERP solutions, customized to perfection for client-specific requirements.',
          },
          {
            image: SoftwareService8,
            title: 'CRM',
            description: 'Our CRM solutions, expertly crafted to meet unique business needs.',
          },
        ],
      },
    ],
    serviceFAQs: [
      {
        id: 1,
        title: 'What is software development, and why is it important?',
        description:
          "Software development is the process of designing, coding, testing, and maintaining software applications. It's crucial because software powers many aspects of modern life, from business operations to entertainment and communication, making it a cornerstone of technological progress.",
      },
      {
        id: 2,
        title: 'What are the common programming languages used in software development?',
        description:
          "Several programming languages are commonly used in software development, including Java, Python, C++, JavaScript, and C#. The choice of language depends on the specific project's requirements and goals.",
      },
      {
        id: 3,
        title: 'What is the software development life cycle (SDLC), and why is it significant?',
        description:
          "The Software Development Life Cycle (SDLC) is a structured approach to software development, consisting of phases like planning, design, coding, testing, deployment, and maintenance. It's significant because it provides a framework for organized and efficient development, ensuring that the end product meets user needs and quality standards.",
      },
      {
        id: 4,
        title: 'What are the key challenges in software development?',
        description:
          'Challenges in software development include managing project scope, meeting deadlines, ensuring software security, dealing with changing requirements, and maintaining code as technologies evolve. Effective project management and best practices help address these challenges.',
      },
      {
        id: 5,
        title:
          'How can I stay up to date with the latest trends and technologies in software development?',
        description:
          'To stay current, consider reading industry publications, participating in online developer communities, attending conferences, and taking online courses. Continuous learning is essential in a field that evolves rapidly.',
      },
    ],
  },
  {
    serviceId: 105,
    serviceName: 'Game Development',
    serviceImage: GameImgae,
    serviceDescription:
      'We specialize in delivering AAA type game development services that cater to the diverse needs of the gaming industry. With a team of highly skilled and passionate game developers, designers, and artists, we are creating captivating and immersive gaming experiences across various platforms like Android, iOS, PC, Console, AR, VR and Web. We are using most used game engines like Unity, Unreal and Godot according to customer demand and budget. We also provide full support for 2D, 2.5D, 3D offline and multiplayer games. ',
    serviceCategory: 'Investment',
    subServices: [
      {
        subServiceId: 201,
        subServiceName: 'game',
        subServiceDetails: [
          {
            image: GameService1,
            title: '2d games',
            description: 'Engaging 2D game development for immersive user experiences.',
          },
          {
            image: GameService2,
            title: '3d games',
            description: 'Creating dynamic 3D games with captivating graphics and gameplay.',
          },
        ],
      },
    ],
    serviceFAQs: [
      {
        id: 1,
        title: 'What is game development, and what are the key stages of the process?',
        description:
          'Game development is the process of creating video games, encompassing various stages like concept development, design, coding, testing, and final deployment. Each stage involves a range of tasks and skills, including art, programming, sound design, and quality assurance.',
      },
      {
        id: 2,
        title: 'What programming languages and tools are commonly used in game development?',
        description:
          'Popular programming languages for game development include C++, C#, and Python. Game engines like Unity, Unreal Engine, and Godot provide comprehensive toolsets for game developers, simplifying the development process.',
      },
      {
        id: 3,
        title: 'What are the major challenges in game development?',
        description:
          'Challenges in game development include optimizing performance across various platforms, creating engaging gameplay experiences, handling complex 3D graphics, managing game project scope, and ensuring compatibility with multiple devices and operating systems.',
      },
      {
        id: 4,
        title:
          'How can I get started in game development, and what skills are essential for success?',
        description:
          'Getting started in game development often involves learning a programming language, gaining proficiency in a game engine, and creating a portfolio of projects. Essential skills include coding, 2D and 3D art, sound design, storytelling, and a deep understanding of player psychology.',
      },
      {
        id: 5,
        title: 'What are the different roles in a game development team?',
        description:
          'A game development team typically includes roles like game designers, programmers, artists (2D and 3D), sound designers, quality assurance testers, project managers, and producers. The size and composition of the team can vary depending on the scope of the project.',
      },
    ],
  },
  {
    serviceId: 106,
    serviceName: 'Mobile App development',
    serviceImage: AppImgae,
    serviceDescription:
      "At TechWizard, we are dedicated to crafting exceptional mobile applications that cater to your specific needs. With a team of seasoned developers, we specialize in creating customized iOS and Android apps that prioritize an impeccable user experience. Our commitment doesn't stop at launch; we provide ongoing support and maintenance to ensure your app functions flawlessly. Security is at the core of our development process, ensuring data privacy and compliance with industry standards.",
    serviceCategory: 'mobile development',
    subServices: [
      {
        subServiceId: 201,
        subServiceName: 'Gaming Apps',
        subServiceDetails: [
          {
            image: AppService1,
            title: 'games',
            description:
              'Engaging mobile game development for immersive entertainment experiences.',
          },
        ],
      },
      {
        subServiceId: 202,
        subServiceName: 'e-commerce apps',
        subServiceDetails: [
          {
            image: AppService2,
            title: 'electronics',
            description: 'Creating mobile apps for electronics shopping and seamless transactions.',
          },
          {
            image: AppService3,
            title: 'clothing',
            description:
              'Developing mobile apps for clothing retail with easy browsing and checkout.',
          },
        ],
      },
      {
        subServiceId: 203,
        subServiceName: 'Utility Apps',
        subServiceDetails: [
          {
            image: AppService4,
            title: 'calculating',
            description: 'Functional utility apps for various mathematical and calculation needs.',
          },
          {
            image: AppService5,
            title: 'attendence',
            description:
              'Creating attendance tracking apps for educational and organizational purposes.',
          },
        ],
      },
    ],
    serviceFAQs: [
      {
        id: 1,
        title: 'What is mobile app development, and why is it important?',
        description:
          "Mobile app development involves creating software applications for mobile devices such as smartphones and tablets. It's important because mobile apps have become essential tools for businesses to engage with their customers, streamline operations, and expand their reach in the digital space.",
      },
      {
        id: 2,
        title: 'What are the primary platforms for mobile app development?',
        description:
          'The two main platforms for mobile app development are Android and iOS. Android apps are developed using Java or Kotlin, while iOS apps are typically built with Swift or Objective-C. Cross-platform development tools like React Native and Flutter also enable developers to create apps for both platforms simultaneously.',
      },
      {
        id: 3,
        title: 'How long does it take to develop a mobile app?',
        description:
          "The time required to develop a mobile app varies significantly depending on the complexity of the app, its features, and the team's expertise. Simple apps might take a few months, while more complex ones can take a year or longer. Proper planning, design, and project management are key to meeting timelines.",
      },
      {
        id: 4,
        title: 'What are the essential steps in mobile app development?',
        description:
          'The key steps in mobile app development include idea conceptualization, market research, design and prototyping, development, testing, deployment, and ongoing maintenance. Each phase is crucial to delivering a successful mobile app.',
      },
      {
        id: 5,
        title: 'How do I choose between native and cross-platform app development?',
        description:
          'The choice between native and cross-platform development depends on factors like your target audience, project requirements, budget, and development timeline. Native apps often offer better performance but may require separate development for iOS and Android. Cross-platform development can be more cost-effective and faster but may have some performance trade-offs.',
      },
    ],
  },
  {
    serviceId: 107,
    serviceName: 'Digital Agency',
    serviceImage: DigitalAgencyImage,
    serviceDescription:
      "TechWizard is offering a wide array of services to empower your online presence. From web development to SEO, we create stunning websites and optimize them for search engines. Our team excels in e-commerce solutions, responsive design, and content migration, ensuring your brand's success in the digital realm. We also specialize in custom theme and plugin development, enhancing your website's functionality and aesthetics.",

    subServices: [
      {
        subServiceId: 201,
        subServiceName: 'Graphics design',
        subServiceDetails: [
          {
            image: DigitalService1,
            title: 'id card',
            description: 'Distinct ID card design for personal and professional use.',
          },
          {
            image: DigitalService2,
            title: 'logo design',
            description: 'Crafting unique and impactful logos for brand identity.',
          },
          {
            image: DigitalService3,
            title: 't-Shirt design',
            description: 'Creating engaging t-shirt designs for various occasions.',
          },
        ],
      },
      {
        subServiceId: 202,
        subServiceName: 'wordpress development',
        subServiceDetails: [
          {
            image: DigitalService4,
            title: 'Custom Theme Development',
            description:
              'Craft unique, branded WordPress themes for a distinct website look and feel tailored to your needs.',
          },
          {
            image: DigitalService5,
            title: 'Plugin Development',
            description:
              'Build custom WordPress plugins for exclusive website functionalities and integrations.',
          },
        ],
      },

      {
        subServiceId: 204,
        subServiceName: 'DGM (Digital Marketing)',
        subServiceDetails: [
          {
            image: DigitalService6,
            title: 'SEO (Search Engine Optimization)',
            description:
              'Enhance website visibility on search engines and boost organic traffic through on-page and off-page optimization.',
          },
          {
            image: DigitalService7,
            title: 'SMM (Social Media Marketing)',
            description:
              'Build a strong online presence, engage with the audience, and promote your brand through various social media platforms.',
          },
        ],
      },
    ],
  },
];
