'use client';

import Link from 'next/link';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import OAuthLogin from '@/components/login/OAuthLogin';
import { FloatedLabelInput } from '@/components/Input';
import useLoader from '@/hooks/useLoader';
import Loader from '@/components/common/Loader';

const Register = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="login">
      <Breadcrumb title="register" />

      <div className="py-20 bg-gray-50 container">
        <div class="sm:mx-auto sm:w-full sm:max-w-lg relative group">
          {/* SHAPE */}
          <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-10 bg-primary -z-10 scale-105 rounded-md transition-all duration-500 skew-x-6 group-hover:-skew-x-6"></div>
          {/* SHAPE */}

          <div class="bg-white border border-slate-100 border-solid px-4 py-8 shadow-md sm:rounded-lg sm:px-10">
            {/* FORM START */}
            <form class="space-y-6 text-slate-500" onSubmit={(e) => e.preventDefault()}>
              {/* TITLE */}
              <h5 class="text-2xl font-semibold text-slate-900">Become a Member</h5>
              {/* TITLE */}

              {/* INPUTS */}
              <FloatedLabelInput type="text" id="fullName" placeholder="" label="Full Name" />
              <FloatedLabelInput type="email" id="email" placeholder="" label="Email Address" />
              <FloatedLabelInput type="password" id="password" placeholder="" label="Password" />
              <FloatedLabelInput
                type="password"
                id="confirmPassword"
                placeholder=""
                label="Confirm Password"
              />
              {/* INPUTS */}

              {/*  CHECKBOX */}
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="agree"
                    type="checkbox"
                    class="w-4 h-4 border-slate-100 border border-solid rounded-lg accent-indigo-500"
                  />
                </div>
                <label for="agree" class="ml-2 text-sm font-medium">
                  I agree all statementsc in terms of services
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <div>
                <button
                  type="submit"
                  class="flex justify-center rounded-md px-3 py-2 w-full text-lg text-slate-50 font-semibold  bg-primary hover:bg-primary active:scale-95 transition-all duration-500"
                >
                  Register
                </button>
              </div>
              {/* SUBMIT BUTTON */}
            </form>
            {/* FORM END */}

            {/* oAUTH */}
            <OAuthLogin />

            {/* Already have an account Link */}
            <div class="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
              <div>Already have an account?</div>
              <Link href="/login" class="cursor-pointer text-primary hover:underline">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
