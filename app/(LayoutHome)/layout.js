import 'swiper/css';
import '@/styles/style.css';
import '@/styles/custom.css';

import JobApplyModal from '@/components/modals/JobApplyModal';
import HireModal from '@/components/modals/HireModal';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { ModalProvider } from '@/context/ModalContext';

export const metadata = {
  title: 'TechWizard - Next js IT Solutions Services and Technology React Template',
  description: 'TechWizard - Next js IT Solutions Services and Technology React Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ModalProvider>
          <Header headerPrimary={true} />
          {children}
          <Footer />
          <HireModal />
          <JobApplyModal />
          <ScrollToTop />
        </ModalProvider>
      </body>
    </html>
  );
}
