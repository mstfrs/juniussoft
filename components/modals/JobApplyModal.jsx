'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MultiSelect } from 'react-multi-select-component';
import { twMerge } from 'tailwind-merge';

import Input, { Textarea } from '@/components/Input';
import { LoadingButton } from '@/components/Button';
import { useModal } from '@/context/ModalContext';
import Select from '@/components/Select';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BsFileEarmarkFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import ThumbsUp from '@/public/assets/images/career/thumbs-up.png';

function JobApplyModal() {
  const skills = [
    { value: 'react.js', label: 'React.js' },
    { value: 'javaScript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'php', label: 'PHP' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'django', label: 'Django' },
    { value: 'node.js', label: 'Node.js' },
  ];

  const noticePeriodOpt = [
    { value: 'Less than month', label: 'Less than month' },
    { value: 'One month', label: 'One month' },
    { value: 'Two months', label: 'Two months' },
  ];

  const yearsOfExperienceOpt = [
    { value: 'No Experience', label: 'No Experience' },
    { value: '1 - 2 years', label: '1 - 2 years' },
    { value: '3 - 5 years', label: '3 - 5 years' },
    { value: '6 - 8 years', label: '6 - 8 years' },
    { value: '9 - 11 years', label: '9 - 11 years' },
    { value: '12 - 14 years', label: '12 - 14 years' },
    { value: '15 - 17 years', label: '15 - 17 years' },
    { value: '18 - 20 years', label: '18 - 20 years' },
  ];

  const defaultOpt = {
    value: '',
    label: 'Please Select',
  };

  const initialData = {
    fullName: '',
    email: '',
    number: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    yearExperience: '',
    skills: [],
    position: '',
    portfolio: '',
    coverLetter: '',
    yourMessage: '',
  };

  const [selectSkills, setSelectSkills] = useState([]);
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const { applyModalOpen, setApplyModalOpen, jobPosition } = useModal();
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [successSubmitted, setSuccessSubmitted] = useState(false);
  const [noticePeriod, setNoticePeriod] = useState('');
  const [yearExperience, setyearExperience] = useState('');

  const formRef = useRef(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ADD YOUR FORM SUMISSION FUNCTIONALITY HERE
  };

  const handleClose = () => {
    formRef?.current?.reset();
    setPreviewImg(null);
    setSelectSkills([]);
    setSuccessSubmitted(false);
    return setApplyModalOpen(false);
  };

  useEffect(() => {
    if (
      (formData.fullName && formData.number && formData.email,
      formData.expectedSalary && formData.skills && noticePeriod && yearExperience && file)
    ) {
      return setDisabled(false);
    }

    return setDisabled(true);
  }, [file, formData, noticePeriod, yearExperience]);

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
        style={{ scrollbarWidth: 'none' }}
        className={twMerge(
          'fixed z-50 inset-0 transition-all duration-500 hide-scrollbar',
          !applyModalOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
        )}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" onClick={handleClose}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full relative">
            <button onClick={handleClose} className="absolute right-4 top-4 text-gray-700">
              <MdClose className="text-4xl" />
            </button>

            <div className="bg-white sm:p-12 p-8 pt-14">
              {/* TITLE START */}
              <h2 className="text-4xl leading-6 font-bold text-center text-primary sm:mb-12 mb-6">
                Fill the job applications
              </h2>

              <form onSubmit={handleSubmit} ref={formRef}>
                {/* TEXT INPUTS */}
                <div className="grid md:grid-cols-3 md:gap-6">
                  <Input
                    type="Fullname"
                    id="fullName"
                    label="Your Full Name"
                    placeholder="Jhon"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />

                  <Input
                    type="email"
                    id="email"
                    label="Your Email Address"
                    placeholder="example@gmail.com"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />

                  <Input
                    type="text"
                    id="number"
                    label="Your Phone Number"
                    placeholder="+123456789"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 md:gap-6">
                  <Input
                    type="text"
                    id="currentSalary"
                    label="Current Salary"
                    placeholder="type here"
                    onChange={handleFormChange}
                  />
                  <Input
                    type="text"
                    id="expectedSalary"
                    label="Expected Salary"
                    placeholder="type here"
                    errorMessage="This field is required!"
                    onChange={handleFormChange}
                    required
                  />

                  <div>
                    <h3 className="mb-2 text-sm font-medium">
                      Available to start work/Notice period?
                      <span className="text-red-500">*</span>
                    </h3>

                    <Select
                      options={noticePeriodOpt}
                      defaultOption={defaultOpt}
                      selectedValue={noticePeriod}
                      errorMessage="This field is required!"
                      onChange={(e) => setNoticePeriod(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 md:gap-6">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">
                      Total Year of Experience
                      <span className="text-red-500">*</span>
                    </h3>

                    <Select
                      options={yearsOfExperienceOpt}
                      defaultOption={defaultOpt}
                      selectedValue={yearExperience}
                      onChange={(e) => setyearExperience(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-medium">
                      Your Skills
                      <span className="text-red-500">*</span>
                    </h3>

                    <MultiSelect
                      options={skills}
                      value={selectSkills}
                      onChange={setSelectSkills}
                      labelledBy="Select Your Skills"
                      required
                    />
                  </div>

                  <Input
                    type="text"
                    id="portfolio"
                    label="Your Portfolio Link"
                    placeholder="example.com"
                    onChange={handleFormChange}
                  />
                </div>
                {/* TEXT INPUTS */}

                {/* MESSAGE */}
                <div className="mt-4">
                  <Textarea
                    label="Cover Letter"
                    id="coverLetter"
                    value={formData.coverLetter}
                    placeholder="Write Your Cover Letter Here..."
                    onChange={handleFormChange}
                  />
                  <Textarea
                    label="Anything you want to say"
                    id="yourMessage"
                    value={formData.yourMessage}
                    placeholder="Your Message..."
                    onChange={handleFormChange}
                  />
                </div>
                {/* MESSAGE */}

                {/* UPLOAD INPUT */}
                <div className="mt-4 grid grid-cols-2 gap-8 items-end">
                  <div className="flex flex-col justify-center w-full">
                    <h3 className="mb-4 text-xl">
                      Attach your resume
                      <span className="text-red-500">*</span>
                    </h3>
                    <label
                      htmlFor="file2"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center p-6">
                        <AiOutlineCloudUpload className="text-4xl text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500 ">
                          <span className="font-semibold">Click to Upload</span> (MAX. 10MB)
                        </p>
                      </div>
                      <input
                        id="file2"
                        type="file"
                        name="file2"
                        className="hidden"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          setPreviewImg(URL.createObjectURL(e.target.files && e.target.files[0]));
                        }}
                      />
                    </label>
                  </div>

                  {previewImg && (
                    <div className="w-full h-32 border border-solid border-gray-300 rounded-lg relative grid place-items-center">
                      <button
                        className="absolute -right-2 -top-2 rounded-full w-6 h-6 bg-red-600 text-white grid place-items-center"
                        onClick={() => setPreviewImg(null)}
                      >
                        <MdClose className="text-2xl" />
                      </button>

                      <div className="flex gap-3 items-center">
                        <span className="w-14 h-14 bg-gray-200 rounded-md grid place-items-center text-3xl text-blue-500">
                          <BsFileEarmarkFill />
                        </span>

                        <div>
                          <h5 className="font-medium text-xl max-w-[250px] line-clamp-2">
                            {file?.name}
                          </h5>
                          <p className="text-primary text-lg">{Math.round(file?.size / 1024)} KB</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* UPLOAD INPUT */}

                <div className="flex items-center mt-4 mb-8">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-lg"
                  />
                  <label htmlFor="red-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">
                    Get notified when next job is posted
                  </label>
                </div>

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

export default JobApplyModal;
