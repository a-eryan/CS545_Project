/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import { HiOutlineEye, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import star from "../../assets/images/star.png";
import { useUser } from "../../store/userContext";

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { setUser } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Logging in with:", { username, password });
    setUser({
      name: username,
      email: username,
      password: password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center">
          <img
            src="https://ok14static.oktacdn.com/fs/bco/1/fs065kvts8xXrQTgE697"
            alt="Stevens Institute of Technology"
            className="h-12 mb-4"
          />
        </div>

        <h1 className="text-[var(--color-main-text)] text-center mb-2">
          Welcome to MyStevens!
        </h1>
        <div className="flex items-center justify-center mb-6">
          <hr className="flex-grow border-[var(--color-primary)]" />
          <img src={star} className="h-4 w-4 mx-2" alt="" />
          <hr className="flex-grow border-[var(--color-primary)]" />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1 text-left">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errors.username) {
                  setErrors((prev) => ({ ...prev, username: undefined }));
                }
              }}
              className={`
                w-full rounded-lg px-4 py-2 text-[var(--color-main-text)]
                border ${errors.username ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:ring-2
                ${
                  errors.username
                    ? "focus:ring-red-500"
                    : "focus:ring-[var(--color-primary)]"
                }
              `}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.username}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 text-left">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                className={`
                  w-full rounded-lg px-4 py-2 pr-10 text-[var(--color-main-text)]
                  border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }
                  focus:outline-none focus:ring-2
                  ${
                    errors.password
                      ? "focus:ring-red-500"
                      : "focus:ring-[var(--color-primary)]"
                  }
                `}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                onClick={() => setShowPassword((s) => !s)}
              >
                <HiOutlineEye className="w-5 h-5" />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-[#8C2938]"
              />
              <span className="ml-2">Keep me signed in</span>
            </label>
            <a
              href="#"
              className="inline-flex items-center text-[var(--color-primary)] hover:underline"
            >
              <HiOutlineQuestionMarkCircle className="w-4 h-4 mr-1" />
              Help / Forgot Password
            </a>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-opacity-90 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
