import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../Schema/index";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../utility/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../app/authSlice";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader ]= useState(false)
  const dispatch = useDispatch()
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        setLoader(true)
        dispatch(login({email:values.email,password:values.password})).unwrap().then((res) => {
          console.log(res)
          setLoader(false)
        }).catch((err) => setLoader(false) )
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
