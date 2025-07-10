import { useState } from "react";
import Form from "../Components/Form";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7119/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      if (response.ok) {
        const data = await response.text();
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify({ email }));
        Navigate("/dashboard");
      } else {
        const error = await response.text();
        alert("Login failed: " + error);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Left Side */}
      <div className="w-1/2 h-162 flex items-center justify-center bg-blue-100">
        <img src="/reg.jpg" alt="Login" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">Login</h2>

          <Form
            type="email"
            label="Email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form
            type="password"
            label="Password"
            placeholder="xyz123$"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
