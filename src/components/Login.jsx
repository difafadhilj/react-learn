import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    watch,
    errors,
    getValues,
    formState,
    handleSubmit
  } = useForm();

  const [form, setValues] = useState({
    username: "",
    password: ""
  });

  let history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/login", {
        username: form.username,
        password: form.password
      });

      window.sessionStorage.setItem("role", result.data.role);
      window.sessionStorage.setItem("token", result.data.accessToken);
      window.sessionStorage.setItem("userId", result.data.id);

      if (result.status === 200) {
        if (result.data.role === "ADMIN") {
          history.push("/admin");
        } else {
          history.push("/");
        }
      }
    } catch (err) {
      console.log(err);
      alert("Login gagal");
    }
  };

  const updateField = e => {
    setValues({
      [e.target.name]: e.target.value
    });
  };

  if (window.sessionStorage.getItem("token")) return <h1>Sudah Login</h1>;
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
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
          <label for="password">password :</label>
          <input
            id="password"
            value={form.password}
            className="form-control"
            type="password"
            name="password"
            onChange={updateField}
            ref={register({
              required: "This field is required",
              minLength: {
                value: 3,
                message: "This field required at least 3 characters length"
              }
            })}
          />
          <span className="text-danger">
            {errors.password && errors.password.message}
          </span>
        </div>

        <input
          onClick={handleSubmit(handleLogin)}
          type="submit"
          className="btn btn-primary mt-3"
        />
      </form>
    </div>
  );
}

export default Login;
