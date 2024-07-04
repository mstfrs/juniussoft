import WhoWeAreImg1 from '@/public/assets/images/about/who-we-are-1.jpg';
import WhoWeAreImg2 from '@/public/assets/images/about/who-we-are-2.jpg';
import { BsPostcard } from 'react-icons/bs';
import { RiUserStarLine } from 'react-icons/ri';

export const aboutUsData = {
  aboutId: 101,
  aboutTitle: 'About TechWizard.',
  aboutImage: [WhoWeAreImg1, WhoWeAreImg2],
  aboutDescription:
    'TechWizard is a tech company established in 2019, dedicated to providing innovative and cutting-edge technology solutions to businesses and organizations. With a commitment to excellence, we specialize in delivering high-quality IT services that drive efficiency, productivity, and growth. We have a record of completing over 150 projects on time with 100% client satisfaction. Currently, we employ a team of 150+ professionals and continue to grow as a company.',
  keyPoints: [
    {
      icon: BsPostcard,
      title: 'Overseas Projects',
      description: 'An innovation-focused partnership fostering collaboration and progress.',
    },
    {
      icon: RiUserStarLine,
      title: 'Client Satisfaction',
      description: '100% Satisfaction rate across 150+ completed projects.',
    },
  ],
  ourMission: [
    {
      aboutId: 102,
      aboutTitle: 'Our Mission',
      aboutDescription:
        'Our core mission is to empower both businesses and individuals by providing innovative and tailor-made IT solutions that boost productivity, streamline operations, and fuel growth.',
    },
    {
      aboutId: 103,
      aboutTitle: 'Our Vision',
      aboutDescription:
        'We strive to nurture outstanding developers who can confidently represent our organization on the global stage, fueled by a dynamic culture and unwavering motivation.',
    },
  ],
};
