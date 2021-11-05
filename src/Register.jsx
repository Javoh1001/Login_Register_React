import React from 'react';
import {
  Description,
  Wrapper, 
  Title, 
  InputWrapper, 
  Input, 
  UserIcon, 
  PasswordIcon,
  Button
} from './style'

class Register extends React.Component {
    render(){
      return (
        <Wrapper>
            <Description>
                Don't have an account
            </Description>
            <Title>
                Register Now
            </Title>
            <InputWrapper>
                <UserIcon />
                <Input placeholder="Desired Username" />
            </InputWrapper>
            <InputWrapper>
                <PasswordIcon />
                <Input placeholder="Password"  type="password" />
            </InputWrapper>
            <InputWrapper>
                <PasswordIcon />
                <Input placeholder="Confirm Password"  type="password" />
            </InputWrapper>
            <Button>Log In</Button>
        </Wrapper>
      );
    }
}

export default Register;
