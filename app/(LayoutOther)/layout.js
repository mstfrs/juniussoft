import 'swiper/css';
import '@/styles/style.css';
import '@/styles/custom.css';

import Image from 'next/image';

import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import HireModal from '@/components/modals/HireModal';
import JobApplyModal from '@/components/modals/JobApplyModal';
import ScrollToTop from '@/components/ScrollToTop';
import { ModalProvider } from '@/context/ModalContext';

import SectionShapeBottom from '@/public/assets/images/home/section-shape-bottom.png';
import SectionShapeTop from '@/public/assets/images/home/section-shape-top.png';

export const metadata = {
  title: 'TechWizard - Next js IT Solutions Services and Technology React Template',
  description: 'TechWizard - Next js IT Solutions Services and Technology React Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ModalProvider>
          <Header headerPrimary={false} />
          <div className="relative overflow-hidden">
            <Image
              src={SectionShapeTop}
              alt="Shape"
              className="absolute top-[330px] right-0 -z-10"
            />
            {children}
            <Image
              src={SectionShapeBottom}
              alt="Shape"
              className="absolute bottom-0 left-0 -z-10"
            />
          </div>
          <Footer />
          <HireModal />
          <JobApplyModal />
          <ScrollToTop />
        </ModalProvider>
      </body>
    </html>
  );
}
