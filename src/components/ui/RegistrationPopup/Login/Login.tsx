"use client"
import { AppContext } from "@/context/AppContext";
import { mockUsers } from "@/_lib";
import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";
import sideImage from "@/app/assets/website/pexels-itismowgli-824197.jpg"

const Login = () => {
  const { ShowLogin, setShowLogin, setCurrentLoggedinUser } =
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
      setShowLogin(false);
    } else {
      setErrors((prev) => ({ ...prev, general: "Invalid email or password" }));
    }
  }

  return (

    <form
      action="post"
      onSubmit={handleSubmit}
      className="flex gap-10 p-10 pt-30 text-silver-light"
    >
      {/* <FaWindowClose
          onClick={() => setShowLogin(false)}
          className="absolute w-5 h-5 duration-300 cursor-pointer top-5 right-5 hover:scale-105"
        /> */}
      <div className="flex flex-col w-3/5 gap-15">

        <div className="flex flex-col w-full gap-6 my-scrollbar">
          <h2 className="text-2xl font-bold text-center text-primary">Login</h2>

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
              <span className="text-sm text-secondary">{errors.email}</span>
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
              <span className="text-sm text-secondary">{errors.password}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          role="button"
          className="w-2/3 p-2 text-xl font-bold text-white duration-300 place-self-center bg-primary rounded-xl bg-gradient-to-r from-primary to-primary-light hover:scale-102"
        >
          Login
        </button>
      </div>
      <Image src={sideImage} alt="library" className="w-2/5 h-full mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%" />
    </form>

  );
};

export default Login;
