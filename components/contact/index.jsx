'use client';

import { Breadcrumb } from '@/components/common/Breadcrumb';

import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb title="Contact" />

      <div className="py-14">
        <div className="container">
          {/* CONTACT INFO & FORM */}
          <div className="grid lg:grid-cols-2 gap-20">
            {/* CONTACT INFO */}
            <ContactInfo />
            {/* CONTACT INFO */}

            {/* CONTACT FORM */}
            <ContactForm />
            {/* CONTACT FORM */}
          </div>
          {/* CONTACT DETAILS & FORM */}
        </div>

        {/* GOOGLE MAPS */}
        <div className="pt-20 -mb-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193564.25507841044!2d-74.16311441953123!3d40.70829670478188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1709527044371!5m2!1sen!2sbd"
            width="1000"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
