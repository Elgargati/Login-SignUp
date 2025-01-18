import { ArrowRight } from "lucide-react";

const SubmitButton = ({ isLoading, isLogin }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-400 to-violet-400 hover:from-teal-500 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 disabled:opacity-70"
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <ArrowRight className="h-5 w-5 text-white/70 group-hover:text-white/90 transition-colors duration-200" />
      </span>
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : isLogin ? (
        "Sign in"
      ) : (
        "Create account"
      )}
    </button>
  );
};

export default SubmitButton;
