import { useState } from 'react';
import Input, { Textarea } from '../Input';
import Select from '../Select';

const ContactForm = () => {
  const defaultOpt = {
    value: '',
    label: 'Department',
  };

  const departmentOptions = [
    { value: 'Support and Service', label: 'Support and Service' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Others', label: 'Others' },
  ];

  const [departmentSelect, setDepartmentSelect] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // ADD YOUR FORM SUBMIT FUNCTIONALIY HERE
  };

  return (
    <div>
      <div className="space-y-3">
        {/* TITLE */}
        <h4 className="text-3xl font-medium">SEND A MESSAGE</h4>
        <p className="text-lg text-darkGray">
          Your email address will not be published. Required fields are marked.
        </p>
      </div>

      <hr className="w-[85px] h-px bg-darkGray mt-5 mb-10" />

      {/* CONTACT FORM */}
      <form className="grid grid-cols-1 w-full" onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-6 w-full">
          <Input
            id="name"
            type="text"
            placeholder="Full Name*"
            errorMessage="This field is required!"
            classNames="px-5 py-3 w-full"
            required
          />
          <Input
            id="email"
            type="email"
            placeholder="Email Address*"
            errorMessage="This field is required!"
            classNames="px-5 py-3 w-full"
            required
          />
        </div>
        <Input
          id="subject"
          type="text"
          placeholder="Subject*"
          errorMessage="This field is required!"
          classNames="px-5 py-3 w-full"
          required
        />

        <Select
          classNames="px-5 py-3 w-full mb-6"
          options={departmentOptions}
          defaultOption={defaultOpt}
          selectedValue={departmentSelect}
          onChange={(e) => {
            setDepartmentSelect(e.target.value);
          }}
        />

        <Textarea
          name="message"
          id="message"
          placeholder="Your Message"
          classNames="px-5 py-3 w-full rounded-md"
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="btn btn-secondary text-white w-full text-lg tracking-wider rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
