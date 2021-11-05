import React from 'react';
import {Description, Wrapper, Title, InputWrapper, Input, UserIcon, PasswordIcon,Button} from './style'

function Register() {
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
            <Input placeholder="Password" />
        </InputWrapper>
        <InputWrapper>
            <PasswordIcon />
            <Input placeholder="Confirm Password" />
        </InputWrapper>
        <Button>Log In</Button>
    </Wrapper>
  );
}

export default Register;
