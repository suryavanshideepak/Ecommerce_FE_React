import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../Schema/index";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../utility/Loader";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader ]= useState(false)
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        setLoader(true)
        axios
          .post(`http://localhost:4500/user/login`,{
            email: values.email,
            password: values.password,
          })
          .then(function (response) {
            if (response) {
              localStorage.setItem("token", response.data.accessToken);
              localStorage.setItem(
                "user",
                JSON.stringify(response.config.data)
              );
              if (localStorage.getItem("token")) {
                navigate("/menproduct");
              } else {
                navigate("/login");
              }
            } else {
              toast.error('Error Notification !', {
                position: toast.POSITION.TOP_RIGHT,
              });
              navigate("/login")
            }
          })
          .catch(function (error) {
            console.log("err", error);
            if (error) {
              toast.error('Error Notification !', {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          });
          toast.success('Success Notification !',{
            position:toast.POSITION.TOP_RIGHT
          })
      },
    });

  return (
    <>
      <div>
        <ToastContainer/>
        {loader ? <Loader/> :
        <div className="main">
          <div className="forme p-5">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="px-auto nav_l">BucketFull</h1>
              <p className="text-dark">Login to get access into your Account</p>
              <label>Email</label>
              <input
                type="text"
                placeholder="email "
                className="form-control"
                name="email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-danger">{errors.email}</p>
              ) : null}
              <br />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              {errors.password && touched.password ? (
                <p className="text-danger">{errors.password}</p>
              ) : null}
              <button
                className="btn btn-dark form-control my-2 signup_button"
                type="submit"
              >
                Login
              </button>
              <br />
              <Link to={"/signup"}>Go To Signup?</Link>
            </form>
          </div>
        </div>
        }
      </div>
    </>
  );
};

export default Login;
