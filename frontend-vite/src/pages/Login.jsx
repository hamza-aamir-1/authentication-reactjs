const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("Login", true);
    history.back();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button
        className="bg-black text-white font-semibold px-5 py-2 mt-3"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
