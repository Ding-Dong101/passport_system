'use client'
import Forms from "@/app/Components/forms"; // or "./components/forms/Forms" if that's your structure
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    package: "",
    dob: "",
    nationality: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
  }

  return (
    <Forms
      formData={formData}
      handleChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
