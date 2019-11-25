import React from "react";
import ReactDOM from "react-dom";

export default class ReaderFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      token: ""
    };
  }
  
  postData = async () => {
    const url = "http://localhost:8080/users/me";
  
    const response = await fetch(url, {
      method: "GET",
    //   mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJlMGUxZTViODI3NjIwNTI2YWRlNmIiLCJpYXQiOjE1NzI3MzY1NDJ9.utfTB8TEOAsRpkruRNExHDtT_iaoE1Nn2Fiq5udYLTs"
      },
    });
    const rep = await response.json();
  
    alert(JSON.stringify(rep));
    return rep;
  }
  componentDidMount = async () => {
    const resp = await this.postData();
    
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
