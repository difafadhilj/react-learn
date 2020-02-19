import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyForm() {
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Name : </label>
            <input
              id="name"
              className="form-control"
              type="text"
              name="name"
              ref={register({
                required: "This fields is required",
                minLength: {
                  value: 3,
                  message:
                    "This field is required max length 3 characters length"
                }
              })}
            />
            <span className="text-danger">
              {errors.name && errors.name.message}
            </span>
          </div>
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
              required: {
                value: true,
                message: "This field is required"
              },
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
        <div>
          <input type="submit" className="form-control btn btn-primary mt-4" />
        </div>
      </form>
    </div>
  );
}
