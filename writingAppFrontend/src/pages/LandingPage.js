import React from "react";
import SignupForm from '../components/SigninForm';

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

        <SignupForm setUserInfo={this.setUserInfo}/>
        <h1>Hello {this.state.name}, your email is {this.state.email}</h1>
      </div>
    );
  }
}
