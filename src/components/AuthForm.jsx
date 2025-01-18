import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import ToggleButton from "./ToggleButton";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle switching between Login and Sign Up
  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", username: "" });
    setErrors({});
    setTouched({});
    setShowPassword(false);
  };

  // Validation functions
  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };
  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
      password
    );
  };
  const validateUsername = (username) => /^[a-zA-Z0-9]{1,20}$/.test(username);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    if (name === "email" && !validateEmail(value)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (name === "password" && !validatePassword(value)) {
      newErrors.password = "Password must meet complexity requirements.";
    } else if (name === "username" && !validateUsername(value)) {
      newErrors.username = "Username must be 1-20 alphanumeric characters.";
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <ToggleButton isLogin={isLogin} onClick={handleModeSwitch} />
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <InputField
                name="username"
                type="text"
                placeholder="Username"
                icon={<User />}
                value={formData.username}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.username}
                touched={touched.username}
                autoComplete="off"
              />
            )}
            <InputField
              name="email"
              type="email"
              placeholder="Email address"
              icon={<Mail />}
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              autoComplete="off"
            />
            <InputField
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              icon={<Lock />}
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              toggleIcon={showPassword ? <EyeOff /> : <Eye />}
              autoComplete="off"
            />

            <SubmitButton isLoading={isLoading} isLogin={isLogin} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
