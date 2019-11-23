import React from "react";

import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
async function postData(values) {
  const url = "http://localhost:8080/users/login";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  });
  const rep = await response.json();

  values.props.setUserInfo(rep.user.name, rep.user.email);
  return rep;
}

const SigninForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    //   name: "",
      password: "",
      props: props,
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

export default SigninForm;
