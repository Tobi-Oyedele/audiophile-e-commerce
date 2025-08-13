import { useState } from "react";
import { loginSchema, type LoginFormData } from "../lib/schemas";
import { supabase } from "../lib/supabase";
import { User, AlertCircle, CheckCircle, EyeOff, Eye } from "lucide-react";

const Login = () => {
  //proper typing for state
  const [login, setlogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  //error state
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormData, string>>
  >({});

  const validateForm = (): boolean => {
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {};
      result.error.issues.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof LoginFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      if (login) {
        // Login existing user
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        setMessage({
          type: "success",
          text: "Login successful! Redirecting...",
        });

        // Redirect to home page
        window.location.href = "/home";
      } else {
        // Sign up new user
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        setMessage({
          type: "success",
          text: "Account Created Successfully!",
        });
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      setMessage({ type: "error", text: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-audiophile-primary-grey">
      <div className="bg-white rounded-xl p-14 space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-1">
          <div className="bg-audiophile-secondary-hover w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
            <User className="w-8 h-8 text-audiophile-secondary-color" />
          </div>
          <h1>{login ? "Welcome Back" : "Create Account"}</h1>
          <p>
            {login ? "Sign in into your account" : "Sign up for a new account"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2">
              Email Address
            </label>

            <div className="relative">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`px-8 py-2 border rounded-lg focus:border-audiophile-secondary-color outline-none transition-colors ${
                  errors.email ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              <User className="absolute left-[217px] top-2 cursor-pointer" />
            </div>
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`px-8 py-2 border rounded-lg focus:border-audiophile-secondary-color outline-none transition-colors ${
                  errors.email ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg mb-4 ${
                message.type === "error"
                  ? "bg-red-50 border border-red-200 text-red-700"
                  : "bg-green-50 border border-green-200 text-green-700"
              }`}
            >
              {message.type === "error" ? (
                <AlertCircle className="w-4 h-4" />
              ) : (
                <CheckCircle className="w-4 h-4" />
              )}
              <span className="text-sm">{message.text}</span>
            </div>
          )}

          {/*sign up / sign in button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-audiophile-secondary-color hover:bg-audiophile-secondary-hover focus:outline-none cursor-pointer"
          >
            {loading ? "Processing..." : login ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/*Need an account? */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setlogin(!login)}
            className="text-audiophile-secondary-color cursor-pointer"
          >
            {login
              ? "Need an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
