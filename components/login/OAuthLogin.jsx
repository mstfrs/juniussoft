import SocialButton from '../SocialButton';

const OAuthLogin = () => {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <hr className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* SOCIAL LOGIN */}
      <div className="mt-6 flex gap-3 justify-center text-slate-500">
        <SocialButton name="facebook" href="#" classNames="border border-gray-300" />
        <SocialButton name="github" href="#" classNames="border border-gray-300" />
      </div>
      {/* SOCIAL LOGIN */}
    </div>
  );
};

export default OAuthLogin;
