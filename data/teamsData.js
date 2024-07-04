import ManagementTeamImg from '@/public/assets/images/team/management-team.jpg';
import WebTeamImg from '@/public/assets/images/team/web-team.jpg';
import GameTeamImg from '@/public/assets/images/team/game-team.jpg';
import SqaTeamImg from '@/public/assets/images/team/sqa-team.jpg';
import HrTeamImg from '@/public/assets/images/team/hr-team.jpg';
import BusinessTeamImg from '@/public/assets/images/team/business-team.jpg';

import MemberImg1 from '@/public/assets/images/team/member-1.jpg';
import MemberImg2 from '@/public/assets/images/team/member-2.jpg';
import MemberImg3 from '@/public/assets/images/team/member-3.jpg';
import MemberImg4 from '@/public/assets/images/team/member-4.jpg';
import MemberImg5 from '@/public/assets/images/team/member-5.jpg';
import MemberImg6 from '@/public/assets/images/team/member-6.jpg';
import MemberImg7 from '@/public/assets/images/team/member-7.jpg';
import MemberImg8 from '@/public/assets/images/team/member-8.jpg';
import MemberImg9 from '@/public/assets/images/team/member-9.jpg';
import MemberImg10 from '@/public/assets/images/team/member-10.jpg';
import MemberImg11 from '@/public/assets/images/team/member-11.jpg';
import MemberImg12 from '@/public/assets/images/team/member-12.jpg';
import MemberImg13 from '@/public/assets/images/team/member-13.jpg';
import MemberImg14 from '@/public/assets/images/team/member-14.jpg';

