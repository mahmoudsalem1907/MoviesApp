import React, { useState, useEffect } from "react";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  const [valditerror, setValditeError] = useState([]);
  const [apierror, setApiError] = useState("");

  function handlerAddUser(userDetails) {
    let newUser = { ...user };
    newUser[userDetails.target.name] = userDetails.target.value;
    setUser(newUser);
  }

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  async function handlerSubmit(e) {
    console.log(user);
    e.preventDefault();
    if (ValidateSubmit()) {
      setValditeError([]);
      let { data } = await axios.post(
        "https://route-egypt-api.herokuapp.com/signup",
        user
      );
      if (data.message == "success") {
        navigate("/login");
      } else {
        setApiError(data.message);
      }
      console.log(data);
    }
  }
  function ValidateSubmit() {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(10).required(),
      last_name: Joi.string().alphanum().min(3).max(10).required(),
      age: Joi.number().min(2).required(),
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
      <h2>Register</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          className="form-control my-2"
          name="first_name"
          id=""
          onChange={(e) => {
            handlerAddUser(e);
          }}
        />
        {valditerror.map((e, index) => {
          if (e.message.includes("first_name")) {
            return (
              <p key={index} className="text-danger">
                {e.message}
              </p>
            );
          }
        })}
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          className="form-control my-2"
          name="last_name"
          id=""
          onChange={(e) => {
            handlerAddUser(e);
          }}
        />
        {valditerror.map((e, index) => {
          if (e.message.includes("last_name")) {
            return (
              <p key={index} className="text-danger">
                {e.message}
              </p>
            );
          } else return null;
        })}
        <label htmlFor="">Age</label>
        <input
          type="text"
          className="form-control my-2"
          name="age"
          id=""
          onChange={(e) => {
            handlerAddUser(e);
          }}
        />
        {valditerror.map((e, index) => {
          if (e.message.includes("age")) {
            return (
              <p key={index} className="text-danger">
                {e.message}
              </p>
            );
          } else return "";
        })}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
