import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: lightgreen;
`;

const Header = styled.h1`
  font-size: 20px;
  color: teal;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  width: 250px;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
  text-align: center;
`;

const Span = styled.span`
  font-size: 12px;
  text-align: center;
`;

const Login = () => {
  return (
    <Auth>
      <Header>Login</Header>
      <Form>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Login</Button>
        <Error>This is an error</Error>
        <Span>
          Don't have an acoount? <Link to="/register">Register</Link>
        </Span>
      </Form>
    </Auth>
  );
};

export default Login;
