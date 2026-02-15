import "react-toastify/dist/ReactToastify.css";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="page">
      <form className="form">
        <div className="flex-column">
          <label>Email</label>
        </div>

        <div className="inputForm">
          <Mail size={20} />
          <input placeholder="Enter your Email" className="input" type="text" />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>

        <div className="inputForm">
          <Lock size={20} />
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
          />
        </div>

        <div className="flex-row">
          <div>
            <input type="radio" />
            <span>Remember me</span>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit">Sign In</button>

        <span className="p">
          Don't have an account? <span className="span">Sign Up</span>
        </span>

        <span className="p line">Or With</span>

        <div className="flex-row">
          <button className="btn google">
            <FcGoogle size={20} />
            Google
          </button>
          <button className="btn apple">
            <FaApple size={20} />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
