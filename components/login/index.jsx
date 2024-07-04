'use client';

import Link from 'next/link';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FloatedLabelInput } from '@/components/Input';
import useLoader from '@/hooks/useLoader';
import Loader from '@/components/common/Loader';
import OAuthLogin from './OAuthLogin';

const Login = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="login">
      <Breadcrumb title="Login" />

      <div className="py-20 bg-gray-50 container">
        <div className="sm:mx-auto sm:w-full sm:max-w-md relative group">
          {/* SHAPE */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-10 bg-primary -z-10 scale-105 rounded-md transition-all duration-500 skew-x-6 group-hover:-skew-x-6"></div>
          {/* SHAPE */}

          <div className="bg-white border border-slate-100 border-solid px-4 py-8 shadow-md sm:rounded-lg sm:px-10">
            {/* FORM START */}
            <form className="space-y-6 text-slate-500" onSubmit={(e) => e.preventDefault()}>
              {/* TITLE */}
              <h5 className="text-2xl font-semibold text-slate-900">Welcome back, Log in</h5>
              {/* TITLE */}

              {/* INPUTS */}
              <FloatedLabelInput type="email" id="email" placeholder="" label="Email Address" />
              <FloatedLabelInput type="password" id="password" placeholder="" label="Password" />
              {/* INPUTS */}

              {/*  CHECKBOX AND FORGOT LINK */}
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border-slate-100 border border-solid rounded-lg accent-primary"
                    />
                  </div>
                  <label for="remember" className="ml-2 text-sm font-medium">
                    Remember me
                  </label>
                </div>
                <Link href="#" className="ml-auto text-sm hover:underline text-primary">
                  Forgot Password?
                </Link>
              </div>
              {/*  CHECKBOX AND FORGOT LINK */}

              {/* SUBMIT BUTTON */}
              <div>
                <button
                  type="submit"
                  className="flex justify-center rounded-md px-3 py-2 w-full text-lg text-slate-50 font-semibold bg-primary hover:bg-primary active:scale-95 transition-all duration-500"
                >
                  Login
                </button>
              </div>
              {/* SUBMIT BUTTON */}
            </form>
            {/* FORM END */}

            {/* oAUTH */}
            <OAuthLogin />

            {/* CREATE ACCOUNT LINK */}
            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
              <div>Not registered?</div>
              <Link href="/register" className="cursor-pointer text-primary hover:underline">
                Create Account
              </Link>
            </div>
            {/* CREATE ACCOUNT LINK */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
