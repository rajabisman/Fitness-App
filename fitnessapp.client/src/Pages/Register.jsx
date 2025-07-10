import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:5215/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    });

    if (response.ok) {
      alert("Registered!");
      navigate("/login");
    } else {
      const err = await response.text();
      alert("Registration failed: " + err);
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 bg-blue-100 flex items-center justify-center">
        <img src="/reg.jpg" alt="Register" />
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center"
        >
          <h2 className="text-3xl font-bold text-black">Register</h2>

          <Form
            label="Email"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form
            label="Password"
            type="password"
            placeholder="xyz123$"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Form
            label="Confirm Password"
            type="password"
            placeholder="xyz123$"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
