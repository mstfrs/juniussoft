import { FaCartArrowDown, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import { GiOffshorePlatform } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import { MdEditDocument } from 'react-icons/md';

export const timelineData = [
  {
    timelineId: 101,
    year: '2019',
    timelineTitle: 'Company Formation and Early Days',
    timelineColor: '#11DCCA',
    icon: MdEditDocument,
    timelineDescription:
      'Our company was officially established in 2018, beginning with a small, dedicated team.',
  },
  {
    timelineId: 102,
    year: '2020',
    timelineTitle: 'Expansion into New Markets',
    timelineColor: '#ef5e97',
    icon: GiOffshorePlatform,
    timelineDescription:
      'We expanded our operations into new markets, introducing offshore services as part of our growth strategy.',
  },
  {
    timelineId: 103,
    year: '2021',
    timelineTitle: 'Key Partnership with XYZ Corp',
    timelineColor: '#a1bc34',
    icon: FaHandshake,
    timelineDescription:
      'Formed a strategic partnership with XYZ Corp, enhancing our collaborative initiatives.',
  },
  {
    timelineId: 104,
    year: '2022',
    timelineTitle: 'Diversification and Service Expansion',
    timelineColor: '#8bcea5',
    icon: FaCartArrowDown,
    timelineDescription:
      'We diversified our offerings by developing in-house products such as HRMS and a job portal, with plans to extend these solutions to external clients.',
  },
  {
    timelineId: 105,
    year: '2023',
    timelineTitle: 'Local & Global Reach',
    timelineColor: '#9a77b5',
    icon: FaGlobeAmericas,
    timelineDescription:
      'Initiated service offerings both locally and globally, focusing on key target markets.',
  },
  {
    timelineId: 106,
    year: '2024',
    timelineTitle: 'Establishment of Flagship Office',
    timelineColor: '#eba318',
    icon: ImLocation2,
    timelineDescription:
      'We launched a flagship office, marking a significant milestone in our journey towards innovation and talent acquisition.',
  },
];
