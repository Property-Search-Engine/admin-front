import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


export default function SignupForm({ createEmployee }) {
  function handleSubmit(newEmployee, { setSubmitting }) {
    createEmployee(newEmployee);
    setTimeout(() => {
      console.log(JSON.stringify(newEmployee, null, 2));
      setSubmitting(false);
    }, 400);
  }
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({

        firstname: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        lastname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),

        phone: Yup.string()
          .min(9, "Must be 9 numbers exactly")
          .max(9, "Must be 9 numbers exactly")
          .required("Required"),

        email: Yup.string().email("Invalid email address").required("Required"),

        password: Yup.string()
          .min(6, "Must be 6 characters at least")
          .required("Required"),
      })}
      onSubmit={handleSubmit}

    >
      <Form id="settings-form">
        <div className="d-flex flex-column p-3">
          <div className="heading">
            <h6>Create New Admin</h6>
          </div>
          <label htmlFor="firstname">First Name</label>
          <Field name="firstname" type="text" />
          <ErrorMessage
            component="div"
            name="firstname"
            className="errorMessage"
          />

          <label htmlFor="lastname">Last Name</label>
          <Field name="lastname" type="text" />
          <ErrorMessage
            component="div"
            name="lastname"
            className="errorMessage"
          />
          <label htmlFor="phone">Phone Number</label>
          <Field name="phone" type="number" step="1" />
          <ErrorMessage component="div" name="phone" className="errorMessage" />
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage component="div" name="email" className="errorMessage" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="text" />
          <ErrorMessage
            component="div"
            name="password"
            className="errorMessage"
          />

          <div className="submitNewAdmin">
            <button type="submit">Submit</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
