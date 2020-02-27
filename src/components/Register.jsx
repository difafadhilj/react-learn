import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { register, errors, getValues, handleSubmit } = useForm();
  const history = useHistory();
  const [form, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/register", {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password,
        roles: ["USER"]
      });

      console.log(result);

      if (result.status === 200) {
        alert("Register Success!");
        history.push("/login");
      } else {
        throw new Error("Register failed!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            value={form.name}
            className="form-control"
            type="text"
            name="name"
            onChange={updateField}
            ref={register({
              required: "This fields is required",
              minLength: {
                value: 3,
                message: "This field is required max length 3 characters length"
              }
            })}
          />
          <span className="text-danger">
            {errors.name && errors.name.message}
          </span>
        </div>

        <div>
          <label for="username">Username :</label>
          <input
            id="username"
            value={form.username}
            className="form-control"
            type="text"
            name="username"
            onChange={updateField}
            ref={register({
              required: "This fields is required",
              minLength: {
                value: 3,
                message: "This field is required max length 3 characters length"
              }
            })}
          />
          <span className="text-danger">
            {errors.username && errors.username.message}
          </span>
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            ref={register({
              required: "This fields is required",
              pattern: {
                value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
                message: "Wrong pattern"
              }
            })}
          />
          <span className="text-danger">
            {errors.email && errors.email.message}
          </span>
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            ref={register({
              required: "This field is required",
              minLength: {
                value: 8,
                message: "This field required at least 8 characters length"
              }
            })}
          />
          <span className="text-danger">
            {errors.password && errors.password.message}
          </span>
        </div>

        <div>
          <label htmlFor="confirm_password">Confirm password : </label>
          <input
            id="confirm_password"
            className="form-control"
            type="password"
            name="confirm_password"
            ref={register({
              minLength: {
                value: 8,
                message: "This field required at least 8 characters length"
              },
              required: "This field is required",
              validate: value =>
                value === getValues().password || "Password doesn't match"
            })}
          />
          <span className="text-danger">
            {errors.confirm_password && errors.confirm_password.message}
          </span>
        </div>

        <input
          onClick={handleSubmit(handleRegister)}
          type="submit"
          className="btn btn-primary mt-3"
        />
      </form>
    </div>
  );
}

export default Register;
