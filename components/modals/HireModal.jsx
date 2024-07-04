'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { LoadingButton } from '@/components/Button';
import Input, { Textarea } from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import Select from '@/components/Select';
import useSticky from '@/hooks/useSticky';
import { useModal } from '@/context/ModalContext';
import { twMerge } from 'tailwind-merge';

import { MdClose } from 'react-icons/md';
import { FaRegPaperPlane } from 'react-icons/fa';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import ThumbsUp from '@/public/assets/images/career/thumbs-up.png';

function HireModal() {
  const budgetOptions = [
    { value: 'just got started', label: 'Just got started' },
    { value: '25k - 75k', label: '25k - 75k' },
    { value: '75k - 150k', label: '75k - 150k' },
    { value: '150k - 300k', label: '150k - 300k' },
    { value: '300k+', label: '300k+' },
  ];

  const findOptions = [
    { value: 'google search', label: 'Google Search' },
    { value: 'clutch', label: 'Clutch' },
    { value: 'upcity', label: 'Upcity' },
    { value: 'facebook ad', label: 'Facebook Ad' },
    { value: 'linkedin', label: 'Linkedin' },
    { value: 'refarrel', label: 'Refarrel' },
    { value: 'other', label: 'Other' },
  ];

  const defaultOpt = {
    value: '',
    label: 'Please Select',
  };
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    company: '',
    website: '',
    message: '',
    budget: '',
    findOption: '',
    businessClassifications: [],
    lookingFor: [],
    file: null,
  };

  const [budgetSelect, setBudgetSelect] = useState('');
  const [findSelect, setFindSelect] = useState('');
  const [businessClassification, setBusinessClassification] = useState([]);
  const [lookingFor, setLookingFor] = useState([]);
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [successSubmitted, setSuccessSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { sticky } = useSticky(300);
  const { isModalOpen, setIsModalOpen } = useModal();
  const [formData, setFormData] = useState(initialData);

  const formRef = useRef(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClassificationCheckboxChange = (e) => {
    if (e.target.checked) {
      // Add the value to the array if checked
      setBusinessClassification((prevValues) => [...prevValues, e.target.value]);
    } else {
      // Remove the value from the array if unchecked
      setBusinessClassification((prevValues) =>
        prevValues.filter((value) => value !== e.target.value)
      );
    }
  };

  const handleLookingForCheckboxChange = (e) => {
    if (e.target.checked) {
      // Add the value to the array if checked
      setLookingFor((prevValues) => [...prevValues, e.target.value]);
    } else {
      // Remove the value from the array if unchecked
      setLookingFor((prevValues) => prevValues.filter((value) => value !== e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ADD YOUR FORM SUMISSION FUNCTIONALITY HERE
  };

  const handleClose = () => {
    formRef?.current?.reset();
    setPreviewImg(null);
    setSuccessSubmitted(false);
    return setIsModalOpen(false);
  };

  useEffect(() => {
    if (formData.firstName && formData.number && formData.email) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [formData]);

  return (
    <div>
      {successSubmitted && (
        <div
          className={twMerge(
            'fixed z-50 inset-0 transition-all duration-500 hide-scrollbar grid place-items-center',
            !successSubmitted ? 'opacity-0 invisible' : 'opacity-100 visible'
          )}
        >
          <div className="fixed inset-0 transition-opacity" onClick={handleClose}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="max-w-2xl w-full m-auto grid place-items-center p-12 gap-4 bg-white rounded-md shadow-md relative">
            <button onClick={handleClose} className="absolute right-4 top-4 text-gray-700">
              <MdClose className="text-4xl" />
            </button>

            <Image src={ThumbsUp} alt="thumbs-up" />

            <h4 className="text-3xl font-medium">Thanks for the Apply!</h4>
            <p className="text-darkGray text-lg">We will contact with you shortly.</p>
          </div>
        </div>
      )}

      <div
        className={twMerge(
          'z-50 fixed right-0 bottom-1/3 flex flex-col gap-1 transition-all duration-500 group',
          sticky
            ? 'translate-x-[65%] hover:translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        )}
      >
        <button
          className={`text-xl tracking-widest text-white flex items-center group`}
          onClick={() => setIsModalOpen(true)}
        >
          <span className="text-white text-3xl bg-primary px-4 py-3 transition-all">
            <FaRegPaperPlane />
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary pr-4 py-[13px]">
            Get Quote
          </span>
        </button>
      </div>

      <div
        style={{ scrollbarWidth: 'none' }}
        className={twMerge(
          'fixed z-50 inset-0 transition-all duration-500 hide-scrollbar',
          !isModalOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
        )}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" onClick={handleClose}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full relative">
            <button onClick={handleClose} className="absolute right-4 top-4 text-gray-700">
              <MdClose className="text-4xl" />
            </button>
            <div className="bg-white sm:p-12 p-8 pt-14">
              {/* TITLE START */}
              <h2 className="text-4xl leading-6 font-bold text-center text-primary mb-4">
                WORK WITH US
              </h2>
              <p className="text-lg text-center sm:mb-12 mb-6 text-gray-500">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                NOW, THAT'S SOME SMART THINKING.
              </p>
              {/* TITLE END */}

              <form onSubmit={handleSubmit} ref={formRef}>
                {/* TEXT INPUTS */}
                <div className="grid md:grid-cols-2 md:gap-6">
                  <Input
                    type="text"
                    id="firstName"
                    label="Your first name"
                    placeholder="Jhon"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />

                  <Input
                    type="text"
                    id="lastName"
                    label="Your last name"
                    placeholder="Doe"
                    onChange={handleFormChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <Input
                    type="email"
                    id="email"
                    label="Your email address"
                    placeholder="example@gmail.com"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />
                  <Input
                    type="text"
                    id="number"
                    label="Your phone number"
                    placeholder="+123456789"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <Input
                    type="text"
                    id="company"
                    label="Your company name"
                    placeholder="example"
                    onChange={handleFormChange}
                  />
                  <Input
                    type="text"
                    id="website"
                    label="Your website url"
                    placeholder="example.com"
                    onChange={handleFormChange}
                  />
                </div>
                {/* TEXT INPUTS */}

                {/* CHECKBOX INPUTS */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4 text-xl">Business Classification</h3>
                    <div className="grid grid-cols-2">
                      <Checkbox
                        id="ecommerce"
                        label="ECommerce"
                        value="ecommerce"
                        onChange={handleClassificationCheckboxChange}
                      />

                      <Checkbox
                        id="b2c"
                        label="B2C"
                        value="b2c"
                        onChange={handleClassificationCheckboxChange}
                      />
                      <Checkbox
                        id="b2b"
                        label="B2B"
                        value="b2b"
                        onChange={handleClassificationCheckboxChange}
                      />
                      <Checkbox
                        id="other"
                        label="Other"
                        value="other"
                        onChange={handleClassificationCheckboxChange}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl">What are you looking for?</h3>

                    <div className="grid grid-cols-2 ">
                      <Checkbox
                        id="design"
                        label="Design"
                        value="design"
                        onChange={handleLookingForCheckboxChange}
                      />

                      <Checkbox
                        id="development"
                        label="Development"
                        value="development"
                        onChange={handleLookingForCheckboxChange}
                      />
                      <Checkbox
                        id="marketing"
                        label="Marketing"
                        value="marketing"
                        onChange={handleLookingForCheckboxChange}
                      />
                    </div>
                  </div>
                </div>
                {/* CHECKBOX INPUTS */}

                {/* SELECT INPUTS */}
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h3 className="mb-4 text-xl">Project / Annual Marketing Budget</h3>
                    <Select
                      options={budgetOptions}
                      defaultOption={defaultOpt}
                      selectedValue={budgetSelect}
                      onChange={(e) => {
                        setBudgetSelect(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl">How did you hear about us?</h3>

                    <Select
                      options={findOptions}
                      defaultOption={defaultOpt}
                      selectedValue={findSelect}
                      onChange={(e) => setFindSelect(e.target.value)}
                    />
                  </div>
                </div>
                {/* SELECT INPUTS */}

                {/* MESSAGE */}
                <div className="mt-6">
                  <Textarea
                    label="How can we help?"
                    id="message"
                    value={formData.message}
                    placeholder="Tell us about your project..."
                    onChange={handleFormChange}
                  />
                </div>
                {/* MESSAGE */}

                {/* UPLOAD INPUT */}
                <div className="mt-4">
                  <div className="flex flex-col justify-center w-full">
                    <h3 className="mb-4 text-xl">Upload RFP/RFI</h3>
                    <label
                      htmlFor="file"
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center p-6">
                        <AiOutlineCloudUpload className="text-4xl text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500 ">
                          <span className="font-semibold">Click to upload</span> (MAX. 40MB)
                        </p>

                        {previewImg && (
                          <Image src={previewImg} alt="file preview" width={80} height={50} />
                        )}
                      </div>
                      <input
                        id="file"
                        type="file"
                        name="file"
                        className="hidden"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          setPreviewImg(URL.createObjectURL(e.target.files && e.target.files[0]));
                        }}
                      />
                    </label>
                  </div>
                </div>
                {/* UPLOAD INPUT */}

                <div className="flex items-center gap-8 justify-between mt-5">
                  {loading ? (
                    <LoadingButton />
                  ) : (
                    <button
                      type="submit"
                      className={twMerge(
                        'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:w-auto sm:text-sm',
                        disabled ? 'bg-gray-400' : 'bg-primary hover:bg-indigo-600'
                      )}
                      disabled={disabled}
                    >
                      Submit
                    </button>
                  )}

                  <button
                    onClick={handleClose}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireModal;
