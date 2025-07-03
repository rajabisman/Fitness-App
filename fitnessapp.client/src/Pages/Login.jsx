import Form from "../Components/Form";
function Login() {
  return (
    <div className="flex w-screen h-screen">
      {/* Left Side */}
      <div className="w-1/2 h-162 flex items-center justify-center bg-blue-100">
        <img src="/reg.jpg" alt="" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold mb-4 text-black">Login</h2>
          <Form type="email" label="Email" placeholder="abc@gmail.com" />
          <Form type="password" label="Password" placeholder="xyz123$" />
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
