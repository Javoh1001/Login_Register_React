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
  constructor(props){
    super(props);
    this.state={
      usurname:'',
      password:'',
    }
  }
    render(){
      const onUser = (e)=>{
        this.setState({username:e.target.value})
      }
      const onPas = (e) =>{
        this.setState({password:e.target.value})
      }
      const onSubmit = (e)=>{
        console.log(e.target.value);
      }
      return (
        <Wrapper>
            <form onSubmit={onSubmit}>
            <Description>
                Don't have an account
            </Description>
            <Title>
                Register Now
            </Title>
            <InputWrapper>
                <UserIcon />
                <Input onChange={onUser} placeholder="Desired Username" />
            </InputWrapper>
            <InputWrapper>
                <PasswordIcon />
                <Input onChange={onPas} placeholder="Password"  type="password" />
            </InputWrapper>
            <InputWrapper>
                <PasswordIcon />
                <Input onChange={onPas} placeholder="Confirm Password"  type="password" />
            </InputWrapper>
            <Button>Log In</Button>
            </form>
        </Wrapper>
      );
    }
}

export default Register;
