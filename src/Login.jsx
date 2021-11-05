import React from 'react';
import {Description, Wrapper,Title, InputWrapper, Input, UserIcon} from './style'
function Login() {
  return (
    <Wrapper>
        <Description>
            Already have an account
        </Description>
        <Title>
            Login In Here
        </Title>
        <InputWrapper>
            <UserIcon />
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            
        </InputWrapper>
    </Wrapper>
  );
}

export default Login;
