const ToggleButton = ({ isLogin, onClick }) => {
  return (
    <p className="mt-2 text-sm text-gray-300">
      {isLogin ? "Don't have an account? " : "Already have an account? "}
      <button
        onClick={onClick}
        className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200"
      >
        {isLogin ? "Sign up" : "Log in"}
      </button>
    </p>
  );
};

export default ToggleButton;
