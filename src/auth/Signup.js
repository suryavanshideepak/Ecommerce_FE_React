import React, { useState } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../Schema";
import Loader from "../utility/Loader";
import img from "../images/imggg.png";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  lname: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, action) => {
        setLoader(true)
        console.log(action, values);
        action.resetForm();
        axios
          .post(`http://localhost:4500/user/signup`, {
            name: values.name,
            lname: values.lname,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
          })
          .then(function (response) {
            toast.success('Success Notification !', {
              position: toast.POSITION.TOP_RIGHT
            })
            setLoader(false)
            navigate('/login')
          })
          .catch(function (error) {
            toast.error('Error Notification !', {
              position: toast.POSITION.TOP_RIGHT,
            });
            setLoader(false)
          });
      },
    });

  return (
    <div >
      <ToastContainer />
      {loader ? <Loader /> :
        <div className="main">
          <div className="w-75 bg-white p-5">
              <form className="form form_signup p-5" onSubmit={handleSubmit}>
                <div className="row">
                <h1 className="px-auto nav_l text-center">BucketFull</h1>
                <div className="col-md-6">
                  <label>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="off"
                    placeholder="Name"
                    className="w-100 my-2 "
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label>Last Name</label>
                  <input
                    id="name"
                    name="lname"
                    type="name"
                    autoComplete="off"
                    placeholder="Last Name"
                    className="w-100 my-2"
                    value={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.lname ? (
                    <p className="text-danger">{errors.lname}</p>
                  ) : null}
                  <label>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your mail"
                    className="w-100 my-2"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email}</p>
                  ) : null}
                  <label>password</label>
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    className="w-100 my-2"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    autoComplete="off"
                    placeholder="Re-Enter password"
                    className="w-100 my-2"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="text-danger">{errors.confirm_password}</p>
                  ) : null}
                  <br />
                  <br />
                  <button
                    className="btn btn-dark form-control signup_button"
                    type="submit"
                  >
                    Signup
                  </button>
                </div>
                <div className="col-md-6">
                  <img src={img} alt="" width="100%" height="100%" />
                </div>
                </div>
              </form>
          </div>
        </div>
      }
    </div>
  );
};

export default Signup;