export const teamsData = [
  {
    teamId: 101,
    teamThumbnail: ManagementTeamImg,
    teamSlug: 'management',
    teamName: 'Management Team',
    teamImage: ManagementTeamImg,
    teamQuote: 'Leadership is the capacity to translate vision into reality',
    singleMember: [
      {
        memberId: 1,
        memberImage: MemberImg9,
        memberName: 'John Doe',
        memberPosition: 'CEO & Founder',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription: 'Experienced leader in the tech industry with a passion for innovation.',
        memberSkills: ['Leadership', 'Innovation', 'Strategic Planning'],
        memberDOB: '1980-05-15',
        memberEducationInstitute: 'University of Tech',
        memberEducationLevel: 'MBA',
        memberExperience: '15 years',
      },
      {
        memberId: 2,
        memberImage: MemberImg10,
        memberName: 'Alice Johnson',
        memberPosition: 'Managing Director',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Alice is a seasoned executive with a proven track record of driving growth and innovation. She brings extensive experience in leading teams and developing strategic initiatives for organizational success.',
        memberSkills: ['Strategic Leadership', 'Business Development', 'Financial Management'],
        memberDOB: '1978-12-10',
        memberEducationInstitute: 'Business School',
        memberEducationLevel: 'MBA',
        memberExperience: '20 years',
      },
      {
        memberId: 3,
        memberImage: MemberImg11,
        memberName: 'Jane Smith',
        memberPosition: 'CTO',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription: 'Passionate technologist with a focus on cutting-edge solutions.',
        memberSkills: ['Software Development', 'Data Science', 'Cloud Computing'],
        memberDOB: '1985-09-28',
        memberEducationInstitute: 'Tech Institute',
        memberEducationLevel: 'Ph.D. Computer Science',
        memberExperience: '12 years',
      },
      {
        memberId: 4,
        memberImage: MemberImg7,
        memberName: 'Michael Smith',
        memberPosition: 'Associate Director',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
          {
            name: 'github',
            link: '',
          },
        ],
        memberDescription: 'memberDetails?.socialLinks',
        memberSkills: ['Team Leadership', 'Project Management', 'Strategic Planning'],
        memberDOB: '1983-07-25',
        memberEducationInstitute: 'University of Business',
        memberEducationLevel: 'MBA',
        memberExperience: '15 years',
      },
    ],
  },
  {
    teamId: 102,
    teamThumbnail: WebTeamImg,
    teamSlug: 'web-dev',
    teamName: 'Web Dev Team',
    teamImage: WebTeamImg,
    teamQuote:
      'Innovation is born when a development team dreams together and acts upon those dreams',
    singleMember: [
      {
        memberId: 5,
        memberImage: MemberImg13,
        memberName: 'Sarah Johnson',
        memberPosition: 'Lead Developer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Highly skilled lead developer with a passion for creating robust and scalable web applications.',
        memberSkills: ['React JS', 'Python', 'Node JS', 'JavaScript', 'MySQL'],
        memberDOB: '1985-03-12',
        memberEducationInstitute: 'University of Computer Science',
        memberEducationLevel: "Bachelor's Degree in Computer Science",
        memberExperience: '12 years',
      },
      {
        memberId: 6,
        memberImage: MemberImg1,
        memberName: 'Alex Smith',
        memberPosition: 'Backend Developer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Experienced backend developer with a focus on building scalable APIs and optimizing database performance.',
        memberSkills: ['Node JS', 'Python', 'MongoDB', 'Express.js', 'RESTful APIs'],
        memberDOB: '1988-07-18',
        memberEducationInstitute: 'Tech Institute',
        memberEducationLevel: "Master's Degree in Computer Engineering",
        memberExperience: '10 years',
      },
      {
        memberId: 7,
        memberImage: MemberImg12,
        memberName: 'Emma Brown',
        memberPosition: 'Frontend Developer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Creative frontend developer with expertise in HTML, CSS, and JavaScript.',
        memberSkills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Sass'],
        memberDOB: '1990-05-25',
        memberEducationInstitute: 'Design Institute',
        memberEducationLevel: "Bachelor's Degree in Web Design",
        memberExperience: '8 years',
      },
      {
        memberId: 8,
        memberImage: MemberImg2,
        memberName: 'John Doe',
        memberPosition: 'Full Stack Developer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Versatile full-stack developer with a strong foundation in both frontend and backend technologies.',
        memberSkills: ['JavaScript', 'Node JS', 'React JS', 'MongoDB', 'Express.js'],
        memberDOB: '1987-11-02',
        memberEducationInstitute: 'Tech University',
        memberEducationLevel: "Bachelor's Degree in Computer Science",
        memberExperience: '9 years',
      },
      {
        memberId: 9,
        memberImage: MemberImg3,
        memberName: 'Ashiqul Islam',
        memberPosition: 'UI/UX Designer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Creative UI/UX designer with a focus on crafting intuitive user interfaces.',
        memberSkills: ['UI Design', 'UX Design', 'Adobe XD', 'Sketch', 'Figma'],
        memberDOB: '1992-09-15',
        memberEducationInstitute: 'Design Academy',
        memberEducationLevel: "Bachelor's Degree in Design",
        memberExperience: '7 years',
      },
      {
        memberId: 10,
        memberImage: MemberImg4,
        memberName: 'James Wilson',
        memberPosition: 'DevOps Engineer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'github',
            link: '',
          },
        ],
        memberDescription:
          'Experienced DevOps engineer specializing in automating deployment processes and infrastructure management.',
        memberSkills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
        memberDOB: '1987-05-05',
        memberEducationInstitute: 'Tech University',
        memberEducationLevel: "Bachelor's Degree in Computer Science",
        memberExperience: '9 years',
      },
      {
        memberId: 11,
        memberImage: MemberImg5,
        memberName: 'John Smith',
        memberPosition: 'Project Manager',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Experienced project manager with a proven track record of delivering complex projects on time and within budget. John excels in stakeholder management and resource allocation.',
        memberSkills: [
          'Project Management',
          'Stakeholder Engagement',
          'Risk Management',
          'Agile Methodologies',
          'Budget Management',
        ],
        memberDOB: '1980-04-15',
        memberEducationInstitute: 'Business School',
        memberEducationLevel: "Master's Degree in Project Management",
        memberExperience: '15 years',
      },
      {
        memberId: 11,
        memberImage: MemberImg6,
        memberName: 'Michael Johnson',
        memberPosition: 'Project Manager',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Seasoned project manager adept at leading cross-functional teams to achieve project objectives. Michael has a strong background in implementing Agile methodologies and fostering collaboration.',
        memberSkills: [
          'Project Management',
          'Agile Methodologies',
          'Team Leadership',
          'Resource Allocation',
          'Problem-solving',
        ],
        memberDOB: '1975-09-20',
        memberEducationInstitute: 'Management Institute',
        memberEducationLevel: "Master's Degree in Business Administration",
        memberExperience: '20 years',
      },

      {
        memberId: 12,
        memberImage: MemberImg7,
        memberName: 'Nathan Brown',
        memberPosition: 'Frontend Developer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Creative frontend developer with expertise in HTML, CSS, and JavaScript.',
        memberSkills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Sass'],
        memberDOB: '1990-05-25',
        memberEducationInstitute: 'Design Institute',
        memberEducationLevel: "Bachelor's Degree in Web Design",
        memberExperience: '8 years',
      },
      {
        memberId: 13,
        memberImage: MemberImg8,
        memberName: 'Christopher Wilson',
        memberPosition: 'DevOps Engineer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'github',
            link: '',
          },
        ],
        memberDescription:
          'Experienced DevOps engineer with expertise in automating deployment processes and ensuring system reliability.',
        memberSkills: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'AWS'],
        memberDOB: '1989-04-28',
        memberEducationInstitute: 'Tech Institute',
        memberEducationLevel: "Bachelor's Degree in Computer Science",
        memberExperience: '8 years',
      },
      {
        memberId: 14,
        memberImage: MemberImg9,
        memberName: 'Olivia Parker',
        memberPosition: 'Backend Developer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Skilled backend developer with a focus on building scalable and efficient server-side applications.',
        memberSkills: ['Node JS', 'Python', 'Django', 'Flask', 'PostgreSQL'],
        memberDOB: '1992-08-12',
        memberEducationInstitute: 'Computer Science Institute',
        memberEducationLevel: "Bachelor's Degree in Computer Science",
        memberExperience: '7 years',
      },
      {
        memberId: 15,
        memberImage: MemberImg10,
        memberName: 'Grace Taylor',
        memberPosition: 'UI/UX Designer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Talented UI/UX designer with a passion for creating visually appealing and user-friendly interfaces.',
        memberSkills: ['UI Design', 'UX Design', 'Adobe Photoshop', 'Sketch', 'InVision'],
        memberDOB: '1993-03-16',
        memberEducationInstitute: 'Design School',
        memberEducationLevel: "Bachelor's Degree in Design",
        memberExperience: '6 years',
      },
    ],
  },
  {
    teamId: 106,
    teamThumbnail: GameTeamImg,
    teamSlug: 'game-dev',
    teamName: 'Game Dev Team',
    teamImage: GameTeamImg,
    teamQuote: 'In the world of game development, the only limit is your imagination',
    singleMember: [
      {
        memberId: 16,
        memberImage: MemberImg6,
        memberName: 'Ryan Adams',
        memberPosition: 'Lead Game Designer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Experienced game designer with a passion for creating immersive and engaging gameplay experiences.',
        memberSkills: ['Game Design', 'Unity3D', 'C# Programming', 'Level Design', 'UI/UX Design'],
        memberDOB: '1982-11-08',
        memberEducationInstitute: 'Game Design Academy',
        memberEducationLevel: "Bachelor's Degree in Game Design",
        memberExperience: '15 years',
      },
      {
        memberId: 17,
        memberImage: MemberImg3,
        memberName: 'Emily Collins',
        memberPosition: 'Game Programmer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Skilled game programmer with expertise in coding gameplay mechanics and optimizing game performance.',
        memberSkills: [
          'C++',
          'Unity3D',
          'Game Development',
          'Scripting',
          'Game Engine Architecture',
        ],
        memberDOB: '1987-05-15',
        memberEducationInstitute: 'Computer Science Institute',
        memberEducationLevel: "Master's Degree in Computer Science",
        memberExperience: '12 years',
      },
      {
        memberId: 18,
        memberImage: MemberImg5,
        memberName: 'David Johnson',
        memberPosition: '3D Artist',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Talented 3D artist specializing in creating visually stunning game assets and environments.',
        memberSkills: ['3D Modeling', 'Texturing', 'Animation', 'Maya', 'Substance Painter'],
        memberDOB: '1990-09-20',
        memberEducationInstitute: 'Art School',
        memberEducationLevel: "Bachelor's Degree in Digital Arts",
        memberExperience: '8 years',
      },
    ],
  },
  {
    teamId: 107,
    teamThumbnail: SqaTeamImg,
    teamSlug: 'sqa',
    teamName: 'SQA Team',
    teamImage: SqaTeamImg,
    teamQuote:
      'In the world of software, the best quality assurance begins with a culture that promotes it',
    singleMember: [
      {
        memberId: 19,
        memberImage: MemberImg12,
        memberName: 'Rachel Green',
        memberPosition: 'Senior QA Engineer',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Experienced QA engineer with a focus on ensuring the quality and reliability of software products through comprehensive testing and analysis.',
        memberSkills: [
          'Manual Testing',
          'Automated Testing',
          'Test Planning',
          'Defect Tracking',
          'Regression Testing',
        ],
        memberDOB: '1985-12-15',
        memberEducationInstitute: 'Computer Science Institute',
        memberEducationLevel: "Bachelor's Degree in Computer Science",
        memberExperience: '10 years',
      },
      {
        memberId: 20,
        memberImage: MemberImg5,
        memberName: 'Daniel Carter',
        memberPosition: 'QA Analyst',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Skilled QA analyst with expertise in creating test cases, executing test plans, and identifying software defects. Daniel is committed to ensuring the highest quality standards are met.',
        memberSkills: [
          'Test Case Design',
          'Test Execution',
          'Defect Reporting',
          'Test Automation',
          'Quality Assurance Processes',
        ],
        memberDOB: '1990-08-25',
        memberEducationInstitute: 'Engineering College',
        memberEducationLevel: "Bachelor's Degree in Computer Engineering",
        memberExperience: '7 years',
      },
    ],
  },
  {
    teamId: 103,
    teamThumbnail: HrTeamImg,
    teamSlug: 'hr-team',
    teamName: 'HR Team',
    teamImage: HrTeamImg,
    teamQuote: 'Elevating teams through empathy, expertise, and exceptional HR solutions',
    singleMember: [
      {
        memberId: 21,
        memberImage: MemberImg8,
        memberName: 'Jessica Adams',
        memberPosition: 'HR Manager',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Experienced HR manager with a proven track record in talent acquisition, employee relations, and organizational development.',
        memberSkills: [
          'Recruitment',
          'Employee Relations',
          'Performance Management',
          'Training and Development',
          'HR Policies',
        ],
        memberDOB: '1980-07-12',
        memberEducationInstitute: 'Business School',
        memberEducationLevel: "Master's Degree in Human Resource Management",
        memberExperience: '15 years',
      },
      {
        memberId: 22,
        memberImage: MemberImg14,
        memberName: 'Sophie White',
        memberPosition: 'HR Coordinator',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Dedicated HR coordinator with expertise in onboarding, benefits administration, and HRIS management. Sophie is committed to supporting the HR team and promoting a positive work culture.',
        memberSkills: [
          'Onboarding',
          'Benefits Administration',
          'HRIS Management',
          'Employee Engagement',
          'Compliance',
        ],
        memberDOB: '1990-03-25',
        memberEducationInstitute: 'Human Resources Institute',
        memberEducationLevel: "Bachelor's Degree in Human Resources",
        memberExperience: '8 years',
      },
      {
        memberId: 23,
        memberImage: MemberImg11,
        memberName: 'William Johnson',
        memberPosition: 'HR Specialist',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Experienced HR specialist with a focus on compensation and benefits, performance management, and employee development programs.',
        memberSkills: [
          'Compensation Management',
          'Benefits Administration',
          'Performance Appraisals',
          'Employee Development',
          'HR Analytics',
        ],
        memberDOB: '1985-05-18',
        memberEducationInstitute: 'Business College',
        memberEducationLevel: "Master's Degree in Human Resource Management",
        memberExperience: '12 years',
      },
    ],
  },
  {
    teamId: 105,
    teamThumbnail: BusinessTeamImg,
    teamSlug: 'business',
    teamName: 'Business Team',
    teamImage: BusinessTeamImg,
    teamQuote:
      "Great things in business are never done by one person; they're done by a team of people",
    singleMember: [
      {
        memberId: 24,
        memberImage: MemberImg9,
        memberName: 'Michael Turner',
        memberPosition: 'Sales Manager',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Experienced sales manager with a proven track record of driving revenue growth and building strong client relationships.',
        memberSkills: [
          'Sales Strategy',
          'Client Relationship Management',
          'Team Leadership',
          'Negotiation',
          'Sales Forecasting',
        ],
        memberDOB: '1985-03-15',
        memberEducationInstitute: 'Business College',
        memberEducationLevel: "Bachelor's Degree in Business Administration",
        memberExperience: '10 years',
      },
      {
        memberId: 25,
        memberImage: MemberImg11,
        memberName: 'David Miller',
        memberPosition: 'Marketing Manager',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Dynamic marketing manager with expertise in developing and executing marketing campaigns that drive brand awareness and customer engagement.',
        memberSkills: [
          'Marketing Strategy',
          'Digital Marketing',
          'Brand Management',
          'Campaign Development',
          'Market Research',
        ],
        memberDOB: '1987-06-20',
        memberEducationInstitute: 'Marketing Institute',
        memberEducationLevel: "Bachelor's Degree in Marketing",
        memberExperience: '9 years',
      },
      {
        memberId: 26,
        memberImage: MemberImg10,
        memberName: 'Christopher Hill',
        memberPosition: 'Financial Analyst',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'twitter',
            link: '',
          },
        ],
        memberDescription:
          'Detail-oriented financial analyst with expertise in financial modeling, budgeting, and forecasting.',
        memberSkills: [
          'Financial Modeling',
          'Budget Analysis',
          'Forecasting',
          'Financial Reporting',
          'Data Analysis',
        ],
        memberDOB: '1989-11-10',
        memberEducationInstitute: 'Finance College',
        memberEducationLevel: "Master's Degree in Finance",
        memberExperience: '8 years',
      },
      {
        memberId: 27,
        memberImage: MemberImg13,
        memberName: 'Emma Johnson',
        memberPosition: 'Business Development Executive',
        socialLinks: [
          {
            name: 'linkedin',
            link: '',
          },
          {
            name: 'facebook',
            link: '',
          },
        ],
        memberDescription:
          'Resourceful business development executive with a focus on identifying new business opportunities and nurturing client relationships.',
        memberSkills: [
          'Business Development',
          'Client Acquisition',
          'Relationship Building',
          'Market Research',
          'Proposal Development',
        ],
        memberDOB: '1992-04-25',
        memberEducationInstitute: 'Business School',
        memberEducationLevel: "Bachelor's Degree in Business Administration",
        memberExperience: '7 years',
      },
    ],
  },
];
