import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import NavbarBlack from "../../Shared/Navbar/NavbarBlack";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // console.log(form.get("password"));
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // Validations checkup and return
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters or Longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password should have one Uppercase letter");
      return;
    }

    // reset message
    setErrorMessage("");
    setSuccess("");

    // Create User:
    createUser(email, password)
      .then((result) => {
        setSuccess("User created successfully");
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="max-w-6xl mx-auto mb-10">
      <NavbarBlack></NavbarBlack>
      <div className="h-full border mt-20 py-10 px-28 rounded-lg">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="font-bold text-2xl">Create an account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-warning">
              Create an account
            </button>
          </div>
        </form>

        <h5 className="text-base font-medium text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400">
            Login
          </Link>
        </h5>
      </div>
      <div>
        <div className="flex items-center justify-center w-full my-7">
          <div className="w-1/3 h-px bg-gray-300"></div>
          <span className="px-4 text-xl font-semibold">Or</span>
          <div className="w-1/3 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 mb-4 rounded-full">
          <FaFacebook className="text-xl" />
          <p className="font-medium text-base">Continue with Facebook</p>
        </div>
        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 rounded-full">
          <FaGoogle className="text-xl" />
          <p className="font-medium text-base">Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
