import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <input className="w-full p-2 mb-4 border" type="email" placeholder="Email" />
          <input className="w-full p-2 mb-4 border" type="password" placeholder="Password" />
          <button className="w-full bg-red-400 text-white p-2 rounded hover:bg-red-500" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
