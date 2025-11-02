"use client"
import { AppContext } from "@/context/AppContext";
import { mockUsers } from "@/_lib";
import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const LoginPopUp = () => {
  const { ShowLoginPopup, setShowLoginPopup, setCurrentLoggedinUser } =
    useContext(AppContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let isValid = true;

    const newErrors = {
      email: "",
      password: "",
      general: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";

      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const user = mockUsers.find(
      (u) =>
        u.email.toLowerCase() === formData.email.toLowerCase() &&
        u.password === formData.password
    );

    if (user) {
      setCurrentLoggedinUser(user);
      setShowLoginPopup(false);
    } else {
      setErrors((prev) => ({ ...prev, general: "Invalid email or password" }));
    }
  }

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-black/60 backdrop-blur-sm">
      <form
        action="post"
        onSubmit={handleSubmit}
        className="max-h-[40rem] my-scrollbar overflow-y-auto p-10 flex max-w-[40rem] gap-10 flex-col border-2 border-double pt-20 rounded-2xl bg-gradient-to-br from-silver-very-dark to-light-black text-silver-very-light fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <FaWindowClose
          onClick={() => setShowLoginPopup(false)}
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer hover:scale-105 duration-300"
        />
        <div className="flex flex-col gap-6 w-full my-scrollbar">
          <h2 className="text-3xl font-bold text-center text-primary">Login</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your full email"
              className="p-3 rounded-2xl bg-silver-dark text-silver-very-light placeholder:bg-silver focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <span className="text-secondary text-sm">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="p-3 rounded-2xl bg-silver-dark text-silver-very-light placeholder:bg-silver focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <span className="text-secondary text-sm">{errors.password}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          role="button"
          className="p-2 w-2/3 place-self-center bg-primary rounded-xl bg-gradient-to-b from-primary to-primary-dark text-xl font-bold hover:scale-105 duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPopUp;
