import React, { useState } from "react";
import { Input } from "./ui";
import { images } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authFailure, authStart, authSuccess } from "../slice/auth";
import { Button } from "@mui/material";
import { EmailTwoTone, VpnKeyTwoTone } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(authStart());
    const user = {
      firstname: '',
      email,
      password,
      uid: null,
      joined_at: null 
    } 
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("You logged in successfully !", {
        position: 'bottom-center'
      })
      
      user.uid = auth.currentUser.uid
      user.joined_at = auth.currentUser.metadata.creationTime
      //  window.location = "/"
      dispatch(authSuccess(user))
      navigate('/')
    } catch (error) {
      dispatch(authFailure(error.error))
      toast.error(error.message, {
        position: "bottom-center"
      })
    }
  };

  return (
    <div className="row mx-auto mt-5 pt-5">
      <div className="col-11 col-sm-8 col-lg-4 col-md-6 mx-auto rounded border p-3 text-end">
        <div className="form-header d-flex justify-content-center align-items-center flex-column">
          <img
            src={images.logo}
            alt="Register"
            style={{ width: "60px" }}
            className="mb-4"
          />
        </div>
        <div className="card text-center border-0">
          <div className="card-header bg-white border-0">
            <ul className="nav nav-tabs card-header-tabs  bg-white d-flex justify-content-center align-items-center ">
              <li
                className="nav-item rouned me-2"
                style={{ backgroundColor: "#67b9f454" }}
              >
                <Link
                  to={"/login"}
                  className="nav-link text-primary border-0"
                  style={{ backgroundColor: "transparent" }}
                >
                  Login
                </Link>
              </li>
              <span
                style={{ width: "1px", height: "30px" }}
                className="bg-primary"
              ></span>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <form>
              <Input
                label={"email"}
                state={email}
                setState={setEmail}
                type={"email"}
                icon={<EmailTwoTone color="primary" />}
              />
              <Input
                label={"password"}
                type={"password"}
                state={password}
                setState={setPassword}
                icon={<VpnKeyTwoTone color="primary" />}
              />
              <Button
                variant="outlined"
                type="submit"
                onClick={(e) => loginHandler(e)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>
                    Processing...{" "}
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
