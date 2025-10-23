"use client";

import { AppContext } from "@/app/context/AppContext";
import { mockUsers } from "@/app/lib";
import { spawn } from "child_process";
import { profile } from "console";
import { Span } from "next/dist/trace";
import { exit } from "process";
import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const formDataInitialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  favoriteCategories: [] as string[],
};
const errorsInitialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  categories: "",
};

const SignUpPopup = () => {
  const { setShowSignUpPopup, setCurrentLoggedinUser } = useContext(AppContext);
  const [formData, setFormData] = useState(formDataInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const availableCategories = [
    "programming",
    "math",
    "physics",
    "computer architecture",
    "science",
    "stories",
    "education",
    "story",
    "literature",
    "philosophy",
    "psychology",
    "medicine",
  ];

  function generateUniqueId() {
    let attempts = 0;

    while (attempts < 100) {
      const randomNum = Math.floor(Math.random() * 10000);
      const newId = `user_${randomNum}`;
      const exists = mockUsers.some((user) => user.id === newId);
      if (!exists) return newId;
    }
    attempts++;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: value }));
    }
  }

  function toggleCategory(category: string) {
    setFormData((prev) => {
      const categories = [...prev.favoriteCategories];
      const index = categories.indexOf(category);

      if (index === -1) {
        categories.push(category);
      } else {
        categories.splice(index, 1);
      }

      return { ...prev, favoriteCategories: categories };
    });

    if (errors.categories) {
      setErrors((prev) => ({ ...prev, categories: "" }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      categories: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

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

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password doesn't match";
      isValid = false;
    }

    if (formData.favoriteCategories.length === 0) {
      newErrors.categories = "Please select at least one favorite category";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const newUser = {
      id: generateUniqueId(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      name: formData.name.trim(),
      profileImage: "",
      role: "user" as const,
      createdAt: new Date().toISOString().split("T")[0],
      preferences: {
        theme: "system" as const,
        notification: true,
        favoriteCategories: formData.favoriteCategories,
      },
      currentReadings: [] as string[],
      readingHistory: [] as string[],
      savedBooks: [] as string[],
      notes: [] as string[],
    };
    setCurrentLoggedinUser(newUser);
    setShowSignUpPopup(false);
  }

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-black/60 backdrop-blur-sm">
      <form
        action="post"
        onSubmit={handleSubmit}
        className="max-h-[40rem] my-scrollbar overflow-y-scroll p-10 flex max-w-[40rem] gap-10 flex-col border-2 border-double pt-20 rounded-2xl bg-gradient-to-br from-silver-very-dark to-light-black text-silver-very-light fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <FaWindowClose
          onClick={() => setShowSignUpPopup(false)}
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer hover:scale-105 duration-300"
        />
        <div className="flex flex-col gap-6 w-full my-scrollbar">
          <h2 className="text-3xl font-bold text-center text-primary">
            Create Account
          </h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="p-3 rounded-2xl bg-silver-dark text-silver-very-light placeholder:bg-silver focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && (
              <span className="text-secondary text-sm">{errors.name}</span>
            )}
          </div>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your Password"
              className="p-3 rounded-2xl bg-silver-dark text-silver-very-light placeholder:bg-silver focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.confirmPassword && (
              <span className="text-secondary text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Favorite Categories </label>
            <div className="grid-cols-2 grid gap-3">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    checked={formData.favoriteCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4 text-primary bg-silver-dark border-silver rounded focus:ring-primary focus:ring-2"
                  />
                  <label
                    htmlFor={category}
                    className="ml-2 text-silver-very-light cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
            {errors.categories && (
              <span className="text-secondary text-sm">
                {errors.categories}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          role="button"
          className="p-2 w-2/3 place-self-center bg-primary rounded-xl bg-gradient-to-b from-primary to-primary-dark text-xl font-bold hover:scale-105 duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPopup;
