// Initialize Userfront Core JS
Userfront.init("demo1234");
import Userfront from "@userfront/core";
import React, { Component, FormEvent, ChangeEvent } from 'react';
// import { css } from "@emotion/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sendToGoBackend } from "../../utils/calls";



interface LoginFormState {
  email: string;
  password: string;
}


const TabTitle = `
background-color : #f9f9f9;
width : 100%;
`;


const FormContainer = styled.div`
  font-weight: 700;

  form {
    display: flex;
    flex-direction: column;
    // max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    width: 100%;
    max-width: 100%;
  }

  label {
    margin-bottom: 15px;
    font-size: 16px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;


// Define the Signup form component
// class Login extends React.Component {
  class Login extends Component<{}, LoginFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      // accountName: "",
      password: "",
      // passwordVerify: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Whenever an input changes value, change the corresponding state variable
  handleInputChange(event: { preventDefault: () => void; target: any; }) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  // Handle the form submission by calling Userfront.signup()
  handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    console.log("\n 🚀 ~ Login ~ handleSubmit ~ event:", event)
    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
    event.preventDefault();
    sendToGoBackend({
      email : this.state.email,
      password : this.state.password
    }, 'login')
    
    // Call Userfront.signup()
    // Userfront.login({
    //   method: "password",
    //   email: this.state.email,
    //   password: this.state.password,
    //   data: {
    //     accountName: this.state.accountName,
    //   },
    // });
  }

  render() {
    return (
     <div css={css(TabTitle)} className="col-md-8" expand="lg"> 
        <FormContainer>
          <div>
            LOGIN
          </div>
         <form onSubmit={this.handleSubmit}>
          <label>
            Email address
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
         
          <button type="submit">Login</button>
         </form>
        </ FormContainer>
        </div>
    );
  }
}
export default Login;
