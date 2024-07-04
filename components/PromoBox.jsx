import { useModal } from '@/context/ModalContext';
import Button from '@/components/Button';

const PromoBox = () => {
  const { setIsModalOpen } = useModal();

  return (
    <section className="promo-bg">
      <div className="container">
        <div className="py-12 text-white flex items-center gap-6 justify-between flex-wrap">
          <div>
            {/* TITLE */}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h4 className="sm:text-4xl text-3xl from-bold ">Let's Start a conversation today!</h4>

            {/* DESCRIPTION */}
            <p className="text-lg font-light">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're here to help you bring your project to life and we're experienced in handling
              overseas projects too.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 items-center">
            <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>
              GET QUOTATION
            </button>
            <Button text="CONTACT US" link="/contact" primary={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBox;
