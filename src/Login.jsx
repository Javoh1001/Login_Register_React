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
  Forget,
  
} from './style'


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username:'',
      password:'',
    }
    
  }
    render(){
      const onUser = (e)=>{
        // console.log(e.target.value);
        this.setState({username:e.target.value})
      }
      const onPas = (e) =>{
        // console.log(e.target.value);
        this.setState({password:e.target.value})
      }
      const onSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
      }
      return (
        <Wrapper>
          <form onSubmit={onSubmit}>
              <Description>
                  Already have an account
              </Description>
              <Title>
                  Login In Here
              </Title>
              <InputWrapper>
                  <UserIcon />
                  <Input onChange={onUser} type="text" placeholder="Username" />
              </InputWrapper>
              <InputWrapper>
                  <PasswordIcon />
                  <Input onChange={onPas} placeholder="Password"  type="password" />
              </InputWrapper>
              <Info>
                <Checkbox type="checkbox" /> <span>Keep me <br /> loged</span>
                  <Button type="submit"  margin1>Log In</Button>
              </Info>
              <Forget href="#">Forget your password ?</Forget>
            </form>
        </Wrapper>
      );
    }
}

export default Login;
