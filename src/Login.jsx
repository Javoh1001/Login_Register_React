import React from 'react';
import {
  Description,
  Wrapper,
  Title,
  InputWrapper,
  Input,
  UserIcon,
  PasswordIcon,
  Info,
  Button,
  Checkbox,
  Forget
} from './style'


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
        </InputWrapper>
        <InputWrapper>
            <PasswordIcon />
            <Input placeholder="Password" />
        </InputWrapper>
        <Info>
          <Checkbox type="checkbox" /> <span>Keep me <br /> loged</span>
            <Button margin1>Log In</Button>
        </Info>
        <Forget href="#">Forget your password ?</Forget>
    </Wrapper>
  );
}

export default Login;
