import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),

        phoneNumber: Yup.string()
          .min(9, "Must be 9 numbers exactly")
          .max(9, "Must be 9 numbers exactly")
          .required("Required"),

        email: Yup.string().email("Invalid email address").required("Required"),

        password: Yup.string()
          .min(6, "Must be 6 numbers exactly")
          .max(6, "Must be 6 characters exactly")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form id="settings-form">
        <div className="d-flex flex-column p-3">
          <div className="heading">
            <h6>Create New Admin</h6>
          </div>

          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage
            component="div"
            name="firstName"
            className="errorMessage"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage
            component="div"
            name="lastName"
            className="errorMessage"
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <Field name="phoneNumber" type="number" step="1" />
          <ErrorMessage
            component="div"
            name="phoneNumber"
            className="errorMessage"
          />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage component="div" name="email" className="errorMessage" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="number" />
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
