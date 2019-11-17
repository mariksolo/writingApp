import React from "react";
import SignupForm from '../components/SignupForm';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formik: 1
    };
  }

  submit = model => {
    fetch("http://example.com/", {
      method: "post",
      body: JSON.stringify(model)
    });
  };
  render() {
    return (
      <div>
        <h1>The Landing Page</h1>
        <a href="/writer">test</a>

        <SignupForm />
      </div>
    );
  }
}
