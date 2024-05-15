import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const isLogin = localStorage.getItem("Login");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      Protected <Component />
    </div>
  );
};

export default Protected;
