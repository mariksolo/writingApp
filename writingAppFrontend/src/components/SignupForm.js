import React from "react";

import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
async function postData(values) {
  const url = 'http://localhost:8080/users/login';
  
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const rep = await response.json();
  alert(JSON.stringify(rep));
  return rep; // parses JSON response into native JavaScript objects
}

async function test() {
  console.log("test")
}

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: ""
    },
    onSubmit: postData
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>

      <TextField
        id="email"
        type="email"
        label="Email"
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="name"
        type="name"
        label="Name"
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit" variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
