import React from "react";
import SigninForm from '../components/SigninForm';
import SignupForm from '../components/SignupForm';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      name: "",
      email: "",
    }
  }
  setUserInfo = (name, email) => {
    this.setState({
      name: name,
      email: email,
    })
  }
  render() {
    return (
      <div>
        <h1>The Landing Page</h1>
        <a href="/writer">test</a>

        <SigninForm setUserInfo={this.setUserInfo}/>
        <h1>Hello {this.state.name}, your email is {this.state.email}. Thanks for creating an account.</h1>
      </div>
    );
  }
}
