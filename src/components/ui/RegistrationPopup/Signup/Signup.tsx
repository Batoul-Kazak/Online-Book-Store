"use client";

import { AppContext } from "@/context/AppContext";
import { mockUsers } from "@/_lib";
import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";
import sideImage from "@/app/assets/website/pexels-mccutcheon-1148399.jpg"

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

const Signup = () => {
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
  }

  return (

    <form
      action="post"
      onSubmit={handleSubmit}
      className="flex gap-10 p-10 flex-roww-3/5 pt-30 rounded-2xl text-silver-very-light"
    >
      <div className="flex flex-col w-3/5 gap-15">

        <div className="flex flex-col w-full gap-6 my-scrollbar">
          <h2 className="text-2xl font-bold text-center text-primary">
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
              <span className="text-sm text-secondary">{errors.name}</span>
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
              <span className="text-sm text-secondary">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Favorite Categories </label>
            <div className="grid grid-cols-2 gap-3">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    checked={formData.favoriteCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4 rounded text-primary bg-silver-dark border-silver focus:ring-primary focus:ring-2"
                  />
                  <label
                    htmlFor={category}
                    className="ml-2 cursor-pointer text-silver-very-light"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
            {errors.categories && (
              <span className="text-sm text-secondary">
                {errors.categories}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          role="button"
          className="w-2/3 p-2 text-xl font-bold duration-300 place-self-center bg-primary rounded-xl bg-gradient-to-b from-primary to-primary-dark hover:scale-105"
        >
          Create Account
        </button>
      </div>
      <Image src={sideImage} alt="library" className="w-2/5 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%" />
    </form>

  );
};

export default Signup;
