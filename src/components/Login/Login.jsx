import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const Login = ({ checkLogin }) => {
  let navigate = useNavigate();
  const [valditerror, setValditeError] = useState([]);
  const [apierror, setApiError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handlerAddUser(userDetails) {
    let newUser = { ...user };
    newUser[userDetails.target.name] = userDetails.target.value;
    setUser(newUser);
  }

  async function handlerSubmit(e) {
    console.log(user);
    e.preventDefault();
    if (ValidateSubmit()) {
      setValditeError([]);
      let { data } = await axios.post(
        "https://route-egypt-api.herokuapp.com/signin",
        user
      );
      if (data.message == "success") {
        localStorage.setItem("userToken", data.token);
        checkLogin();
        navigate("/home");
      } else {
        setApiError(data.message);
      }
      console.log(data);
    }
  }

  function ValidateSubmit() {
    let schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,10}$"))
        .required(),
    });
    let validationSchema = schema.validate(user, { abortEarly: false });
    console.log(validationSchema);
    if (validationSchema.error) {
      setValditeError(validationSchema.error.details);
      setApiError("");
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="container">
      {apierror ? (
        <p className="alert alert-danger p-2 mt-2">{apierror}</p>
      ) : (
        ""
      )}
      <h2>Login</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          className="form-control my-2"
          name="email"
          id=""
          onChange={(e) => {
            handlerAddUser(e);
          }}
        />
        {valditerror.map((e, index) => {
          if (e.message.includes("email")) {
            return (
              <p key={index} className="text-danger">
                {e.message}
              </p>
            );
          } else return null;
        })}
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control my-2"
          name="password"
          id=""
          onChange={(e) => {
            handlerAddUser(e);
          }}
        />
        {valditerror.map((e, index) => {
          if (e.message.includes("password")) {
            return (
              <p key={index} className="text-danger">
                "password" Invalid
              </p>
            );
          } else return null;
        })}
        <button className="btn btn-danger ms-auto d-flex " type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
