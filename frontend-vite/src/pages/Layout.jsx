import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Login");
    navigate("/");
  };

  return (
    <main>
      <section className="flex items-center justify-center mt-5 gap-5">
        <Link
          className="border border-[silver] px-4 py-2 hover:bg-blue-600 hover:text-white duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border border-[silver] px-4 py-2 hover:bg-blue-600 hover:text-white duration-300"
          to="/about"
        >
          About
        </Link>
        <Link
          className="border border-[silver] px-4 py-2 hover:bg-blue-600 hover:text-white duration-300"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="border border-[silver] px-4 py-2 hover:bg-blue-600 hover:text-white duration-300"
          to="/profile"
        >
          Profile
        </Link>
        <Link
          className="border border-[silver] px-4 py-2 hover:bg-blue-600 hover:text-white duration-300"
          to="/cart"
        >
          Cart
        </Link>
        <button
          onClick={handleLogout}
          className="border border-[silver] px-4 py-2 hover:bg-blue-600 hover:text-white duration-300"
        >
          Logout
        </button>
      </section>
      <section className="mt-5 p-5 w-[70%] mx-auto border border-[silver] rounded-xl text-[22px] font-bold">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
